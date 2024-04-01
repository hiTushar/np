import { useState } from "react";
import Switch from "../../../components/Switch/Switch";
import SettingsBanner from "./SettingsBanner";
import Button from '../../../components/Button/Button';
import { ToastContainer, toast } from "react-toastify";

const SETTINGS_OPTION = [
    {
        key: 'social',
        title: 'Social Sites Ads Blocker',
        enabled: true
    },
    {
        key: 'torrent',
        title: 'UTorrent Video Ads Blocker',
        enabled: false
    },
    {
        key: 'youtube',
        title: 'YouTube Video Ads Blocker',
        enabled: true
    },
]

export default function AdBlocker({ sectionData, toggleProtection }) {
    let [settings, setSettings] = useState([...SETTINGS_OPTION]);

    const toggleSetting = (val) => {
        let temp = settings.reduce((all, current) => {
            if(current.key === val) {
                current.enabled = !current.enabled;
            }

            return all.concat(current);
        }, []);
        setSettings(temp);
    }

    return (
        <div className='adblocker'>
            <div className='adblocker__banner'>
                <SettingsBanner sectionData={sectionData} toggleProtection={toggleProtection} />
            </div>
            <div className='adblocker__settings'>
                <div className='settings__title'>Advance Settings</div>
                <div className='settings__options'>
                    {
                        settings.map(option => (
                            <div className="options__item" key={option.key}>
                                <div className="item__title">{option.title}</div>
                                <div className="item__button">
                                    <Switch 
                                        checked={option.enabled}
                                        onClick={() => toggleSetting(option.key)}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="settings__apply">
                    <Button 
                        text='CANCEL'
                        type='secondary'
                        onClick={() => {}}
                    />
                    <Button 
                        text='APPLY'
                        type='primary'
                        onClick={() => toast.success('Settings saved!')}
                    />
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
