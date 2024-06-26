import { useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Timeline.css';
import { compareAsc, format, getDate } from 'date-fns';
import { tooltipFrillPng } from '../../assets/assets';
import { useSelector } from 'react-redux';

const getColorClass = (status) => {
    switch(status) {
        case 'secure': 
            return 'timeline__secure';
        case 'partial':
            return 'timeline__partial';
        case 'insecure':
            return 'timeline__insecure';
        default:
            return ''
    }
}


export default function Timeline({ data, selectSlide, quickPass }) {
    const timelineRef = useRef(null);
    const [timelineSection, setTimelineSection] = useState(0);
    // const timestampNodeRef = useRef(null);
    const { next_scan_timestamp } = useSelector(state => state.scanStatusReducer)

    useEffect(() => {
        let sectionSelected = timelineRef.current.querySelectorAll('.section__ticks')[timelineSection];
        let sectionFirstTick = sectionSelected.querySelectorAll('.timeline__tick')[0];
        highlightSelectedTimestamp(sectionFirstTick);
    })

    let timelineSectionData = useMemo(() => {
        /* splitting days in sets of 7 */
        let dataSplit = data.reduce((final, dataPt, index) => {
            let timelineSection = parseInt(index / 7);
            if(!final[timelineSection]) {
                final[timelineSection] = [];
            }
            final[timelineSection].push(dataPt);
            return final;
        }, [])

        let averageScoreSet = dataSplit.map(set => {
            let score = Math.random();
            if(score < 0.3) 
                return 'insecure';
            else if(score < 0.6) 
                return 'partial';
            else 
                return 'secure';
        })

        let finalData = dataSplit.map((set, index) => ({
            data: [...set],
            avgScore: averageScoreSet[index]
        }))

        return finalData;
    }, [data])

    const jumpToTimelineSection = (event, sectionIndex) => {
        quickPass.current = true;
        let timelineSectionFirstSlideTimestamp = timelineSectionData[sectionIndex].data[0].timestamp;
        selectSlide(timelineSectionFirstSlideTimestamp);
        setTimelineSection(sectionIndex);
    }

    const walkToSlide = (timestamp) => {
        selectSlide(timestamp);
        // setSelectedTimestamp(timestamp);
    }

    const createDistortion = (event) => {
        let hovered = event.currentTarget;
        hovered.style.height = '40px';
        hovered.children[0].style.width = '8px';
        let prev = event.currentTarget.previousElementSibling;
        if(prev) {
            prev.style.height = '34px';
            prev.children[0].style.width = '6px';
            let prevPrev = prev.previousElementSibling;
            if(prevPrev) {
                prevPrev.style.height = '20px';
                prevPrev.children[0].style.width = '4px';
                let prevPrevPrev = prevPrev.previousElementSibling;
                if(prevPrevPrev) {
                    prevPrevPrev.style.height = '14px';
                }
            }
        }

        let next = event.currentTarget.nextElementSibling;
        if(next) {
            next.style.height = '34px';
            next.children[0].style.width = '6px';
            let nextNext = next.nextElementSibling;
            if(nextNext) {
                nextNext.style.height = '20px';
                nextNext.children[0].style.width = '4px';
                let nextNextNext = nextNext.nextElementSibling;
                if(nextNextNext){ 
                    nextNextNext.style.height = '14px';
                }
            }
        } 
    }

    const removeDistortion = (event) => {
       let hovered = event.currentTarget;
        hovered.style.height = '10px';
        hovered.children[0].style.width = '3px';
        let prev = event.currentTarget.previousElementSibling;
        if(prev) {
            prev.style.height = '10px';
            prev.children[0].style.width = '3px';
            let prevPrev = prev.previousElementSibling;
            if(prevPrev) {
                prevPrev.style.height = '10px';
                prevPrev.children[0].style.width = '3px';
                let prevPrevPrev = prevPrev.previousElementSibling;
                if(prevPrevPrev) 
                    prevPrevPrev.style.height = '10px';
            }
        }
        
        let next = event.currentTarget.nextElementSibling;
        if(next) {
            next.style.height = '10px';
            next.children[0].style.width = '3px';
            let nextNext = next.nextElementSibling;
            if(nextNext) {
                nextNext.style.height = '10px';
                nextNext.children[0].style.width = '3px';
                let nextNextNext = nextNext.nextElementSibling;
                if(nextNextNext){ 
                    nextNextNext.style.height = '10px';
                }
            }
        } 
    }

    const modifyTimeline = (event, timestamp) => {
        walkToSlide(timestamp);
        highlightSelectedTimestamp(event.currentTarget);
    }

    const highlightSelectedTimestamp = (selected) => {
        let allSectionPts = selected.closest('.timeline__section > .section__ticks').children;
        Array.from(allSectionPts).forEach(node => {
            if(node.querySelector('.tick__visible').classList.contains('active')) {
                node.querySelector('.tick__visible').classList.remove('active');
            }
        })
        selected.querySelector('.tick__visible').classList.add('active'); 
    }

    const createTimelineTickHoverStyle = (event) => {
        createDistortion(event);
        showTooltip(event);
    }

    const showTooltip = (event) => {
        event.currentTarget.querySelector('.tick__tooltip').classList.add('active');
    }

    const getTooltipText = (data) => {
        const { system_status, threats_found } = data;
        switch(system_status) {
            case 'secure':
                return 'Threat Neutralized';
            case 'partial':
                return 'Threat Quarantined';
            case 'insecure':
                return 'Critical';
        }
    }

    const removeTimelineTickHoverStyle = (event) => {
        removeDistortion(event);
        hideTooltip(event);
    }

    const hideTooltip = (event) => {
        event.currentTarget.querySelector('.tick__tooltip').classList.remove('active');
    }

    const getScoreString = (scoreStr) => {
        switch(scoreStr) {
            case 'secure':
                return 'Secured';
            case 'partial':
                return 'Moderately Secure';
            case 'insecure':
                return 'Not Secure';
            default:
                return '';
        }
    } 

    const getDateRangeString = (data) => {
        let endDate = new Date(data[0].timestamp);
        endDate = format(endDate, 'dd MMMM yyyy');

        let startDate = new Date(data[data.length - 1].timestamp);
        startDate = format(startDate, 'dd MMMM');

        return `${startDate} - ${endDate}`;
    }

    const getNextScanString = (next_scan_timestamp) => {
        let isNextScanToday = compareAsc(new Date(next_scan_timestamp), Date.now()) > -1 && getDate(new Date(next_scan_timestamp)) === getDate(Date.now());
        if(isNextScanToday) {
            let time = format(next_scan_timestamp, 'hh:mm a');
            return `Today (${time})`;
        }

        return `${format(next_scan_timestamp, "dd MMM ''yy hh:mm a")}`
    }

    const getNextScanDay = (next_scan_timestamp) => {
        let day = format(next_scan_timestamp, 'eee');
        return day;
    }

    return (
        <div className='timeline' ref={timelineRef}>
            <div className='timeline__next'>
                <div className='next__tick'>
                    <div className='tick__tooltip'>
                        <div className='tooltip__title'>Next Scan</div>
                        <div className='tooltip__threat'>{getNextScanString(next_scan_timestamp)}</div>
                        <div className='tooltip__frills'>
                            <img src={tooltipFrillPng} alt={'tooltip frill'} />
                        </div>
                    </div>
                </div>
                <div className='next__frills'>
                    <div className='section__date'>{getNextScanDay(next_scan_timestamp)}</div>
                </div>
            </div>
            {
                timelineSectionData.map((section, sectionIndex) => (
                    <div 
                        className={`timeline__section ${timelineSection === sectionIndex ? 'selected' : ''}`}
                        onClick={timelineSection !== sectionIndex ? (event) => jumpToTimelineSection(event, sectionIndex) : () => {}}
                        key={uuidv4()}
                    >
                        <div className='section__ticks'>
                            {
                                section.data.map((dataPt, index) =>(
                                    <div 
                                        className='timeline__tick' 
                                        onClick={timelineSection === sectionIndex ? (event) => modifyTimeline(event, dataPt.timestamp) : () => {}}
                                        onMouseOver={timelineSection === sectionIndex ? (event) => createTimelineTickHoverStyle(event) : () => {}}
                                        onMouseOut={timelineSection === sectionIndex ? (event) => removeTimelineTickHoverStyle(event) : () => {}}
                                        key={dataPt.timestamp}
                                    >
                                        <div className={`tick__visible ${getColorClass(timelineSection === sectionIndex ? dataPt.system_status : section.avgScore)}`}></div>
                                        {
                                            timelineSection === sectionIndex && (
                                                <div className='tick__day'>{format(new Date(dataPt.timestamp), 'EEE')}</div>
                                            )
                                        }
                                        <div className='tick__tooltip'>
                                            <div className='tooltip__title'>
                                                {getTooltipText(dataPt)}
                                            </div>
                                            <div className='tooltip__threat'>
                                                Threats Found {dataPt.threats_found}
                                            </div>
                                            <div className='tooltip__frills'>
                                                <img src={tooltipFrillPng} alt={'tooltip frill'} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            timelineSection !== sectionIndex && (
                                <div className='section__frills'>
                                    <div className='section__underline'></div>
                                    <div className='section__subunderline'></div>
                                    <div className={`section__score section__${section.avgScore}`}>{getScoreString(section.avgScore)}</div>
                                    <div className='section__date'>{getDateRangeString(section.data)}</div>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}
