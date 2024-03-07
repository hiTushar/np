import { SET_FILES_SCANNED, SET_SYSTEM_STATUS, SET_THREATS_COUNT } from "./actionTypes";

const setSystemStatus = (payload) => ({
    type: SET_SYSTEM_STATUS,
    payload
})

const setFilesScanned = (payload) => ({
    type: SET_FILES_SCANNED,
    payload
})

const setThreatsCount = (payload) => ({
    type: SET_THREATS_COUNT,
    payload
})

export { setSystemStatus, setFilesScanned, setThreatsCount }
