import { FIREWALL_CHANGE } from "../actions/actionTypes";

const initialState = {
    firewallEnabled: true
}

const firewallReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case FIREWALL_CHANGE: 
            return {
                ...state,
                ...payload
            }
        default: 
            return state;
    }
}

export { firewallReducer };
