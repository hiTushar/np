import { SET_PROTECTION_SETTINGS } from "../actions/actionTypes";

const initialState = {
    app: true,
    fort: true,
    cloud: true,
    os: false,
    adblock: true,
    online: true,
    email: true,
    lan: false,
    ids: true,
    backup: true
}

const protectionReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_PROTECTION_SETTINGS:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}

export default protectionReducer;
