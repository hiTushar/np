import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScanOptions.css';
import { clock3Png, cloudSyncPng, folderAddPng, laptopPng, memoryPng, securityScanPng, usbOutlinePng } from '../../assets/assets';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import Button from "../../components/Button/Button";
import ScanOptionCard from './ScanOptionCard';
import ScanScheduleModal from '../ScanScheduleModal/ScanScheduleModal';

const scansCardData = [
    {
        icon: laptopPng,
        title: 'Scan PC',
        desc: 'Scans complete PC (Requires more than an hour)'
    },
    {
        icon: memoryPng,
        title: 'Memory Scan',
        desc: 'Scanning files that are actively being used in their raw state.'
    },
    {
        icon: securityScanPng,
        title: 'Vulnerability Scan',
        desc: 'Identifying security weaknesses and flaws in systems and software running on them.'
    },
    {
        icon: folderAddPng,
        title: 'Scan Drive / Folder',
        desc: 'Application that checks the computer\'s hard drive for errors and bad sectors.'
    },
    {
        icon: usbOutlinePng,
        title: 'Scan Removable Device',
        desc: 'Scans a connected device and its boot sectors for viruses and other malware'
    },
    {
        icon: cloudSyncPng,
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
                                    <img src={clock3Png} alt='clock icon' />
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
