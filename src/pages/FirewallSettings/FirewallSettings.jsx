import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import './FirewallSettings.css';
import firewallChange from '../../redux/actions/firewallActions';
import ScreenHead from '../../components/ScreenHead/ScreenHead';
import Switch from '../../components/Switch/Switch';
import Radio from '../../components/Radio/Radio';
import Button from '../../components/Button/Button';
import { firewallModes, otherSettings } from './data';

export default function FirewallSettings(props) {
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const firewallState = useSelector(state => state.firewallReducer);
    
    const [firewallSettingsTemp, setFirewallSettingsTemp] = useState({ ...firewallState })

    const toggleFirewall = () => {
        dispatch(firewallChange({
            firewall_enabled: !firewallState.firewall_enabled
        }))
    }

    const changeFirewallSettings = (val) => {
        setFirewallSettingsTemp(prev => ({ ...prev, ...val }))
    }

    const setDefaultFirewallSettings = () => {
        setFirewallSettingsTemp({
            firewall_mode: 'learning',
            outgoing_rule: true,
            incoming_rule: true,
            outgoing_admin_alert: true,
            incoming_admin_alert: true,
            action_after_timeout: true,
            outgoing_log: true,
            incoming_log: true
        })
    }

    const saveSettings = () => {
        dispatch(firewallChange({
            ...firewallState,
            ...firewallSettingsTemp
        }));
        toast.success('Settings saved!'); // TODO: add a proper callback 'after' redux store is updated - https://fkhadra.github.io/react-toastify/use-react-toastify-with-redux
    }

    return (
        <div className='firewall-settings'>
            <ScreenHead
                titleBreadcrumbs={['Firewall', 'Settings']}
                onClick={() => navigate('/user/web-security/firewall')}
            >
                <div className='firewall-settings__options'>
                    <div className='options__enable'>
                        <div className='enable__title'>{firewallState.firewall_enabled ? 'Enabled' : 'Disabled'}</div>
                        <div className='enable__button'>
                            <Switch
                                onClick={toggleFirewall}
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
                            value={firewallSettingsTemp.firewall_mode}
                            selected={firewallSettingsTemp.firewall_mode}
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
                                        onChange={() => changeFirewallSettings({ firewall_mode: mode.value })}
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
                                        <Switch checked={firewallSettingsTemp[setting.value]} onClick={() => changeFirewallSettings({ [setting.value]: !firewallSettingsTemp[setting.value]})} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='firewall-settings__action'>
                <div className='action__button'>
                    <Button text='DEFAULT' type='secondary' onClick={setDefaultFirewallSettings} />
                    <Button text='APPLY' type='primary' onClick={saveSettings} />
                </div>
            </div>
            <ToastContainer 
                position="top-center"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}
