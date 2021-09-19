// In this file, we combine all reducers we created
// thanks to combineReducers

import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
  // a reducer is always a key/value pair.
  // here the key is account and the value is the reducer
  account: accountReducer,
});

export default reducers;
