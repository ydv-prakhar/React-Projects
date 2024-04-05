import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

import taskReducer from "./reducers/taskReducer";
const logger = createLogger();
const store = createStore(taskReducer, applyMiddleware(logger,thunk));

export default store;
