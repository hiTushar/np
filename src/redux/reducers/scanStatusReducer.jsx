/**
 * these values will be shared between taskbar panel, dashboard and quick scan screen
 */

import { SET_FILES_SCANNED, SET_SYSTEM_STATUS, SET_THREATS_COUNT } from "../actions/actionTypes";

const initialState = {
    system_status: 'scanning', // values: secure, partial, insecure, scanning
    files_count: 200,
    files_scanned: 0,
    threats_found: 203,
    threats_fixed: 197 
}

const scanStatusReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_SYSTEM_STATUS: 
            return {
                ...state,
                system_status: payload
            }
        case SET_FILES_SCANNED: 
            return {
                ...state,
                files_scanned: payload
            }

        case SET_THREATS_COUNT:
            return {
                ...state,
                threats_found: payload.threats_found,
                threats_fixed: payload.threats_fixed
            }
        default: 
            return state;
    }
}

export { scanStatusReducer };
