import './Dashboard.css';
import UtilityCard from "./UtilityCard";
import { gearCheckPng, globeCheckPng, privacyCheckPng, shieldCheckPng } from "../../assets/assets";
import DailyReport from "./DailyReport";
import UpgradeCta from "./UpgradeCta";
import { useSelector } from "react-redux";

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
    return (
        <div className="dashboard">
            <div className="dashboard__control-panel">
                <div className="control-panel__scan"></div>
                <div className="control-panel__report">
                    <div className="report__title">Daily Report</div>
                    <div className="report__panel">
                        <div className="panel__daily-data">
                            <DailyReport />
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
