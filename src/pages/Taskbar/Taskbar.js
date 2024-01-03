/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './Taskbar.css'
import ScanStatus from '../../components/ScanStatus/ScanStatus';
import SystemSecureIcon from './assets/system_secure.svg';
import SystemPartialSecureIcon from './assets/system_secure_partial.svg';
import SystemInsecureIcon from './assets/system_insecure.svg';

export default function Taskbar(props) {
    const [status, setStatus] = useState('insecure');

    const getStatus = () => {
        switch(status) {
            case 'scanning': {
                return (
                    <>
                        <ScanStatus />
                        <p className='taskbar-panel-container__status-text taskbar-panel-container__status-text'>Quick Scan Running...</p>
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
            </div>
        </div>
    )
}
