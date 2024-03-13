import { SET_UPGRADE_STATUS } from "../actions/actionTypes";

const initialState = {
    upgrade_done: true
}

const commonReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_UPGRADE_STATUS: 
            return {
                ...state,
                upgrade_done: payload
            }
    
        default:
            return state;
    }
}

export { commonReducer };
