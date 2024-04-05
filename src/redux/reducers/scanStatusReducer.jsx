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
    next_scan_frequency: {
        name: 'Weekly',
        value: 'weekly'
    },
    next_scan_time: {
        name: '12:30 PM',
        value: JSON.stringify({ hh: 12, mm: 30, ampm: 'PM' })
    },
    next_date_of_month: { name: '1', value: 1 },
    next_scan_day: [{ name: 'Sun', value: 0 }], // 0 - sunday, 1 - monday, and so on
    next_scan_timestamp: 1714719630000
}

const scanStatusReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
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
            let { next_scan_frequency, next_scan_time, next_scan_day, next_date_of_month, next_scan_timestamp } = payload;
            // next_scan_frequency = next_scan_frequency.value;
            // next_scan_time = JSON.parse(next_scan_time.value);

            // let next_scan_timestamp = 0;
            // if(next_scan_frequency === 'daily') {
            //     let now = Date.now();
            //     let nextScheduledScan = set(now, { hours: next_scan_time.hh, minutes: next_scan_time.mm, seconds: 0 });
            //     // console.log(todaysScheduledScan);
            //     let isNextScanToday = compareAsc(nextScheduledScan, now) === 1;
            //     if(!isNextScanToday) {
            //         nextScheduledScan = add(nextScheduledScan, { days: 1 });
            //     }

            //     next_scan_timestamp = getTime(nextScheduledScan);
            // }

            return {
                ...state,
                next_scan_frequency,
                next_scan_time,
                next_scan_day,
                next_date_of_month,
                next_scan_timestamp
            }
        }
        default:
            return state;
    }
}

export { scanStatusReducer };
