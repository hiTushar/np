import { useNavigate } from 'react-router-dom';
import './Protection.css';

export default function ProtectionSidePanel({ sectionRoute, data }) {
    const navigate = useNavigate();
    const goto = (section) => navigate(`/user/protection?section=${section}`);
    
    if(sectionRoute === null) sectionRoute = 'app';

    return (
        <div className='protection__side-panel'>
            {
                data.map(sectionData => {
                    const { key, title, svgIcon } = sectionData;
                    
                    return (
                        <div className={`side-panel__section ${sectionRoute === key ? 'highlight' : ''}`} onClick={() => goto(key)} key={key}>
                            <div className='section__icon'>
                                {svgIcon(sectionRoute === key ? '#C3E3E9' : '#676A84')}
                            </div>
                            <div className={`section__title ${sectionRoute === key ? 'highlight' : ''}`}>{title}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
