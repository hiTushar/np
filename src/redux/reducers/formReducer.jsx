import { FORM_STEP_CHANGE } from "../actions/actionTypes";

const initialState = {
    userForm: {
        currentStep: 1,
        allData: {}
    }
}

const formReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case FORM_STEP_CHANGE: 
            return {
                ...state, 
                userForm: payload
            } 
        default: 
            return state;
    }
}

export { formReducer };
