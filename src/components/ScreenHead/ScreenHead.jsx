/**
 * 
 * @param { Array } titleBreadcrumbs
 * @param { String } desc
 * @param { Function } onClick
 * @param { any } children
 * 
 */
import arrowLeft from '../../assets/arrow-left.png';
import './ScreenHead.css';

export default function ScreenHead(props) {
    const { titleBreadcrumbs, desc, onClick, children } = props;

    return (
        <div className='screen__head'>
            <div className='screen__exit' onClick={onClick}>
                <img src={arrowLeft} alt={'left arrow'} />
            </div>
            <div className='screen__name'>
                <div className='name__title'>
                    {
                        titleBreadcrumbs.map(title => <div className='title__breadcrumb' key={title}>{title}</div>)
                    }
                </div>
                <p className='name__desc'>{desc}</p>
            </div>
            <div className='screen__misc'>
                {children}
            </div>
        </div>
    )
}
