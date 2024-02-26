import { FIREWALL_SETTING_CHANGE } from "./actionTypes";

const firewallSettingChange = (settingObj) => ({
    type: FIREWALL_SETTING_CHANGE,
    payload: settingObj
})

export default firewallSettingChange;
