import Card from "../../components/Card/Card";
import arrowLeft from '../../assets/arrow-left.png';

export default function InsightActionCard(props) {
    const { data } = props;
    return (
        <Card>
            <div className='card__title'>
                <div className='title__icon'>
                    <img src={data.icon} alt='icon' />
                </div>
                <div className='title__name'>{data.title}</div>
            </div>
            <div className='card__desc'>
                {data.desc}
            </div>
            <div className='card__action'>
                <div className='action__title'>{data.action}</div>
                <div className='action__next'>
                    <img src={arrowLeft} alt='arrow next' />
                </div>
            </div>
        </Card>
    )
}