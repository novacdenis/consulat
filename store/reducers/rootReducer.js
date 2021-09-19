import { combineReducers } from "redux";
import notifications from "./notificationsReducer";

const rootReducer = combineReducers({
  notifications,
});

export default rootReducer;
