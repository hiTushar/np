import { PROTECTION_SELECTED_FEATURE, SET_ENABLED_FEATURES } from "../actions/actionTypes";

const initialState = {
    allData:{
        enabled: [false, false, true, false, false, false, true, false, false, false],
        selected: 2,
    }
}

const protectionSelReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_ENABLED_FEATURES:
            let currEnabledArr = [...state.allData.enabled];
            currEnabledArr[payload.enabledIdx] = !currEnabledArr[payload.enabledIdx]
            return {
                ...state,
                allData:{
                    enabled:[...currEnabledArr],
                    selected: state.allData.selected
                }
            }
        case PROTECTION_SELECTED_FEATURE:
            return {
                ...state,
                allData:{
                    enabled:[...state.allData.enabled],
                    selected: payload.selected
                }
            }
        default:
            return state;
    }
}

export { protectionSelReducer };
