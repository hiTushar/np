import { combineReducers } from "redux"
import { formReducer } from "./reducers/formReducer"
import { protectionSelReducer} from "./reducers/protectionSelectedFeature"

const rootReducer = combineReducers({ 
    formReducer,
    protectionSelReducer, 
})

export default rootReducer;
