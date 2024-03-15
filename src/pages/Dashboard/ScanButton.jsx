import './ScanButton.css';

export default function ScanButton({ startScan }) {
    return (
        <div className="scan-button">
            <div className='scan-button__outer-section'>
                <div className='scan-button__inner-section' onClick={startScan}>
                    <div className='inner-section__text'>
                        Quick Scan
                    </div>
                </div>
            </div>
        </div>
    )
}
