import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './FirewallFeatures.css';
import firewallChange from "../../redux/actions/firewallActions";
import ScreenHead from "../../components/ScreenHead/ScreenHead";
import Switch from "../../components/Switch/Switch";
import FirewallFeaturesSidePanel from "./FirewallFeaturesSidePanel";
import FirewallFeaturesMainPanel from "./FirewallFeaturesMainPanel";
import FoldedPanel from "../../components/FoldedPanel/FoldedPanel";
import featuresData from "../Firewall/data";

export default function FirewallFeatures(props) {
    const navigate = useNavigate();
    const goTo = (url) => navigate(url);

    let [searchParams, setSearchParams] = useSearchParams();
    const section = searchParams.get('section');

    const dispatch = useDispatch();
    const { firewallEnabled } = useSelector(state => state.firewallReducer);
    const toggleFirewall = () => { // TODO: have individual setting keys instead of a common one
        dispatch(firewallChange({
            firewallEnabled: !firewallEnabled
        }))
    }

    return (
        <div className="firewall-features">
            <ScreenHead
                titleBreadcrumbs={['Firewall', 'Features']}
                onClick={() => goTo('/user/firewall')}
            >
                <div className='firewall-features__options'>
                    <div className='options__enable'>
                        <div className='enable__title'>{firewallEnabled ? 'Enabled' : 'Disabled'}</div>
                        <div className='enable__button'>
                            <Switch
                                onClick={toggleFirewall}
                                checked={firewallEnabled}
                            />
                        </div>
                    </div>
                </div>
            </ScreenHead>
            <div className="firewall-features__content">
                <FoldedPanel
                    SidePanelComponent={() => <FirewallFeaturesSidePanel sectionRoute={section} featuresData={featuresData} />}
                    MainPanelComponent={() => <FirewallFeaturesMainPanel sectionRoute={section} />}
                />
            </div>

        </div>
    )
}
