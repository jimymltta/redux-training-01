// We need to create a store to gather and distribute states
// One created, we import it in index.js and make it the
// parent element of <App />, all children of App will
// access the store.

import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
// Using the Redux Thunk middleware
import thunk from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
