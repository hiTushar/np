import { useState } from "react";
import Card from "../../components/Card/Card";
import Switch from "../../components/Switch/Switch";
import { useNavigate } from "react-router-dom";

export default function OthersCard({ data }) {
    const { icon, title, desc, state, navUrl } = data;
    const navigate = useNavigate();
    const [otherSettingState, setOtherSettingState] = useState(state);

    const goTo = () => navigate(navUrl);

    const toggleSetting = (e) => {
        e.stopPropagation();
        setOtherSettingState(prev => !prev);
    }

    return (
        <Card>
            <div className={`others-card ${navUrl ? 'nav-click' : ''}`} onClick={navUrl ? goTo : () => {}}>
                <div className="others-card__icon">
                    <img src={icon} alt={'icon'} />
                </div>
                <div className="others-card__title">
                    {title}
                </div>
                <div className="others-card__desc">
                    {desc}
                </div>
                <div className="others-card__action">
                    <Switch 
                        onClick={toggleSetting} 
                        checked={otherSettingState} 
                    />
                    {/* <Button text='SCAN NOW' type='primary' onClick={() => {}} customStyle={{ fontSize: '10px' }}/> */}
                </div>
            </div>
        </Card>
    )
}