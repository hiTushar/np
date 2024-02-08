import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Scan.css';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import InsightActionCard from './InsightActionCard';
import ScanProgress from '../../components/ScanProgress/ScanProgress';
import usbIcon from './assets/usb.png';
import radarIcon from './assets/radar-chart.png';
import folderIcon from './assets/folder-open.png';
import bug from './assets/bug.png';
import medicineBox from './assets/medicine-box.png';
import hourglass from './assets/hourglass.png';

const insightsCardData = [
    {
        icon: usbIcon,
        title: 'USB Flash Drive',
        desc: '22 / 50 Threats were from a  USB devices on to this device',
        action: 'Setup File Protection'
    },
    {
        icon: radarIcon,
        title: 'Web Protection',
        desc: '22 / 50 Threats were from a  USB devices on to this device',
        action: 'Setup File Protection'
    },
    {
        icon: folderIcon,
        title: 'Infected Files',
        desc: '22 / 50 Threats were from a  USB devices on to this device',
        action: 'Setup File Protection'
    },
]

export default function Scan({ props }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    const [progress, setProgress] = useState(0);
    const [scanPause, setScanPause] = useState(false);
    const [totalFiles, setTotalFiles] = useState(345345);
    const [scannedFiles, setScannedFiles] = useState(983);
    const [panelData, setPanelData] = useState({
        threats_found: 203,
        threats_fixed: 197,
        time_left: 9000000 // 2 hr 30 min
    })

    const goTo = () => {
        navigate(-1);
    }

    const scanSwitch = () => {

    }

    // const panelItem = ({ })
    useEffect(() => {
        setInterval(() => {
            setProgress(val => val + 0.5);
        }, 50)
    }, [])

    return (
        <div className='scan'>
            <ScreenHead
                title={'Quick Scan Running'}
                onClick={goTo}
            >
            </ScreenHead>
            <div className='scan__status'>
                <div className='status__display'>
                    <div className='display__progress-bar'>
                        <ScanProgress progress={progress} pause={scanPause} scanSwitch={scanSwitch} />
                    </div>
                    <div className='display__progress-data'>
                        <div className='progress-data__process-title'>
                            Advanced Scanning
                        </div>
                        <div className='progress-data__display'>
                            <div className='display__title'>Files Scanned</div>
                            <div className='display__count'>{scannedFiles} / {totalFiles}</div>
                            {/* TODO: comma separated values */}
                        </div>
                    </div>
                </div>
                <div className='status__panel'>
                    <div className='panel__item'>
                        <div className='item__display'>
                            <div className='display__icon'>
                                <img src={bug} alt={'bug icon'} />
                            </div>
                            <div className='display__count threat_found'>{panelData.threats_found}</div>
                        </div>
                        <div className='item__title'>Threats Found</div>
                    </div>
                    <div className='panel__item'>
                        <div className='item__display'>
                            <div className='display__icon'>
                                <img src={medicineBox} alt={'medicine box icon'} />
                            </div>
                            <div className='display__count threat_fixed'>{panelData.threats_fixed}</div>
                        </div>
                        <div className='item__title'>Threats Neutralized</div>
                    </div>
                    <div className='panel__item'>
                        <div className='item__display'>
                            <div className='display__icon'>
                                <img src={hourglass} alt={'hourglass icon'} />
                            </div>
                            <div className='display__count time_left'>{panelData.time_left}</div>
                            {/* TODO: convert timestamp to hour minute second format */}
                        </div>
                        <div className='item__title'>Time Remaining</div>
                    </div>
                </div>
            </div>
            {
                type === 'quick' ? (
                    <div className='scan__insights'>
                        <p className='insights__title'>Insights</p>
                        <div className='insights__cards'>
                            {
                                insightsCardData.map((cardData, index) => <InsightActionCard data={cardData} key={index} />)
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}
