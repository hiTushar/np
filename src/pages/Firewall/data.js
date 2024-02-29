import Audit from './assets/Audit.png';
import AuditDark from './assets/AuditDark.png';
import AuditLight from './assets/AuditLight.png';
import Appstore from './assets/Appstore.png';
import AppstoreDark from './assets/AppstoreDark.png';
import AppstoreLight from './assets/AppstoreLight.png';
import History from './assets/History.png';
import HistoryDark from './assets/HistoryDark.png';
import HistoryLight from './assets/HistoryLight.png';

const featuresData = [
    {
        key: 'rules',
        title: 'Rules',
        icons: [Audit, AuditLight, AuditDark],
        desc: 'Determine which types of traffic your firewall accepts and  denies.',
        navUrl: '/user/firewall/features?section=rules'
    },
    {
        key: 'application',
        title: 'Application',
        icons: [Appstore, AppstoreLight, AppstoreDark],
        desc: 'Governs traffic to, from, or by an application or service.',
        navUrl: '/user/firewall/features?section=application'
    },
    {
        key: 'history',
        title: 'History',
        icons: [History, HistoryLight, HistoryDark],
        desc: 'Shows history of blocked applications and other traffic.',
        navUrl: '/user/firewall/features?section=history'
    },
]

export default featuresData;
