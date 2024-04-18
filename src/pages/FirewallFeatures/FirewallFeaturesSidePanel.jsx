import { useNavigate } from 'react-router-dom';

export default function FirewallFeaturesSidePanel({ sectionRoute, featuresData }) {
    console.debug({ sectionRoute });
    const navigate = useNavigate();
    const goto = (section) => navigate(`/user/web-security/firewall/features?section=${section}`);
    return (
        <div className="firewall-features__side-panel">
            {
                featuresData.map(featureSection => {
                    const { key, title, icons } = featureSection;
                    const SvgIcon = icons[1];

                    return (
                        <div className={`side-panel__section ${sectionRoute === key ? 'highlight' : ''}`} onClick={() => goto(key)} key={key}>
                            <div className='section__icon'>
                                <SvgIcon fillColor={sectionRoute === key ? "#CBE3E9" : "#676A84"}/>
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
