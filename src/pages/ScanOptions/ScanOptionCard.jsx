import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

export default function ScanOptionCard({ data }) {
    const { icon, title, desc } = data;

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
                    <Button text='SCAN NOW' type='primary' onClick={() => {}} customStyle={{ fontSize: '10px' }}/>
                </div>
            </div>
        </Card>
    )
}
