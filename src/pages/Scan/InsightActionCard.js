import Card from "../../components/Card/Card";
import arrowLeft from '../../assets/arrow-left.png';

export default function InsightActionCard({ data }) {
    const { icon, title, desc, action } = data;
    return (
        <Card>
            <div className='card__title'>
                <div className='title__icon'>
                    <img src={icon} alt='icon' />
                </div>
                <div className='title__name'>{title}</div>
            </div>
            <div className='card__desc'>
                {desc}
            </div>
            <div className='card__action'>
                <div className='action__title'>{action}</div>
                <div className='action__next'>
                    <img src={arrowLeft} alt='arrow next' />
                </div>
            </div>
        </Card>
    )
}