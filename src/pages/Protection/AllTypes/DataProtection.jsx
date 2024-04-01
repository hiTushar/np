import { ToastContainer, toast } from "react-toastify";
import { harddiskPng } from "../../../assets/assets"
import Button from "../../../components/Button/Button";

const DRIVES_DATA = [
    {
        key: 'c_drive',
        title: 'Back Drive (C:)',
        used: ['454', 'GB'],
        total: ['512', 'GB']
    }
]

const getDriveStatus = (used, total) => {
    let progress = (+used / +total).toFixed(2) * 100;
    return (
        <div className="drive__complete">
            <div className="drive__fill" style={{ '--width': `${progress}%` }}></div>
        </div>
    )
}

export default function DataProtection() {
    return (
        <div className="data-protection">
            <div className="data-protection__drives">
                <div className="drives__title">Devices and Drives ({DRIVES_DATA.length})</div>
                <div className="drives__all">
                    {
                        DRIVES_DATA.map(item => (
                            <div className="drives__item">
                                <div className="item__icon">
                                    <img src={harddiskPng} alt='harddisk icon' />
                                </div>
                                <div className="item__details">
                                    <div className="details__title">{item.title}</div>
                                    <div className="details__status">{getDriveStatus(item.used[0], item.total[0])}</div>
                                    <div className="details__numeric">{item.used[0]} {item.used[1]} free of {item.total[0]} {item.total[1]}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="data-protection__backup">
                <div className="backup__title">Backup Details</div>
                <div className="backup__details">
                    <div className="details__item">
                        <div className="item__title">Space used by backup <span>52.1 MB</span></div>
                        <div className="item__interval">Backup Interval 3 Days</div>
                    </div>
                </div>
            </div>
            <div className="data-protection__action">
                <Button 
                    text='CANCEL'
                    type='secondary'
                    onClick={() => {}}
                />
                <Button
                    text='APPLY'
                    type='primary'
                    onClick={() => toast.success('Settings saved!')}
                />
            </div>
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}
