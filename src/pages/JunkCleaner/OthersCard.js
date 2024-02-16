import { useState } from "react";
import Card from "../../components/Card/Card";
import Switch from "../../components/Switch/Switch";

export default function OthersCard({ data }) {
    const { icon, title, desc, state } = data;

    const [otherSettingState, setOtherSettingState] = useState(state);

    return (
        <Card>
            <div className='others-card'>
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
                        onClick={() => {setOtherSettingState(prev => !prev)}} 
                        checked={otherSettingState} 
                    />
                    {/* <Button text='SCAN NOW' type='primary' onClick={() => {}} customStyle={{ fontSize: '10px' }}/> */}
                </div>
            </div>
        </Card>
    )
}