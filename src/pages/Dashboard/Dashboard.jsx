import './Dashboard.css';
import UtilityCard from "./UtilityCard";
import { gearCheckPng, globeCheckPng, indicatorInsecure, indicatorPartial, indicatorSecure, privacyCheckPng, shieldCheckPng } from "../../assets/assets";
import DailyReport from "./DailyReport";
import UpgradeCta from "./UpgradeCta";
import { useSelector } from "react-redux";
import { ReportData } from './ReportData';
import { useState } from 'react';

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
    const [timestamp, setTimestamp] = useState(null);
    const [allReportPanels, setAllReportPanels] = useState([...ReportData]);
    const [visibleReportPanels, setVisibleReportPanels] = useState([...ReportData].slice(0, 4));
    
    const selectTime = (timestamp) => {
        /**
         * find the index of the report data with the timestamp
         */
        
    }

    const getStatusNotch = (status) => {
        switch(status) {
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

    return (
        <div className="dashboard">
            <div className='dashboard__carousel'>
                {
                    visibleReportPanels.map(dataPt => (
                        <div className="carousel__panel" key={dataPt.timestamp}>
                            <div className="panel__scan"></div>
                            <div className="panel__report">
                                <div className="report__title">Daily Report</div>
                                <div className="report__panel">
                                    <div className="panel__daily-data">
                                        <DailyReport 
                                            system_status={dataPt.system_status}
                                            secure_percent={dataPt.secure_percent}
                                            last_week_percent={dataPt.last_week_percent}
                                            threats_found={dataPt.threats_found}
                                            threats_fixed={dataPt.threats_fixed}
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
                            <div className="panel__utilities">
                                <div className="utilities__title">Utilities</div>
                                <div className="utilities__cards">
                                    {
                                        UTILITIES_CARD_DATA.map(cardData => <UtilityCard {...cardData} key={cardData.key} />)
                                    }
                                </div>
                            </div>
                            <div className='panel__indicator'>
                                <img src={getStatusNotch(dataPt.system_status)} alt='panel indicator' style={{ fill: '#FFF' }} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="dashboard__timeline">
                {
                    allReportPanels.map(dataPt => (
                        <div className='timeline__element' onClick={() => selectTime(dataPt.timestamp)}></div>
                    ))
                }
            </div>
        </div>
    )
}
