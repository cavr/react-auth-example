import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { loadState, saveState } from "./localStorage";

const persistedData = loadState();
const store = createStore(reducers, persistedData, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
