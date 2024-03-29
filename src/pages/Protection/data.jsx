import { AppstoreSvg, BackupSvg, CloudSvg, GoldSvg, LanSvg, MailSvg, OsCircleSvg, SecurityScanSvg, StopSvg, ThunderboltSvg } from '../../assets/assets';

const data = [
    {
        key: 'app',
        title: 'Application Control',
        SvgIcon: AppstoreSvg,
        desc: '',
        navUrl: '/user/protection?section=app'
    },
    {
        key: 'fort',
        title: 'ZV Fort Protection',
        // SvgIcon: (fillColor) => <GoldSvg fillColor={fillColor} />,
        SvgIcon: GoldSvg,
        desc: '',
        navUrl: '/user/protection?section=fort'
    },
    {
        key: 'cloud',
        title: 'Cloud Protection',
        SvgIcon: CloudSvg,
        desc: 'Scans processes on the cloud to check for the file safety rating',
        navUrl: '/user/protection?section=cloud'
    },
    {
        key: 'os',
        title: 'OS Protection',
        SvgIcon: OsCircleSvg,
        desc: '',
        navUrl: '/user/protection?section=os'
    },
    {
        key: 'adblock',
        title: 'Ad Blocker',
        SvgIcon: StopSvg,
        desc: 'Blocks unwanted Advertisements',
        navUrl: '/user/protection?section=adblock'
    },
    {
        key: 'online',
        title: 'Online Protection',
        SvgIcon: SecurityScanSvg,
        desc: '',
        navUrl: '/user/protection?section=online'
    },
    {
        key: 'email',
        title: 'Email Protection',
        SvgIcon: MailSvg,
        desc: '',
        navUrl: '/user/protection?section=email'
    },
    {
        key: 'lan',
        title: 'LAN Protection',
        SvgIcon: LanSvg,
        desc: '',
        navUrl: '/user/protection?section=lan'
    },
    {
        key: 'ids',
        title: 'IDS',
        SvgIcon: ThunderboltSvg,
        desc: '',
        navUrl: '/user/protection?section=ids'
    },
    {
        key: 'data',
        title: 'Data Protection & Backup',
        SvgIcon: BackupSvg,
        desc: '',
        navUrl: '/user/protection?section=data'
    },
]

export default data;
