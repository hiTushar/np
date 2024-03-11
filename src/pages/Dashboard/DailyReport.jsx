import { useSelector } from "react-redux"
import { greenTickPng, insecureShieldSvg, optimizeIconPng, partialShieldSvg, secureShieldSvg } from "../../assets/assets"
import Button from '../../components/Button/Button';

import './DailyReport.css';

const OPTIMIZE_REPORT_CHART_DATA = [
    {
        title: 'Temp Files',
        percent: '29',
        color: '#FF5F1F'
    },
    {
        title: 'Cache and Cookies',
        percent: '23',
        color: '#3D7BC4'
    },
    {
        title: 'Registry Junk',
        percent: '48',
        color: '#29A197'
    },
]

const getDashArray = (percent) => {
    const circumference = 2 * Math.PI * 40;
    const strokeLength = circumference * percent / 100;
    const blankLength = circumference - strokeLength;
    return `${strokeLength.toFixed(2)} ${blankLength.toFixed(2)}`;
}

const getDashOffset = (index, array) => {
    let percentageCovered = 0;
    for(let i = 0; i < index; i++) {
        percentageCovered += parseInt(array[i].percent);
    }

    const circumference = 2 * Math.PI * 40;
    const offsetLength = -circumference * percentageCovered / 100;
    return offsetLength.toFixed(2);
}

export default function DailyReport() {
    const { system_status, files_count, files_scanned, threats_found, threats_fixed } = useSelector(state => state.scanStatusReducer)
    
    const getStatusIcon = (status) => {
        switch(status) {
            case 'secure':
                return secureShieldSvg;
            case 'partial':
                return partialShieldSvg;
            case 'insecure':
                return insecureShieldSvg;
            default: 
                return null;
        }
    }

    return (
        <div className="daily-report">
            <div className="daily-report__timestamp">
                <div className="timestamp__icon">
                    <img src={greenTickPng} alt='tick icon' />
                </div>
                <div className="timestamp__text">
                    Updated on: Thu 01 Dec 04:15 {/* implement a utility function to convert timestamp to date time string - date-fns */}
                </div>
            </div>
            <div className="daily-report__detail">
                <div className="detail__history">
                    <div className="history__title">Weekly System Health History</div>
                    <div className="history__statistics">
                        <div className="statistics__system-status">
                            <div className="system-status__icon">
                                <img src={getStatusIcon(system_status)} alt='status icon' />
                            </div>
                            <div className="system-status__percent">
                                <div className="percent__big">80% Secure</div>
                                <div className="percent__small">from last week <span className="threat-fixed-color">20%</span></div>
                            </div>
                        </div>
                        <div className="statistics__threat-count">
                            <div className="threat-count__item">
                                <div className="item__name">Threat Found</div>
                                <div className="item__val threat-found-color">{threats_found}</div>
                            </div>
                            <div className="threat-count__item">
                                <div className="item__name">Threat Neutralized</div>
                                <div className="item__val threat-fixed-color">{threats_fixed}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail__optimize-report">
                    <div className="optimize-report__title">Optimization Report</div>
                    <div className="optimize-report__data">
                        <div className="data__chart">
                            <svg viewBox="0 0 100 100">
                                <style>
                                    {`
                                    circle {
                                        cx: 50;
                                        cy: 50;
                                        r: 40;
                                        fill: transparent;
                                        stroke-width: 10;
                                        transform-origin: center;
                                        transform: rotate(-90deg);
                                    }`}
                                </style>
                                {
                                    OPTIMIZE_REPORT_CHART_DATA.map((dataPt, index, array) => (
                                        <circle
                                            key={dataPt.title}
                                            stroke={dataPt.color}
                                            strokeDasharray={getDashArray(parseInt(dataPt.percent))}
                                            strokeDashoffset={getDashOffset(index, array)}
                                        ></circle>
                                    ))
                                }
                            </svg>
                        </div>
                        <div className="data__legend">
                            {
                                OPTIMIZE_REPORT_CHART_DATA.map(dataPt => (
                                    <div className="legend__item">
                                        <div className="item__color" style={{ '--item__color': dataPt.color }}></div>
                                        <div className="item__value">{dataPt.percent}%</div>
                                        <div className="item__title">{dataPt.title}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="daily-report__optimize">
                <div className="optimize-details">
                    <div className="optimize-details__icon">
                        <img src={optimizeIconPng} alt='optimize icon' />
                    </div>
                    <div className="optimize-details__text">
                        <div className="text__title">
                            Optimize up to 90%
                        </div>
                        <div className="text__desc">
                            Get your PC running up to 90% faster by removing outdated files from the system.
                        </div>
                    </div>
                </div>
                <div className="optimize__action">
                    <Button
                        text='Optimize now'
                        type='primary'
                    />
                </div>
            </div>
        </div>
    )
}
