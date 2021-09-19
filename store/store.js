import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const storeCreation = () => {
  const configureStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("./reducers/rootReducer", () => {
        configureStore.replaceReducer(rootReducer);
      });
    }
  }

  return configureStore;
};

const store = storeCreation();

export default store;
