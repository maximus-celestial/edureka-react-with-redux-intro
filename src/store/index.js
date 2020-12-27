import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

// Note sure if store should be declared with let / const
const store = createStore(reducers, applyMiddleware());

export default store;
