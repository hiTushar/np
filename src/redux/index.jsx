import { combineReducers } from "redux"
import { formReducer } from "./reducers/formReducer"
import { firewallReducer } from "./reducers/firewallReducer"
import { protectionSelReducer} from "./reducers/protectionSelectedFeature"


const rootReducer = combineReducers({ 
    formReducer,
    firewallReducer,
    protectionSelReducer,
})

export default rootReducer;
