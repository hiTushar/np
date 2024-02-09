/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
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
import { splitTimestamp } from '../../utils/Utils';

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

    const fileTimerId = useRef(null);
    const timeTimerId = useRef(null);

    const [progress, setProgress] = useState(0);
    const [scanPause, setScanPause] = useState(false);
    const [totalFileCount, setTotalFileCount] = useState(100);
    const [scannedFileCount, setScannedFileCount] = useState(0);
    const [panelData, setPanelData] = useState({
        threats_found: 203,
        threats_fixed: 197,
        time_left: 90000 // 10000ms == 10s
    })

    useEffect(() => {
        if(!fileTimerId.current) {
            fileTimerId.current = setInterval(() => {
                setScannedFileCount(prev => prev + 1);
            }, 100)
        }

        if(!timeTimerId.current) {
            timeTimerId.current = setInterval(() => {
                setPanelData(prev => ({ ...prev, time_left: prev.time_left - 10}))
            }, 1)
        }
    }, [])

    useEffect(() => {
        if(progress >= 1) {
            clearInterval(fileTimerId.current);
        }
        if(progress >= 1 || panelData.time_left <= 0) {
            clearInterval(timeTimerId.current);
        }
    }, [progress, panelData.time_left])

    useEffect(() => {
        setProgress(scannedFileCount / totalFileCount);
    }, [scannedFileCount, totalFileCount])

    const goTo = () => {
        navigate(-1);
    }

    const scanSwitch = () => {
        if(!scanPause) {
            setScanPause(true);
            clearInterval(fileTimerId.current);
            clearInterval(timeTimerId.current);
        }
        else {
            setScanPause(false);

            fileTimerId.current = setInterval(() => {
                setScannedFileCount(prev => prev + 1);
            }, 100)

            timeTimerId.current = setInterval(() => {
                setPanelData(prev => ({ ...prev, time_left: prev.time_left - 10}))
            }, 1)
        }
    }

    const getScreenHead = (type) => {
        let propObj = {}, children = null;

        if(type === 'quick') {
            propObj = {
                title: 'Quick Scan Running',
                desc: null,
                onClick: goTo
            }
            children = null;
        }
        else if (type === 'cloud') {
            propObj = {
                title: 'Cloud Scan',
                desc: 'Our artificial intelligence Cloud Scan is now shielding you form viruses, spyware, and other threats.',
                onClick: goTo,
            }
            children = null;
        }
        
        return (
            <ScreenHead 
                {...propObj}
            >
                {children}
            </ScreenHead>
        )
    }

    return (
        <div className='scan'>
            <div className='scan__header'>
                {getScreenHead(type)}
            </div>
            <div className='scan__body'>
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
                                <div className='display__count'>{scannedFileCount} / {totalFileCount}</div>
                                {/* TODO: comma separated values */}
                                {/* TODO: add dynamic space before the files scanned count so that 'Files Scanned' text does shift as the file count changes  */}
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
                                <div className='display__count time_left'>
                                    {+splitTimestamp(panelData.time_left)[0] ? `${splitTimestamp(panelData.time_left)[0]}:` : null}
                                    {splitTimestamp(panelData.time_left)[1]}:
                                    {splitTimestamp(panelData.time_left)[2]}{' '}
                                    {splitTimestamp(panelData.time_left)[3]}
                                </div>
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
        </div>
    )
}
