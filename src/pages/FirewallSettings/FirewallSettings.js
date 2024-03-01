import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './FirewallSettings.css';
import firewallChange from '../../redux/actions/firewallActions';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import Switch from '../../components/Switch/Switch';
import { firewallModes, otherSettings } from './data';
import Radio from '../../components/Radio/Radio';


export default function FirewallSettings(props) {

    const navigate = useNavigate();
    const goTo = (url) => navigate(url); // TODO: make a custom hook out of this and then just it be a navigate() directly

    const dispatch = useDispatch();
    const firewallState = useSelector(state => state.firewallReducer);
    const toggleFirewallSettings = (settingVal) => { // TODO: have individual setting keys instead of a common one
        dispatch(firewallChange({
            ...firewallState,
            [settingVal]: !firewallState[settingVal]
        }))
    }

    const changeFirewallMode = (modeVal) => {
        dispatch(firewallChange({
            ...firewallState,
            firewall_mode: modeVal
        }))
    }

    return (
        <div className='firewall-settings'>
            <ScreenHead
                titleBreadcrumbs={['Firewall', 'Settings']}
                onClick={() => goTo('/user/firewall')}
            >
                <div className='firewall-settings__options'>
                    <div className='options__enable'>
                        <div className='enable__title'>{firewallState.firewallEnabled ? 'Enabled' : 'Disabled'}</div>
                        <div className='enable__button'>
                            <Switch
                                onClick={() => toggleFirewallSettings('firewall_enabled')}
                                checked={firewallState.firewall_enabled}
                            />
                        </div>
                    </div>
                </div>
            </ScreenHead>
            <div className='firewall-settings__section'>
                <div className='section__mode'>
                    <div className='mode__title'>
                        Firewall Mode
                    </div>
                    <div className='mode__options'>
                        <Radio
                            value={firewallState.firewall_mode}
                            selected={firewallState.firewall_mode}
                            customStyle={{
                                container: {

                                }
                            }}
                        >
                            {
                                firewallModes.map(mode => (
                                    <div
                                        className='options__item' 
                                        key={mode.value}
                                        data-value={mode.value}
                                        onChange={changeFirewallMode}
                                    >
                                        <div className='item__detail'>
                                            <div className='options__title'>{mode.title}</div>
                                            <div className='options__desc'>{mode.desc}</div>
                                        </div>
                                        {
                                            mode.recommend && (
                                                <div className='item__tag'>
                                                    Recommended
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </Radio>
                    </div>
                </div>
                <div className='section__other'>
                    <div className='other__title'>Other Settings</div>
                    <div className='other__control-panel'>
                        {
                            otherSettings.map(setting => (
                                <div className='control-panel__item'>
                                    <div className='item__title'>
                                        {setting.title}
                                    </div>
                                    <div className='item__switch'>
                                        <Switch checked={firewallState[setting.value]} onClick={() => toggleFirewallSettings(setting.value)} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
