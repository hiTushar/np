import { useSelector } from "react-redux";
import './FormPanel.css'
import NavPanel from "../NavPanel/NavPanel";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function FormPanel() {
    const { currentStep } = useSelector(state => state.formReducer.userForm);

    const getStep = (stepArg) => {
        switch(stepArg) {
            case 1: 
                return <Step1 />
            case 2: 
                return <Step2 />
            case 3: 
                return <Step3 />
            default: 
                return <>Error</>
        }
    }

    return (
        <div className="user-formpanel">
            <NavPanel />
            {
                getStep(currentStep)
            }
        </div>
    )
}

export default FormPanel;
