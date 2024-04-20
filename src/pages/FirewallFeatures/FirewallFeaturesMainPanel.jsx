import FirewallRules from "./AllFeatures/FirewallRules";
import FirewallApplications from "./AllFeatures/FirewallApplications";
import FirewallHistory from "./AllFeatures/FirewallHistory";

const featureSectionUI = [
    {
        key: 'rules',
        component: <FirewallRules />
    },
    {
        key: 'application',
        component: <FirewallApplications />
    },
    {
        key: 'history',
        component: <FirewallHistory />
    }
]

const getSection = (sectionRoute) => {
    const uiSection = featureSectionUI.filter(featureSection => featureSection.key === sectionRoute)[0];
    return uiSection.component;
}

export default function FirewallFeaturesMainPanel({ sectionRoute }) {
    // console.debug({ sectionRoute });
    
    return (
        <div className="firewall-features__main-panel">
            {/* <div className='main-panel__section'> */}
                {getSection(sectionRoute)}
            {/* </div> */}
        </div>
    )
}
