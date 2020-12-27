import { combineReducers } from "redux";
import foods from "./foodReducers";

const rootReducer = combineReducers({ foods });

export default rootReducer;
