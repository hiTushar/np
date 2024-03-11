import { combineReducers } from "redux"
import { formReducer } from "./reducers/formReducer"
import { commonReducer } from "./reducers/commonReducer"
import { scanStatusReducer } from "./reducers/scanStatusReducer"
import { firewallReducer } from "./reducers/firewallReducer"
import { protectionSelReducer} from "./reducers/protectionSelectedFeature"


const rootReducer = combineReducers({
    commonReducer,
    formReducer,
    scanStatusReducer,
    firewallReducer,
    protectionSelReducer,
})

export default rootReducer;
