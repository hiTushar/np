import FormPanel from "./FormPanel/FormPanel";
import SidePanel from "./SidePanel/SidePanel";
import "./UserRegistration.css"

function UserRegistration(props) {

    return (
        <div className="user-registration-container">
            <SidePanel />
            <FormPanel />
        </div>
    )
}

export default UserRegistration;
