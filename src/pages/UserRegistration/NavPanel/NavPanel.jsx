import { useSelector } from 'react-redux';
import './NavPanel.css';
import tick from '../../../assets/tick.svg';
import forward from '../../../assets/forward.svg';

function NavPanel(props) {
    const { currentStep } = useSelector(state => state.formReducer.userForm);
    
    const getStepStatus = (formStep, formStepName) => {
        if(currentStep === formStep) {
            return (
                <>
                    <div className='user-navpanel__step-val'>{formStep}</div>
                    <div className='user-navpanel__step-name--active'>{formStepName}</div>
                </>
            )
        } 
        if(currentStep > formStep) {
            return (
                <>
                    <div className='user-navpanel__step-val'>
                        <img src={tick} alt={'tick'} />
                    </div>
                    <div className='user-navpanel__step-name--done'>{formStepName}</div>
                </>
            )
        } 
        if(currentStep < formStep) {
            return (
                <>
                    <div className='user-navpanel__step-val'>{formStep}</div>
                    <div className='user-navpanel__step-name--inactive'>{formStepName}</div>
                </>
            )
        }
    }

    // console.log({ currentStep });
    return (
        <div className='user-navpanel'>
            <div className='user-navpanel__step'>{getStepStatus(1, 'Installation')}</div>
            <img src={forward} alt={'forward icon'} />
            <div className='user-navpanel__step'>{getStepStatus(2, 'User Details')}</div>
            <img src={forward} alt={'forward icon'} />
            <div className='user-navpanel__step'>{getStepStatus(3, 'Activation')}</div>
        </div>
    )
}

export default NavPanel;
