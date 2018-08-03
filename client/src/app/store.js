import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import user from "./reducers/userReducer";
import authentication from "./reducers/authentication";

const allReducers = combineReducers({
  user: user,
  authentication: authentication
});

const allStoreEnhancers = compose(
  applyMiddleware(logger(), thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export default createStore(
  allReducers,
  {},
  allStoreEnhancers
);
