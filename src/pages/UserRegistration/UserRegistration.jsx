import FoldedPanel from "../../components/FoldedPanel/FoldedPanel";
import FormPanel from "./FormPanel/FormPanel";
import SidePanel from "./SidePanel/SidePanel";
import "./UserRegistration.css"

function UserRegistration(props) {
    return (
        <div className="user-registration-container">
            <FoldedPanel
                SidePanelComponent={() => <SidePanel />}
                MainPanelComponent={() => <FormPanel />}
            />
        </div>
    )
}

export default UserRegistration;
