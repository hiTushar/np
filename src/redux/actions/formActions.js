import { FORM_STEP_CHANGE } from "./actionTypes";

const formStepChange = (step) => ({
    type: FORM_STEP_CHANGE,
    payload: step
})

export default formStepChange;
