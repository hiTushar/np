import { useSelector } from "react-redux"
import { format } from 'date-fns';
import { greenTickPng, insecureShieldSvg, optimizeIconPng, partialShieldSvg, secureShieldSvg } from "../../assets/assets"
import './DailyReport.css';
import Button from '../../components/Button/Button';
import DonutChart from "../../components/DonutChart_/DonutChart";

const OPTIMIZE_REPORT_CHART_DATA = [
    {
        key: 'temp_files_percent',
        title: 'Temp Files',
        percent: '25',
        color: '#FF5F1F'
    },
    {
        key: 'cache_and_cookies_percent',
        title: 'Cache and Cookies',
        percent: '25',
        color: '#3D7BC4'
    },
    {
        key: 'registry_junk_percent',
        title: 'Registry Junk',
        percent: '50',
        color: '#29A197'
    },
]

export default function DailyReport(props) {
    // const { system_status, threats_found, threats_fixed } = useSelector(state => state.scanStatusReducer)
    const { timestamp, system_status, secure_percent, last_week_percent, threats_found, threats_fixed, files_scanned, temp_files_percent, cache_and_cookies_percent, registry_junk_percent } = props;

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
                    Updated on: {format(new Date(timestamp), "EEE dd MMM ''yy hh:mm a")} {/* implement a utility function to convert timestamp to date time string - date-fns */}
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
                                <div className="percent__big">{secure_percent}% Secure</div>
                                <div className="percent__small">from last week <span className="threat-fixed-color">{last_week_percent}%</span></div>
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
                            <div className="threat-count__item">
                                <div className="item__name">Files Scanned</div>
                                <div className="item__val">{files_scanned}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail__optimize-report">
                    <div className="optimize-report__title">Optimization Report</div>
                    <div className="optimize-report__data">
                        <div className="data__chart">
                            <DonutChart 
                                data={OPTIMIZE_REPORT_CHART_DATA}
                                thickness={10}
                                radius={40}
                            />
                        </div>
                        <div className="data__legend">
                            {
                                OPTIMIZE_REPORT_CHART_DATA.map(dataPt => (
                                    <div className="legend__item" key={dataPt.key}>
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
                        customStyle={{
                            padding: '8px 14px',
                            fontSize: '10px',
                            lineHeight: '1'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
