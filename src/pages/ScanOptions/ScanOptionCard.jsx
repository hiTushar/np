import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

export default function ScanOptionCard({ data }) {
    const { icon, title, desc, scanType } = data;
    const navigate = useNavigate();

    return (
        <Card>
            <div className='scan-option-card'>
                <div className="scan-option-card__icon">
                    <img src={icon} alt={'icon'} />
                </div>
                <div className="scan-option-card__title">
                    {title}
                </div>
                <div className="scan-option-card__desc">
                    {desc}
                </div>
                <div className="scan-option-card__action">
                    {/* TODO: scan pages for all scan types */}
                    <Button text='SCAN NOW' type='primary' onClick={() => navigate(`/user/scan?type=${scanType ? scanType : 'cloud'}`)} customStyle={{ fontSize: '10px' }}/>
                </div>
            </div>
        </Card>
    )
}
