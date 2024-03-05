import { useNavigate } from 'react-router-dom';

export default function FirewallFeaturesSidePanel({ sectionRoute, featuresData }) {
    console.debug({ sectionRoute });
    const navigate = useNavigate();
    const goto = (section) => navigate(`/user/firewall/features?section=${section}`);
    return (
        <div className="firewall-features__side-panel">
            {
                featuresData.map(featureSection => {
                    const { key, title, icons } = featureSection;

                    return (
                        <div className={`side-panel__section ${sectionRoute === key ? 'highlight' : ''}`} onClick={() => goto(key)} key={key}>
                            <div className='section__icon'>
                                <img src={sectionRoute === key ? icons[1] : icons[2]} alt={'section icon'}/>
                            </div>
                            <div className={`section__title ${sectionRoute === key ? 'highlight' : ''}`}>
                                {title}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
