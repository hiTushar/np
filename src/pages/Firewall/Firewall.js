import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Firewall.css';
import firewallChange from '../../redux/actions/firewallActions';
import featuresData from './data'
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import Switch from '../../components/Switch/Switch';
import FeatureCard from './FeatureCard';
import settings from './assets/settings-2.png';
import FirewallStatsChart from './FirewallStatsChart';

export default function Firewall(props) {
    const navigate = useNavigate();
    const goTo = (url) => navigate(url);

    const dispatch = useDispatch();
    const { firewall_enabled } = useSelector(state => state.firewallReducer);

    const toggleFirewall = () => {
        dispatch(firewallChange({
            firewall_enabled: !firewall_enabled
        }))
    }

    return (
        <div className="firewall">
            <ScreenHead
                titleBreadcrumbs={['Firewall']}
                onClick={() => goTo('/user')}
            >
                <div className='firewall__options'>
                    <div className='options__enable'>
                        <div className='enable__title'>{firewall_enabled ? 'Enabled' : 'Disabled'}</div>
                        <div className='enable__button'>
                            <Switch
                                onClick={toggleFirewall}
                                checked={firewall_enabled}
                            />
                        </div>
                    </div>
                    <div className='options__settings' onClick={() => goTo('/user/firewall/settings')}>
                        <img src={settings} alt='settings button icon' />
                    </div>
                </div>
            </ScreenHead>
            <div className='firewall__data'>
                <div className='data__title'>
                    Connection Statistics
                </div>
                <FirewallStatsChart />
            </div>
            <div className='firewall__features'>
                <div className='features__title'>Features</div>
                <div className='features__all-cards'>
                    {
                        featuresData.map((cardData, index) => <FeatureCard data={cardData} key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}
