import { useEffect } from 'react';
import './ScanProgress.css';

export default function ScanProgress(props) {
    const { progress, pause, scanSwitch } = props;

    const getProgress = (progress) => {

    }

    getProgress(progress);
    return (
        <div className="npav-scan_progress"> 
            <svg viewBox='0 0 100 100'>
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="-0.0" dy="0.1" stdDeviation="0.1" />
                    </filter>
                </defs>
                <circle
                    cx='50'
                    cy='50'
                    r='40'
                    fill='transparent'
                    stroke-width='20'
                    stroke='#9c8629'
                >
                </circle>
                <circle
                    cx='50'
                    cy='50'
                    r='40'
                    fill='transparent'
                    stroke-width='10'
                    strokeDasharray='1 3.2'
                    stroke='#dac651'
                >
                </circle>
                <circle
                    cx='50'
                    cy='50'
                    r='40'
                    fill='transparent'
                    // filter='url(#shadow)'
                    stroke-width='20'
                    stroke='#f4d352'
                    stroke-dasharray={`${progress} 500`}
                    transform='rotate(-90 50 50)'
                >
                </circle>
                {/* TODO: add changing percent */}
            </svg>
        </div>
    )
}
