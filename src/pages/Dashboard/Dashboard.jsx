import './Dashboard.css';
import UtilityCard from "./UtilityCard";
import { gearCheckPng, globeCheckPng, indicatorInsecure, indicatorPartial, indicatorSecure, privacyCheckPng, shieldCheckPng } from "../../assets/assets";
import DailyReport from "./DailyReport";
import UpgradeCta from "./UpgradeCta";
import { useSelector } from "react-redux";
import { ReportData } from './ReportData';
import { useEffect, useRef, useState } from 'react';
import ScanSection from './ScanSection';

const UTILITIES_CARD_DATA = [
    {
        key: 'protection',
        title: 'Protection',
        icon: shieldCheckPng,
        desc: 'Enable web-shield and safe application mode to increase the score',
        inc: '20',
        navUrl: '/user/protection'
    },
    {
        key: 'privacy',
        title: 'Privacy',
        icon: privacyCheckPng,
        desc: 'Enable web-shiled and safe application mode to increase the score',
        inc: '10',
        navUrl: '/user/privacy'
    },
    {
        key: 'tuner',
        title: 'System tuner',
        icon: gearCheckPng,
        desc: 'Enable block/unblock games to increase the security score',
        inc: '25',
        navUrl: '/user/system-tuner'
    },
    {
        key: 'web',
        title: 'Web Security',
        icon: globeCheckPng,
        desc: 'Enable block/unblock games to increase the security score',
        inc: '35',
        navUrl: '/user/web-security'
    },
]

export default function Dashboard({ props }) {
    const upgradeStatus = useSelector(state => state.commonReducer['upgrade_done']);
    const slideClassArray = useRef(null);
    const carouselRef = useRef(null);
    const [allReportPanels, setAllReportPanels] = useState([...ReportData]);

    useEffect(() => {
        let allChildNodes = carouselRef.current.children;
        Array.from(allChildNodes).map((node, index) => {
            switch (index) {
                case 0:
                    node.classList.add('slide__one');
                    break;
                case 1:
                    node.classList.add('slide__two');
                    break;
                case 2:
                    node.classList.add('slide__three');
                    break;
                case 3:
                    node.classList.add('slide__four');
                    break;
                default:
                    node.classList.add('slide__after');
                    break;
            }
        })

        slideClassArray.current = Array.from(allChildNodes).map(node => node.classList.value);
    }, [])

    const selectSlide = (timestampSelected) => {
        let selectedReportIndex = allReportPanels.findIndex(report => report.timestamp === timestampSelected);

        if (selectedReportIndex > -1) {
            let allChildNodes = carouselRef.current.children;
            let currentReportIndex = Array.from(carouselRef.current.children).findIndex(node => node.classList.contains('slide__one'));

            if (currentReportIndex > selectedReportIndex) {
                let steps = Math.abs(currentReportIndex - selectedReportIndex);
                for (let i = 0; i < steps; i++) {
                    setTimeout(() => {
                        slideClassArray.current.push('slide__after');
                        if (slideClassArray.current[0] === 'slide__ahead')
                            slideClassArray.current.shift();
                        applyClassArrayToSlides(slideClassArray.current, allChildNodes);
                    }, 400 * i)
                }
            }
            else if (currentReportIndex < selectedReportIndex) {
                let steps = Math.abs(currentReportIndex - selectedReportIndex);
                for (let i = 0; i < steps; i++) {
                    setTimeout(() => {
                        slideClassArray.current.unshift('slide__ahead');
                        if (slideClassArray.current[slideClassArray.current.length - 1] === 'slide__after')
                            slideClassArray.current.pop();
                        applyClassArrayToSlides(slideClassArray.current, allChildNodes);
                    }, 400 * i)
                }
            }
        }
    }

    const applyClassArrayToSlides = (slideClassArray, allChildNodes) => {
        Array.from(allChildNodes).forEach((node, index) => {
            node.classList.value = '';
            node.classList.value = slideClassArray[index];
        })
    }

    const getStatusNotch = (status) => {
        switch (status) {
            case 'secure':
                return indicatorSecure;
            case 'partial':
                return indicatorPartial;
            case 'insecure':
                return indicatorInsecure;
            default:
                return null;
        }
    }

    const CarouselSlide = ({ dataPt, index }) => (
        <div className="" key={dataPt.timestamp}>
            <div className="slide__scan-section">
                <ScanSection data={dataPt} index={index} />
            </div>
            <div className="slide__report-section">
                <div className="report-section__title">Daily Report</div>
                <div className="report-section__panel">
                    <div className="panel__daily-data">
                        <DailyReport
                            system_status={dataPt.system_status}
                            secure_percent={dataPt.secure_percent}
                            last_week_percent={dataPt.last_week_percent}
                            threats_found={dataPt.threats_found}
                            threats_fixed={dataPt.threats_fixed}
                            files_scanned={dataPt.files_scanned}
                        />
                    </div>
                    {
                        upgradeStatus && (
                            <div className="panel__upgrade-cta">
                                <UpgradeCta />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="slide__utilities-section">
                <div className="utilities-section__title">Utilities</div>
                <div className="utilities-section__cards">
                    {
                        UTILITIES_CARD_DATA.map(cardData => <UtilityCard {...cardData} key={cardData.key} />)
                    }
                </div>
            </div>
            <div className='slide__indicator'>
                <img src={getStatusNotch(dataPt.system_status)} alt='panel indicator' style={{ fill: '#FFF' }} />
            </div>
        </div>
    )

    return (
        <div className="dashboard">
            <div className='dashboard__carousel' ref={carouselRef}>
                {
                    /* separate component for better debugging */
                    allReportPanels.map((dataPt, index) => (
                        <CarouselSlide key={new Date(dataPt.timestamp)} dataPt={dataPt} index={index} />
                    ))
                }
            </div>
            <div className="dashboard__timeline">
                {
                    allReportPanels.map(dataPt => (
                        <div className='timeline__element' onClick={() => selectSlide(dataPt.timestamp)} key={dataPt.timestamp}></div>
                    ))
                }
            </div>
        </div>
    )
}
