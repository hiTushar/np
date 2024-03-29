import './CarouselSlide.css';
import DailyReport from './DailyReport';
import ScanSection from './ScanSection';
import UpgradeCta from './UpgradeCta';
import UtilityCard from './UtilityCard';
import { gearCheckPng, globeCheckPng, privacyCheckPng, shieldCheckPng, indicatorInsecure, indicatorPartial, indicatorSecure } from "../../assets/assets";

const UTILITIES_CARD_DATA = [
    {
        key: 'protection',
        title: 'Protection',
        icon: shieldCheckPng,
        desc: 'Enable web-shield and safe application mode to increase the score',
        inc: '20',
        navUrl: '/user/protection?section=app'
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

export default function CarouselSlide ({ dataPt, upgradeStatus, slideIndex }) { 
   return (
        <div className="" key={dataPt.timestamp}>
            <div className="slide__scan-section">
                <ScanSection data={dataPt} slideIndex={slideIndex} />
            </div>
            <div className="slide__report-section">
                <div className="report-section__title">Daily Report</div>
                <div className="report-section__panel">
                    <div className="panel__daily-data">
                        <DailyReport
                            timestamp={dataPt.timestamp}
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
} 
