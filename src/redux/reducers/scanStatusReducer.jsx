/**
 * these values will be shared between taskbar panel, dashboard and quick scan screen
 */

import { SET_FILES_SCANNED, SET_SCANNING, SET_SCHEDULE_SCAN, SET_SYSTEM_STATUS, SET_THREATS_COUNT } from "../actions/actionTypes";

const initialState = {
    system_status: 'secure', // values: secure, partial, insecure
    scanning: false, // TODO: implement a separate scanning status, system_status stores the last/latest scan result status
    files_count: 200,
    files_scanned: 0,
    threats_found: 203,
    threats_fixed: 197,
    next_scan_frequency: 'weekly',
    next_scan_time: JSON.stringify({ hh: 9, mm: 30 }),
    next_scan_day: [0] // 0 - sunday, 1 - monday, and so on
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
        case SET_SCANNING:
            return {
                ...state,
                scanning: payload
            }
        case SET_SCHEDULE_SCAN: {
            return {
                ...state,
                next_scan_frequency: payload.next_scan_frequency,
                next_scan_time: payload.next_scan_time,
                next_scan_day: payload.next_scan_day
            }
        }
        default:
            return state;
    }
}

export { scanStatusReducer };
