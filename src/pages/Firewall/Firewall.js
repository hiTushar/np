import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Firewall.css';
import firewallSettingChange from '../../redux/actions/firewallActions';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import Switch from '../../components/Switch/Switch';
import SettingCard from './SettingCard';
import settings from './assets/settings-2.png';
import Audit from './assets/Audit.png';
import Appstore from './assets/Appstore.png';
import History from './assets/History.png';

const settingsCardData = [
    {
        title: 'Rules',
        icon: Audit,
        desc: 'Determine which types of traffic your firewall accepts and  denies.',
        navUrl: '/user/firewall/settings?section=rules'
    },
    {
        title: 'Application',
        icon: Appstore,
        desc: 'Governs traffic to, from, or by an application or service.',
        navUrl: '/user/firewall/settings?section=application'
    },
    {
        title: 'History',
        icon: History,
        desc: 'Shows history of blocked applications and other traffic.',
        navUrl: '/user/firewall/settings?section=history'
    },
]

export default function Firewall(props) {
    const navigate = useNavigate();
    const goTo = () => navigate('/user');

    const dispatch = useDispatch();
    const { firewallState } = useSelector(state => state.firewallReducer);

    const toggleFirewall = () => {
        dispatch(firewallSettingChange({
            enabled: !firewallState.enabled
        }))
    }

    return (
        <div className="firewall">
            <ScreenHead
                titleBreadcrumbs={['Firewall']}
                onClick={goTo}
            >
                <div className='firewall__options'>
                    <div className='options__enable'>
                        <div className='enable__title'>{firewallState.enabled ? 'Enabled' : 'Disabled'}</div>
                        <div className='enable__button'>
                            <Switch
                                onClick={toggleFirewall}
                                checked={firewallState.enabled}
                            />
                        </div>
                    </div>
                    <div className='options__settings'>
                        <img src={settings} alt='settings button icon' />
                    </div>
                </div>
            </ScreenHead>
            <div className='firewall__statistics'></div>
            <div className='firewall__settings'>
                <div className='settings__title'>Features</div>
                <div className='settings__all-cards'>
                    {
                        settingsCardData.map((cardData, index) => <SettingCard data={cardData} key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}
