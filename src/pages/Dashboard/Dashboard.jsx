import { Link } from "react-router-dom";
import './Dashboard.css';
import protectionIcon from './assets/shield-check.png';
import privacyIcon from './assets/privacy-check.png';
import tunerIcon from './assets/gear-check.png';
import globeIcon from './assets/globe-check.png';
import UtilityCard from "./UtilityCard";

const UTILITIES_CARD_DATA = [
    {
        key: 'protection',
        title: 'Protection',
        icon: protectionIcon,
        desc: 'Enable web-shield and safe application mode to increase the score',
        inc: '20',
        navUrl: '/user/protection'
    },
    {
        key: 'privacy',
        title: 'Privacy',
        icon: privacyIcon,
        desc: 'Enable web-shiled and safe application mode to increase the score',
        inc: '10',
        navUrl: '/user/privacy'
    },
    {
        key: 'tuner',
        title: 'System tuner',
        icon: tunerIcon,
        desc: 'Enable block/unblock games to increase the security score',
        inc: '25',
        navUrl: '/user/system-tuner'
    },
    {
        key: 'web',
        title: 'Web Security',
        icon: globeIcon,
        desc: 'Enable block/unblock games to increase the security score',
        inc: '35',
        navUrl: '/user/web-security'
    },
]

export default function Dashboard({ props }) {
    return (
        <div className="dashboard">
            <div className="dashboard__control-panel">
                <div className="control-panel__scan"></div>
                <div className="control-panel__report">
                    <div className="report__title">Daily Report</div>
                    <div className="report__daily-data">
                    </div>
                    <div className="report__upgrade-cta"></div>
                </div>
                <div className="control-panel__utilities">
                    <div className="utilities__title">Utilities</div>
                    <div className="utilities__cards">
                        {
                            UTILITIES_CARD_DATA.map(cardData => <UtilityCard {...cardData} key={cardData.key} />)
                        }
                    </div>
                </div>
            </div>
            <div className="dashboard__timeline"></div>
        </div>
    )
}
