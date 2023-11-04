import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./postal-code/reducer";

const rootReducer = combineReducers({
	pci: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

/*
   pci = postal code information
 */
