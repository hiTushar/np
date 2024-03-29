import { SET_PROTECTION_SETTINGS } from "./actionTypes";

const protectionChange = (settingObj) => ({
    type: SET_PROTECTION_SETTINGS,
    payload: {...settingObj} 
})

export default protectionChange;
