import { useSelector } from "react-redux";
import './SettingsBanner.css';
import Switch from "../../../components/Switch/Switch";

export default function SettingsBanner({ sectionData, toggleProtection }) {
    const { key, title, desc, SvgIcon } = sectionData;
    const enabled = useSelector(state => state.protectionReducer[key]);
    return (
        <div className="settings-banner">
            <div className='settings-banner__content'>
                <div className='content__icon'>
                    <SvgIcon fillColor='#FFF' />
                </div>
                <div className='content__text'>
                    <div className='text__title'>{title}</div>
                    <div className='text__desc'>{desc}</div>
                </div>
            </div>
            <div className='settings-banner__control'>
                <div className='control__text'>Enabled</div>
                <div className='control__button'>
                    <Switch
                        checked={enabled}
                        onClick={() => toggleProtection(key, enabled)}
                    />
                </div>
            </div>
        </div>
    )
}
