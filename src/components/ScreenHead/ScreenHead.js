/**
 * 
 * @param { String } title
 * @param { String } desc
 * @param { Function } onClick
 * @param { any } children
 * 
 */
import arrowLeft from '../../assets/arrow-left.png';
import './ScreenHead.css';

export default function ScreenHead(props) {
    const { title, desc, onClick, children } = props;

    return (
        <div className='screen__head'>
            <div className='screen__exit' onClick={onClick}>
                <img src={arrowLeft} alt={'left arrow'} />
            </div>
            <div className='screen__name'>
                <p className='title'>{title}</p>
                <p className='desc'>{desc}</p>
            </div>
            <div className='screen__misc'>
                {children}
            </div>
        </div>
    )
}
