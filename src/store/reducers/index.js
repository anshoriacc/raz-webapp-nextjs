import { combineReducers } from "redux";
import authReducer from "src/store/reducers/auth";

const reducers = combineReducers({
  auth: authReducer,
});


export default reducers;
