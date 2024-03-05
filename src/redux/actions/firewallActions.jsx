import { FIREWALL_CHANGE } from "./actionTypes";

const firewallChange = (settingObj) => ({
    type: FIREWALL_CHANGE,
    payload: settingObj
})

export default firewallChange;
