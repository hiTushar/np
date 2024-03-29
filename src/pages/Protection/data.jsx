import { AppstoreSvg, BackupSvg, CloudSvg, GoldSvg, LanSvg, MailSvg, OsCircleSvg, SecurityScanSvg, StopSvg, ThunderboltSvg } from '../../assets/assets';

const data = [
    {
        key: 'app',
        title: 'Application Control',
        svgIcon: (fillColor) => <AppstoreSvg fillColor={fillColor} />,
        desc: '',
        navUrl: '/user/protection?section=app'
    },
    {
        key: 'fort',
        title: 'ZV Fort Protection',
        svgIcon: (fillColor) => <GoldSvg fillColor={fillColor} />,
        desc: '',
        navUrl: '/user/protection?section=fort'
    },
    {
        key: 'cloud',
        title: 'Cloud Protection',
        svgIcon: (fillColor) => <CloudSvg fillColor={fillColor}/>,
        desc: 'Scans processes on the cloud to check for the file safety rating',
        navUrl: '/user/protection?section=cloud'
    },
    {
        key: 'os',
        title: 'OS Protection',
        svgIcon: (fillColor) => <OsCircleSvg fillColor={fillColor}/>,
        desc: '',
        navUrl: '/user/protection?section=os'
    },
    {
        key: 'adblock',
        title: 'Ad Blocker',
        svgIcon: (fillColor) => <StopSvg fillColor={fillColor}/>,
        desc: 'Blocks unwanted Advertisements',
        navUrl: '/user/protection?section=adblock'
    },
    {
        key: 'online',
        title: 'Online Protection',
        svgIcon: (fillColor) => <SecurityScanSvg fillColor={fillColor}/>,
        desc: '',
        navUrl: '/user/protection?section=online'
    },
    {
        key: 'email',
        title: 'Email Protection',
        svgIcon: (fillColor) => <MailSvg fillColor={fillColor}/>,
        desc: '',
        navUrl: '/user/protection?section=email'
    },
    {
        key: 'lan',
        title: 'LAN Protection',
        svgIcon: (fillColor) => <LanSvg fillColor={fillColor}/>,
        desc: '',
        navUrl: '/user/protection?section=lan'
    },
    {
        key: 'ids',
        title: 'IDS',
        svgIcon: (fillColor) => <ThunderboltSvg fillColor={fillColor}/>,
        desc: '',
        navUrl: '/user/protection?section=ids'
    },
    {
        key: 'data',
        title: 'Data Protection & Backup',
        svgIcon: (fillColor) => <BackupSvg fillColor={fillColor}/>,
        desc: '',
        navUrl: '/user/protection?section=data'
    },
]

export default data;
