import { combineReducers } from "redux";
import counterReducer from "./counter";
import listReducer from "./list";

const rootReducer = combineReducers({
    counter: counterReducer,
    list: listReducer
})

export default rootReducer