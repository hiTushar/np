import { PROTECTION_SELECTED_FEATURE,SET_ENABLED_FEATURES } from "./actionTypes";

export const setProtectionSelected = (slectedIdx) => ({
    type: PROTECTION_SELECTED_FEATURE,
    payload: {selected:slectedIdx},
})

export const setProtectionEnabled = (enabledIdx) =>({
    type: SET_ENABLED_FEATURES,
    payload: { enabledIdx}
})
