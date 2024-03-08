import './UtilityCard.css';
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { useNavigate } from 'react-router-dom';
import { arrowLeftPng, bulbPng } from '../../assets/assets';

export default function UtilityCard(props) {
    const { title, icon, desc, inc, navUrl } = props;

    const navigate = useNavigate();

    return (
        <Card cutLength={10}>
            <div className="utility-card">
                <div className="utility-card__label-section">
                    <div className="label-section__icon">
                        <img src={icon} alt={'utility icon'} />
                    </div>
                    <div className="label-section__name">{title}</div>
                </div>
                <div className="utility-card__inc-section">
                    <div className="inc-section__text">
                        Increase protection by
                    </div>
                    <div className="inc-section__value">
                        +{inc}%
                    </div>
                </div>
                <div className="utility-card__enable-section">
                    <div className="enable-section__icon">
                        <img src={bulbPng} alt='bulb icon' />
                    </div>
                    <div className="enable-section__desc">{desc}</div>
                    <div className="enable-section__button">
                        <Button 
                            type='text-only'
                            text='Enable Now'
                            customStyle={{
                                color: '#F3B617',
                                fontSize: '10px',
                                fontWeight: '500',
                                padding: '0px'
                            }}
                        />
                    </div>
                </div>
                <div className="utility-card__action">
                    <img src={arrowLeftPng} alt='right arrow' onClick={() => navigate(navUrl)}/>
                </div>
            </div>
        </Card>
    )
}