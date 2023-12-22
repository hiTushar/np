import { initialState } from "..";
import { FORM_STEP_CHANGE } from "../actions/actionTypes";

const formReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case FORM_STEP_CHANGE: 
            return {
                ...state, 
                formStep: payload
            } 
        default: 
            return state;
    }
}

export { formReducer };
