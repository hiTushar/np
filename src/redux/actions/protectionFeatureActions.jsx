import { PROTECTION_SELECTED_FEATURE,SET_DISABLED_FEATURES,SET_ENABLED_FEATURES } from "./actionTypes";

export const setProtectionSelected = (slectedIdx) => ({
    type: PROTECTION_SELECTED_FEATURE,
    payload: {selected:slectedIdx},
})

export const setProtectionEnabled = (enabledIdx) =>({
    type: SET_ENABLED_FEATURES,
    payload: { enabledIdx}
})

export const setProtectionDisabled = (disabledIdx) =>({
    type: SET_DISABLED_FEATURES,
    payload: { disabledIdx }
})
