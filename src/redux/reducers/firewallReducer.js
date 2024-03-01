import { FIREWALL_CHANGE } from "../actions/actionTypes";

const initialState = {
    firewall_enabled: true,
    firewall_mode: 'learning',
    outgoing_rule: true,
    incoming_rule: true,
    outgoing_admin_alert: true,
    incoming_admin_alert: true,
    action_after_timeout: true,
    outgoing_log: true,
    incoming_log: true
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
