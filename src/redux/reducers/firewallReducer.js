import { FIREWALL_SETTING_CHANGE } from "../actions/actionTypes";

const initialState = {
    firewallState: {
        enabled: true
    }
}

const firewallReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case FIREWALL_SETTING_CHANGE: 
            return {
                ...state, 
                firewallState: payload
            }
        default: 
            return state;
    }
}

export { firewallReducer };
