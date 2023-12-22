import { combineReducers } from "redux"
import { formReducer } from "./reducers/formReducer"

export const initialState = {
    userForm: {
        currentStep: 1,
        allData: {}
    }
}

export default combineReducers({ formReducer });
