/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './Taskbar.css'
import ScanStatus from '../../components/ScanStatus/ScanStatus';
import SystemSecureIcon from './assets/system_secure.svg';
import SystemPartialSecureIcon from './assets/system_secure_partial.svg';
import SystemInsecureIcon from './assets/system_insecure.svg';
import bug from "./assets/BugFilled.svg";
import arrow from "./assets/arrow-right.svg";
import medicine from "./assets/MedicineBoxFilled.svg"
export default function Taskbar(props) {
    const [status, setStatus] = useState('scanning');

    const getStatus = () => {
        switch(status) {
            case 'scanning': {
                return (
                    <>
                        <ScanStatus />
                        <p className='taskbar-panel-container__status-text quick_scan'>Quick Scan Running...</p>
                    </>
                )
            }

            case 'secure': {
                return (
                    <>
                        <img src={SystemSecureIcon} className='taskbar-panel-container__status-icon' alt={'system secure icon'} />
                        <p className='taskbar-panel-container__status-icon-text'>Scan Successful</p>
                        <p className='taskbar-panel-container__status-text taskbar-panel-container__status-text--secure'>System is Secure</p>
                    </>
                )
            }

            case 'partial': {
                return (
                    <>
                        <img src={SystemPartialSecureIcon} className='taskbar-panel-container__status-icon' alt={'system partially secure icon'} />
                        <p className='taskbar-panel-container__status-icon-text'>Scan Successful</p>
                        <p className='taskbar-panel-container__status-text taskbar-panel-container__status-text--partial'>System is Partially Secure</p>
                    </>
                ) 
            }

            case 'insecure': {
                return (
                    <>
                        <img src={SystemInsecureIcon} className='taskbar-panel-container__status-icon' alt={'system insecure icon'} />
                        <p className='taskbar-panel-container__status-icon-text'>Scan Successful</p>
                        <p className='taskbar-panel-container__status-text taskbar-panel-container__status-text--insecure'>System is Not Secure</p>
                    </>
                ) 
                
            }

            default: 
                return null;
        }
        
    }

    return (
        <div className='taskbar-panel-container'>
            <div className='taskbar-panel-container__status'>
                {
                    getStatus()
                }
                <div className='files_scaned'>Files scanned <span className='found'>45703</span><span className='total'>/4,50,000</span></div>
                <div className='threats_found'><img src={bug} alt="bug" title="bug" /> 203</div>
                <div className='threats'>Threats Found</div>
                <div className='threats_neutrilized'><img src={medicine} alt="medicine" title="medicine" /> 197</div>
                <div className='threats'>Threats Neutralized</div>
                <div className='view_details'>View Details <img src={arrow} alt="arrow" title="arrow" /></div>
            </div>
        </div>
    )
}
