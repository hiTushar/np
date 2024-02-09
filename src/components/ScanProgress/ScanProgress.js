import './ScanProgress.css';
import pauseIcon from './assets/pause.png';
import playIcon from './assets/play.png';

const FULL_ARC = 2 * Math.PI * 40;

export default function ScanProgress(props) {
    const { progress, pause, scanSwitch } = props;

    const getProgress = (progress) => {

    }

    getProgress(progress);

    return (
        <div className="npav-scan_progress"> 
            <svg viewBox='0 0 101 101'>
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="-0.0" dy="0.1" stdDeviation="0.1" />
                    </filter>
                </defs>
                {/* TODO: shadow not working */}
                <circle
                    cx='50.5'
                    cy='50.5'
                    r='39'
                    fill='transparent'
                    strokeWidth='20'
                    stroke='#b79e3c'
                >
                </circle>
                <circle
                    cx='50.5'
                    cy='50.5'
                    r='40'
                    fill='transparent'
                    strokeWidth='19.5'
                    stroke='#9c8629'
                >
                </circle>
                <circle
                    cx='50.5'
                    cy='50.5'
                    r='40'
                    fill='transparent'
                    strokeWidth='10'
                    strokeDasharray='1 3.2'
                    stroke='#dac651'
                >
                </circle>
                <circle
                    cx='49.5'
                    cy='50.5'
                    r='40'
                    fill='transparent'
                    strokeWidth='19.5'
                    stroke='#f4d352'
                    strokeDasharray={`${FULL_ARC * progress} ${FULL_ARC}`}
                    transform='rotate(-90 50 50)'
                >
                </circle>
            </svg>
            <div className='progress__panel'>
                {/* TODO: Add font and img size control prop or use em unit */}
                <div className='panel__data'>
                    <div className='data__percent'>{parseInt(progress * 100)}</div>
                    <div className='data__symbol'>%</div>
                </div>
                {
                    progress < 1 ? (
                        <div className='panel__control' onClick={scanSwitch}>
                            {
                                !pause ? (
                                    <img src={pauseIcon} alt={'pause icon'} />
                                ) : <img src={playIcon} alt={'play icon'} />
                            }
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
