import { useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Timeline.css';

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


export default function Timeline({ data, onClick }) {
    const timelineRef = useRef(null);
    const [timelineSection, setTimelineSection] = useState(0);

    let timelineSectionData = useMemo(() => {
        return data.reduce((final, dataPt, index) => {
            let timelineSection = parseInt(index / 7);
            if(!final[timelineSection]) {
                final[timelineSection] = [];
            }
            final[timelineSection].push(dataPt);
            return final;
        }, [])
    }, [data])

    const selectTimelineSection = (event, sectionIndex) => {
        event.stopPropagation();
        setTimelineSection(sectionIndex);
        onClick(timelineSectionData[sectionIndex][0].timestamp);
    }

    const createDistortion = (event) => {
        let hovered = event.target;
        hovered.style.height = '40px';
        hovered.children[0].style.width = '8px';
        let prev = event.target.previousElementSibling;
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

        let next = event.target.nextElementSibling;
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
       let hovered = event.target;
        hovered.style.height = '10px';
        hovered.children[0].style.width = '3px';
        let prev = event.target.previousElementSibling;
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
        
        let next = event.target.nextElementSibling;
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

    return (
        <div className='timeline' ref={timelineRef}>
            {
                timelineSectionData.map((section, sectionIndex) => (
                    <div 
                        className={`timeline__section ${timelineSection === sectionIndex ? 'selected' : ''}`}
                        onClick={(event) => selectTimelineSection(event, sectionIndex)}
                        key={uuidv4()}
                    >
                        {
                            section.map((dataPt, index) =>(
                                <div 
                                    className='timeline__tick' 
                                    onClick={timelineSection === sectionIndex ? () => onClick(dataPt.timestamp) : () => {}}
                                    onMouseOver={timelineSection === sectionIndex ? createDistortion : () => {}}
                                    onMouseOut={timelineSection === sectionIndex ? removeDistortion : () => {}}
                                    key={dataPt.timestamp}
                                >
                                    <div className={`tick__visible ${getColorClass(dataPt.system_status)}`}></div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
