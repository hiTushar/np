import { ApplicationSvg, AuditSvg, HistorySvg, applicationPng, auditPng, historyPng } from '../../assets/assets';

const featuresData = [
    {
        key: 'rules',
        title: 'Rules',
        icons: [auditPng, AuditSvg],
        desc: 'Determine which types of traffic your firewall accepts and  denies.',
        navUrl: '/user/web-security/firewall/features?section=rules'
    },
    {
        key: 'application',
        title: 'Application',
        icons: [applicationPng, ApplicationSvg],
        desc: 'Governs traffic to, from, or by an application or service.',
        navUrl: '/user/web-security/firewall/features?section=application'
    },
    {
        key: 'history',
        title: 'History',
        icons: [historyPng, HistorySvg],
        desc: 'Shows history of blocked applications and other traffic.',
        navUrl: '/user/web-security/firewall/features?section=history'
    },
]

export default featuresData;
