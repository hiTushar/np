import { useNavigate } from 'react-router-dom';
import './JunkCleaner.css';
import { alertPng, apiPng } from '../../assets/assets';
import ScreenHead from "../../components/ScreenHead/ScreenHead";
import Button from '../../components/Button/Button';
import OthersCard from './OthersCard';
import Table from '../../components/Table/Table';

const FileSystemData = [
    {
        'Drive Name': 'C',
        'Volume Name': 'My PC',
        'Capacity': '1000 GB',
        'Used Space': '278.5 GB',
        'Free Space': '721.5 GB'
    },
    {
        'Drive Name': 'D',
        'Volume Name': 'Removable Drive',
        'Capacity': '100 GB',
        'Used Space': '100 GB',
        'Free Space': '100 GB'
    },
    {
        'Drive Name': 'E',
        'Volume Name': 'Photo',
        'Capacity': '100 GB',
        'Used Space': '100 GB',
        'Free Space': '100 GB'
    },
    {
        'Drive Name': 'F',
        'Volume Name': 'Assignments',
        'Capacity': '200 GB',
        'Used Space': '150.78 GB',
        'Free Space': '49.22 GB'
    }
]

const othersCardData = [
    {
        icon: alertPng,
        title: 'Start-up Program',
        desc: 'Protects from malware and virus infection over the LAN',
        navUrl: '/user/system-tuner/junk-cleaner/startup',
        state: true
    },
    {
        icon: apiPng,
        title: 'Uninstaller',
        desc: 'Protect from malware and virus infection over the LAN',
        state: true
    },
]

export default function JunkCleaner(props) {
    const navigate = useNavigate();
    
    return (
        <div className="junk-cleaner">
            <ScreenHead
                titleBreadcrumbs={['System Tuner', 'Junk Cleaner']}
                onClick={() => navigate('/user')}
            />
            <div className='junk-cleaner__optimize'>
                <div className='optimize__desc'>
                    Get your PC running up to 90% faster by removing outdated files and optimizing your system
                </div>
                <div className='optimize__action'>
                    <Button type={'primary'} onClick={() => { }}>
                        <div className='action__button'>
                            <div className='button__title'>OPTIMIZE SCAN</div>
                        </div>
                    </Button>
                </div>
            </div>
            <div className='junk-cleaner__file-system'>
                <Table data={FileSystemData} />
            </div>
            <div className='junk-cleaner__others'>
                <div className='others__title'>Others</div>
                <div className='others__clean-disk'>
                    <div className='clean-disk__desc'>
                        Disk Cleanup helps free up space on your hard disk, creating impr9ved system performance
                    </div>
                    <div className='clean-disk__action'>
                        <Button type={'primary'} onClick={() => { }}>
                            <div className='action__button'>
                                <div className='button__title'>CLEAN DISK SPACE</div>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className='others__all-cards'>
                    {
                        othersCardData.map((cardData, index) => <OthersCard data={cardData} key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}
