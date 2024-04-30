/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Scan.css';
import { bugPng, folderOpenPng, hourglassPng, medicineBoxPng, radarChartPng, usbPng } from '../../assets/assets';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import InsightActionCard from './InsightActionCard';
import ScanProgress from '../../components/ScanProgress/ScanProgress';
import { splitTimestamp } from '../../utils/Utils';

const insightsCardData = [
    {
        icon: usbPng,
        title: 'USB Flash Drive',
        desc: '22 / 50 Threats were from a  USB devices on to this device',
        action: 'Setup File Protection'
    },
    {
        icon: radarChartPng,
        title: 'Web Protection',
        desc: '22 / 50 Threats were from a  USB devices on to this device',
        action: 'Setup File Protection'
    },
    {
        icon: folderOpenPng,
        title: 'Infected Files',
        desc: '22 / 50 Threats were from a  USB devices on to this device',
        action: 'Setup File Protection'
    },
]

export default function Scan({ props }) {
    // TODO: get values from scanstatusreducer
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    const fileTimerId = useRef(null);
    const timeTimerId = useRef(null);

    // TODO: move all this to redux store for the time being
    const [progress, setProgress] = useState(0);
    const [scanPause, setScanPause] = useState(false);
    const [totalFileCount, setTotalFileCount] = useState(100);
    const [scannedFileCount, setScannedFileCount] = useState(0);
    const [panelData, setPanelData] = useState({
        threats_found: 203,
        threats_fixed: 197,
        time_left: 90000 // 10000ms == 10s
    })

    /*
    // game
    const circleCount = useRef(0);
    const minLeft = useRef();
    const maxLeft = useRef();
    const minTop = useRef();
    const maxTop = useRef();
    const centreLeft = useRef();
    const centreTop = useRef(); 
    */

    useEffect(() => {
        // if(!fileTimerId.current) {
            fileTimerId.current = setInterval(() => {
                setScannedFileCount(prev => prev + 1);
            }, 100)
        // }

        // if(!timeTimerId.current) {
            timeTimerId.current = setInterval(() => {
                setPanelData(prev => ({ ...prev, time_left: prev.time_left - 10}))
            }, 1)
        // }
        return () => {
            clearInterval(fileTimerId.current);
            clearInterval(timeTimerId.current);
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

    /*
    // game
    useEffect(() => {
        
        const gameWindow = document.querySelector('.scan');
        let {
            width: gameWindowWidth,
            height: gameWindowHeight,
            top: gameWindowTop,
            right: gameWindowRight,
            bottom: gameWindowBottom,
            left: gameWindowLeft,
        } = gameWindow.getBoundingClientRect();

        let scanner = document.querySelector('.npav-scan_progress');
        let {
            width: scannerWidth,
            height: scannerHeight,
            top: scannerTop,
            right: scannerRight,
            bottom: scannerBottom,
            left: scannerLeft
        } = scanner.getBoundingClientRect();

        minLeft.current = gameWindowLeft - 50;
        maxLeft.current = gameWindowRight + 50;
        minTop.current = gameWindowTop - 50;
        maxTop.current = gameWindowBottom + 50;
        centreLeft.current = scannerLeft - (scannerWidth / 2);
        centreTop.current = scannerTop - (scannerHeight / 2);

        let createCircleInterval = setInterval(() => {
            let element = document.createElement('div');
            element.dataset.circle = circleCount.current;
            gameWindow.appendChild(element);
            animate(element);
            circleCount.current++;
        }, 1000)

    }, [])
    */

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
                titleBreadcrumbs: ['Quick Scan Running'],
                desc: null,
                onClick: () => navigate('/user')
            }
            children = null;
        }
        else if (type === 'cloud') {
            propObj = {
                titleBreadcrumbs: ['Cloud Scan'],
                desc: 'Our artificial intelligence Cloud Scan is now shielding you form viruses, spyware, and other threats.',
                onClick: () => navigate('/user/scan-options'),
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

    /*
    // game
    function animate(circle) {
        let edge = parseInt(Math.random() * 20) % 4;
        let top = null, left = null, x1 = null, y1 = null;
        switch(edge) {
            // case 0:
            //     top = y1 = minTop.current;
            //     left = x1 = Math.floor(Math.random() * (maxLeft.current - minLeft.current) + minLeft.current);
            //     break;
            case 1:
                top = y1 = Math.floor(Math.random() * (maxTop.current - minTop.current) + minTop.current);
                left = x1 = maxLeft.current;
                break;
            // case 2:
            //     top = y1 = maxTop.current;
            //     left = x1 = Math.floor(Math.random() * (maxLeft.current - minLeft.current) + minLeft.current);
            //     break;
            case 3:
                top = y1 = Math.floor(Math.random() * (maxTop.current - minTop.current) + minTop.current);
                left = x1 = minLeft.current;
                break;
        }
    
        let interval = setInterval(() => {
            switch(edge) {
                case 0: 
                //     // if(top >= centreTop) {
                    // if(checkBreach(left, top)) {
                        clearInterval(interval);
                        setTimeout(() => {
                            circle.remove();
                        }, 10);
                    // }
                //     else {
                //         top++;
                //         left = getX(x1, y1, top); 
                //         circle.style.top = `${top}px`;
                //         circle.style.left = `${left}px`;
                //     }
                    break;
                case 1:
                    if(checkBreach(left, top)) {
                        clearInterval(interval);
                        setTimeout(() => {
                            circle.remove();
                        }, 10);
                    }
                    else {
                        left--;
                        top = getY(x1, y1, left); 
                        circle.style.top = `${top}px`;
                        circle.style.left = `${left}px`;
                    }
                    break;
                case 2:
                //     if(checkBreach(left, top)) {
                        clearInterval(interval);
                        setTimeout(() => {
                            circle.remove();
                        }, 10);
                //     }
                //     else {
                //         top--;
                //         left = getX(x1, y1, top); 
                //         circle.style.top = `${top}px`;
                //         circle.style.left = `${left}px`;
                //     }
                    break;
                case 3:
                    if(checkBreach(left, top)) {
                        clearInterval(interval);
                        setTimeout(() => {
                            circle.remove();
                        }, 10);
                    }
                    else {
                        left++;
                        top = getY(x1, y1, left);
                        circle.style.top = `${top}px`;
                        circle.style.left = `${left}px`;
                    }
                    break;
            }
        }, 1 + Math.random() * 9)
    
        circle.addEventListener('click', () => {
            clearInterval(interval);
            circle.remove();
        })
    }

    function getX(x1, y1, currentY) {
        let slope = (centreLeft.current - x1) / (centreTop.current - y1);
        return slope * (currentY - y1) + x1;
    }
    
    function getY(x1, y1, currentX) {
        let slope = (centreTop.current - y1) / (centreLeft.current - x1);
        return slope * (currentX - x1) + y1;
    }
    
    function checkBreach(currentX, currentY) {
        let distanceFromCentre = Math.sqrt(Math.pow(currentX - centreLeft.current, 2) + Math.pow(currentY - centreTop.current, 2));
        return distanceFromCentre - 25 <= 75;
    }
    */
   
    // console.log(progress, panelData.time_left);
    return (
        <div className='scan'>
            {/* <div style={{
                position: 'absolute',
                top: centreTop.current + 'px',
                left: centreLeft.current + 'px',
                width: '2px',
                height: '2px',
                background: 'red'
            }}></div> */}
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
                                    <img src={bugPng} alt={'bug icon'} />
                                </div>
                                <div className='display__count threat_found'>{panelData.threats_found}</div>
                            </div>
                            <div className='item__title'>Threats Found</div>
                        </div>
                        <div className='panel__item'>
                            <div className='item__display'>
                                <div className='display__icon'>
                                    <img src={medicineBoxPng} alt={'medicine box icon'} />
                                </div>
                                <div className='display__count threat_fixed'>{panelData.threats_fixed}</div>
                            </div>
                            <div className='item__title'>Threats Neutralized</div>
                        </div>
                        <div className='panel__item'>
                            <div className='item__display'>
                                <div className='display__icon'>
                                    <img src={hourglassPng} alt={'hourglass icon'} />
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
