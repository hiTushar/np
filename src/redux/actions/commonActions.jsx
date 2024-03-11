import { SET_UPGRADE_STATUS } from "./actionTypes";

const upgradeStatusChange = (val) => ({
    type: SET_UPGRADE_STATUS,
    payload: val
})

export { upgradeStatusChange };
