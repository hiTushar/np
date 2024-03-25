import { useNavigate } from 'react-router-dom';
import laptopIcon from './assets/Laptop.png';
import memoryIcon from './assets/memory.png';
import securityIcon from './assets/SecurityScan.png';
import folderIcon from './assets/FolderAdd.png';
import usbIcon from './assets/Usb.png';
import cloudIcon from './assets/CloudSync.png';
import clock from './assets/clock-3.png';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import Button from "../../components/Button/Button";
import './ScanOptions.css';
import ScanOptionCard from './ScanOptionCard';
import { useState } from 'react';
import ScanScheduleModal from '../ScanScheduleModal/ScanScheduleModal';

const scansCardData = [
    {
        icon: laptopIcon,
        title: 'Scan PC',
        desc: 'Scans complete PC (Requires more than an hour)'
    },
    {
        icon: memoryIcon,
        title: 'Memory Scan',
        desc: 'Scanning files that are actively being used in their raw state.'
    },
    {
        icon: securityIcon,
        title: 'Vulnerability Scan',
        desc: 'Identifying security weaknesses and flaws in systems and software running on them.'
    },
    {
        icon: folderIcon,
        title: 'Scan Drive / Folder',
        desc: 'Application that checks the computer\'s hard drive for errors and bad sectors.'
    },
    {
        icon: usbIcon,
        title: 'Scan Removable Device',
        desc: 'Scans a connected device and its boot sectors for viruses and other malware'
    },
    {
        icon: cloudIcon,
        title: 'Cloud Scan',
        desc: 'Testing cloud-based infrastructure, services and applications for known security vulnerabilities',
        scanType: 'cloud'
    }
]

export default function ScanOptions(props) {
    const navigate = useNavigate();
    const [scheduleModal, setScheduleModal] = useState(false);

    return (
        scheduleModal ? (
            <ScanScheduleModal setScheduleModal={setScheduleModal} />
        ) : (
            <div className="scan-options">
                <ScreenHead titleBreadcrumbs={['Select Scan Type']} onClick={() => navigate('/user')} />
                <div className='scan-options__schedule'>
                    <div className='schedule__desc'>
                    Option to scan your PC, and removable drives for the latest viruses and emerging threats
    with enhanced cloud protection
                    </div>
                    <div className='schedule__action'>
                        <Button type={'primary'} onClick={() => setScheduleModal(true)}>
                            <div className='action__button'>
                                <div className='button__icon'>
                                    <img src={clock} alt='clock icon' />
                                </div>
                                <div className='button__title'>SCHEDULE SCAN</div>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className='scan-options__scans'>
                    <div className='scans__title'>Scans</div>
                    <div className='scans__cards'>
                        {
                            scansCardData.map((cardData, index) => <ScanOptionCard data={cardData} key={index} />)
                        }
                    </div>
                </div>
            </div>
        ))
}
