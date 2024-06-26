import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import './ScanSection.css';
import { ChevronSvg, hourglassPng, insecureShieldSvg, partialShieldSvg, secureShieldSvg } from '../../assets/assets';
import ScanButton from './ScanButton';
import { setScanning } from '../../redux/actions/scanStatusActions';
import ScanProgress from '../../components/ScanProgress/ScanProgress';
import { splitTimestamp } from '../../utils/Utils';

export default function ScanSection({ data, slideIndex }) {
    const dispatch = useDispatch();
    const scanStatusData = useSelector(state => state.scanStatusReducer);
    const navigate = useNavigate();
    const { system_status, files_scanned, threats_found, threats_fixed, timestamp } = data;

    const fileTimerId = useRef(null);
    const timeTimerId = useRef(null);

    // TODO: these values should be accessed from redux IMP
    const [progress, setProgress] = useState(0);
    const [scanPause, setScanPause] = useState(false);
    const [totalFileCount, setTotalFileCount] = useState(100);
    const [scannedFileCount, setScannedFileCount] = useState(0);
    const [panelData, setPanelData] = useState({
        time_left: 90000 // 10000ms == 10s
    })

    let statusIcon, component, statusTitle, statusClass;
    switch (system_status) {
        case 'secure':
            statusIcon = secureShieldSvg;
            statusTitle = 'Secure';
            statusClass = 'secure';
            break;
        case 'partial':
            statusIcon = partialShieldSvg;
            statusTitle = 'Partially Secure';
            statusClass = 'partial';
            break;
        case 'insecure':
            statusIcon = insecureShieldSvg;
            statusTitle = 'Not Secure';
            statusClass = 'insecure';
            break;
        default:
            statusIcon = null;
            statusTitle = '';
            statusClass = '';
    }

    // TODO: make all this timer function either as custom hook or function - IMP
    useEffect(() => {
        if(slideIndex === 0) {
            if (scanStatusData.scanning) {
                // if (!fileTimerId.current) {
                    fileTimerId.current = setInterval(() => {
                        setScannedFileCount(prev => prev + 1);
                    }, 100)
                // }
    
                // if (!timeTimerId.current) {
                    timeTimerId.current = setInterval(() => {
                        setPanelData(prev => ({ ...prev, time_left: prev.time_left - 10 }))
                    }, 1)
                // }
            }
    
            return () => {
                clearInterval(fileTimerId.current);
                clearInterval(timeTimerId.current);
            }
        }
    }, [scanStatusData.scanning])

    useEffect(() => {
        if(slideIndex === 0) {
            if (scanStatusData.scanning) {
                // console.log(progress, scannedFileCount, panelData.time_left);
                if (progress >= 1 || panelData.time_left <= 0) {
                    clearInterval(timeTimerId.current);
                    clearInterval(fileTimerId.current);
                    setTimeout(() => {
                        setProgress(0);
                        setScannedFileCount(0);
                        setPanelData(prev => ({ ...prev, time_left: 90000 }));
                        dispatch(setScanning(false));
                    }, 2000)
                }
            }
        }
    }, [progress, panelData.time_left])

    useEffect(() => {
        if(slideIndex === 0) {
            setProgress(scannedFileCount / totalFileCount);
        }
    }, [scannedFileCount, totalFileCount])

    const scanSwitch = () => {
        if (!scanPause) {
            setScanPause(true);
            clearInterval(fileTimerId.current);
            // fileTimerId.current = null;
            clearInterval(timeTimerId.current);
            // timeTimerId.current = null;
        }
        else {
            setScanPause(false);

            fileTimerId.current = setInterval(() => {
                setScannedFileCount(prev => prev + 1);
            }, 100)

            timeTimerId.current = setInterval(() => {
                setPanelData(prev => ({ ...prev, time_left: prev.time_left - 10 }))
            }, 1)
        }
    }

    // TODO: create utility function to create pluralized text based on the count
    const getThreatCountText = (threats_found) => {
        if (parseInt(threats_found) !== 1) {
            return `${threats_found} threats found`;
        }
        return `${threats_found} threat found`;
    }

    const getScannedFilesText = (files_scanned) => {
        if (parseInt(files_scanned) !== 1) {
            return `Scanned ${files_scanned} Files`;
        }
        return `Scanned ${files_scanned} Files`
    }

    const getLastScanTime = (index, timestamp) => {
        if (index === 0) {
            return `${formatDistanceToNow(new Date(timestamp))} ago`
        }
        return format(new Date(timestamp), "EEE dd MMM ''yy hh:mm a")
    }

    // console.log(fileTimerId, timeTimerId);
    return (
        <div className="scan-section">
            {
                slideIndex === 0 ? (
                    scanStatusData.scanning ? (
                        <div className='scan-section__active'>
                            <div className='active__title'>Quick Scan Running</div>
                            <div className='active__scanner'>
                                <div className='scanner__display'>
                                    <ScanProgress progress={progress} pause={scanPause} scanSwitch={scanSwitch} />
                                </div>
                                <div className='scanner__file-count'>
                                    <div className='file-count__title'>Files Scanned</div>
                                    <div className='file-count__value'>{scannedFileCount}</div>
                                </div>
                                <div className='scanner__threat-count'>
                                    <div className='threat-count__title'>Threats Found</div>
                                    <div className='threat-count__value'>23</div>
                                </div>
                                <div className='scanner__timer'>
                                    <div className='timer__time-left'>
                                        <div className='time-left__icon'>
                                            <img src={hourglassPng} alt='timer icon' />
                                        </div>
                                        <div className='time-left__value'>
                                            {+splitTimestamp(panelData.time_left)[0] ? `${splitTimestamp(panelData.time_left)[0]}:` : null}
                                            {splitTimestamp(panelData.time_left)[1]}:
                                            {splitTimestamp(panelData.time_left)[2]}{' '}
                                            {splitTimestamp(panelData.time_left)[3]}
                                        </div>
                                    </div>
                                    <div className='timer__title'>Time Remaining</div>
                                </div>
                            </div>
                            <div className='active__view-details'>
                                <div className='view-details__title' onClick={() => navigate('/user/scan?type=quick')}>View Details</div>
                                <div className='view-details__icon'>
                                    <ChevronSvg fillColor='rgba(243, 182, 23, 1)' />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='scan-section__inactive'>
                            <div className='inactive__system-status'>
                                <div className='system-status__icon'>
                                    <img src={statusIcon} alt='icon' />
                                </div>
                                <div className='system-status__text'>{statusTitle}</div>
                            </div>
                            <div className='inactive__timestamp'>
                                <div className='timestamp__title'>Scanned on</div>
                                <div className='timestamp__value'>{getLastScanTime(slideIndex, timestamp)}</div>
                            </div>

                            <div className='inactive__scan-button'>
                                <ScanButton startScan={() => dispatch(setScanning(true))} />
                            </div>

                            <div className='inactive__scan-options' onClick={() => navigate('/user/scan-options')}>
                                <div className='scan-options__title'>Scan Options</div>
                                <div className='scan-options__icon'>
                                    <ChevronSvg fillColor='rgba(250, 250, 250, 0.5)' />
                                </div>
                            </div>
                        </div>
                    )
                ) : (
                    <div className='scan-section__inactive'>
                        <div className='inactive__system-status'>
                            <div className='system-status__icon'>
                                <img src={statusIcon} alt='icon' />
                            </div>
                            <div className='system-status__text'>{statusTitle}</div>
                        </div>
                        <div className='inactive__timestamp'>
                            <div className='timestamp__title'>Scanned on</div>
                            <div className='timestamp__value'>{getLastScanTime(slideIndex, timestamp)}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
