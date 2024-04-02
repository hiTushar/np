import { combineReducers } from "redux"
import { formReducer } from "./reducers/formReducer"
import { commonReducer } from "./reducers/commonReducer"
import { scanStatusReducer } from "./reducers/scanStatusReducer"
import { firewallReducer } from "./reducers/firewallReducer"
import protectionReducer from "./reducers/protectionReducer"


const rootReducer = combineReducers({
    commonReducer,
    formReducer,
    scanStatusReducer,
    firewallReducer,
    protectionReducer
})

export default rootReducer;
