import { useSelector } from "react-redux";
import './TaskbarPanel.css';
import { bugPng, medicineBoxPng, arrowLeftPng, secureShieldSvg, insecureShieldSvg, partialShieldSvg } from "../../assets/assets"
import ScanProgress from "../../components/ScanProgress/ScanProgress";

export default function TaskbarPanel() {
    const { system_status, files_count, files_scanned, threats_found, threats_fixed } = useSelector(state => state.scanStatusReducer)

    // TODO: Add interaction to scanner and other UI enhancements

    const getStatusDisplay = (system_status) => {
        let icon, component, title, statusClass; 
        switch(system_status) {
            case 'scanning': 
                component = <ScanProgress progress={0.65} pause={true} scanSwitch={() => {}} />
                title = 'Quick Scan Running';
                statusClass = 'scanning';
                break;
            case 'secure': 
                icon = secureShieldSvg;
                title = 'System is Secure';
                statusClass = 'secure';
                break;
            case 'partial': 
                icon = partialShieldSvg;
                title = 'System is Partially Secure';
                statusClass = 'partial';
                break;
            case 'insecure':
                icon = insecureShieldSvg;
                title = 'System is Not Secure';
                statusClass = 'insecure';
                break;
            default:
                icon = null;
                title = '';
                statusClass = '';
        }

        return (
            <>
                <div className="display__indicator">
                    {
                        component && component
                    }
                    {
                        icon && (
                            <>
                                <img src={icon} alt='status icon' />
                                <div className="indicator__title">Scan Successful</div>
                            </>
                        )
                    }
                </div>
                <div className={`display__title ${statusClass}`}>{title}</div>
            </>
        )
    }

    return (
        <div className="taskbar-panel">
            <div className="taskbar-panel__status">
                <div className="status__display">
                    {getStatusDisplay(system_status)}
                </div>
                <div className="status__files">
                    Files scanned 
                    <span className="files__count">{files_scanned}/{files_count}</span>
                </div>
            </div>
            <div className="taskbar-panel__threat-section">
                <div className="threat-section__item">
                    <div className="item__display">
                        <div className="display__icon">
                            <img src={bugPng} alt='bug icon' />
                        </div>
                        <div className="display__count threat_found">{threats_found}</div>
                    </div>
                    <div className="item__title">Threats Found</div>
                </div>
                <div className="threat-section__item">
                    <div className="item__display">
                        <div className="display__icon">
                            <img src={medicineBoxPng} alt='medicine box icon' />
                        </div>
                        <div className="display__count threat_fixed">{threats_fixed}</div>
                    </div>
                    <div className="item__title">Threats Neutralized</div>
                </div>
            </div>
            <div className="taskbar-panel__action">
                <div className="action__title">View Details</div>
                <div className="action__icon">
                    <img src={arrowLeftPng} alt='arrow icon' />
                </div>
            </div>
        </div>
    )
}
