import './Protection.css';
import AdBlocker from './AllTypes/AdBlocker';
import AppProtection from './AllTypes/AppProtection';
import CloudProtection from './AllTypes/CloudProtection';
import DataProtection from './AllTypes/DataProtection';
import EmailProtection from './AllTypes/EmailProtection';
import FortProtection from './AllTypes/FortProtection';
import Ids from './AllTypes/Ids';
import LanProtection from './AllTypes/LanProtection';
import OnlineProtection from './AllTypes/OnlineProtection';
import OsProtection from './AllTypes/OsProtection';
import data from './data';

const protectionSectionUI = [
    {
        key: 'app',
        component: AppProtection 
    },
    {
        key: 'fort',
        component: FortProtection 
    },
    {
        key: 'cloud',
        component: CloudProtection
    },
    {
        key: 'os',
        component: OsProtection 
    },
    {
        key: 'adblock',
        component: AdBlocker 
    },
    {
        key: 'online',
        component: OnlineProtection 
    },
    {
        key: 'email',
        component: EmailProtection 
    },
    {
        key: 'lan',
        component: LanProtection 
    },
    {
        key: 'ids',
        component: Ids 
    },
    {
        key: 'data',
        component: DataProtection 
    },
]

const getSection = (section, toggleProtection) => {
    const sectionUI = protectionSectionUI.filter(protectionSection => protectionSection.key === section)[0];
    const sectionData = data.filter(protectionSection => protectionSection.key === section)[0];
    return <sectionUI.component sectionData={sectionData} toggleProtection={toggleProtection} />;
}

export default function ProtectionMainPanel({ sectionSelected, toggleProtection }) {
    return (
        <div className='protection__main-panel'>
            {getSection(sectionSelected, toggleProtection)}
        </div>
    )
}
