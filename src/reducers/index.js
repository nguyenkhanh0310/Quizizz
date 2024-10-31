import {combineReducers} from "redux";
import loginReducer from "./login";
import topicReducer from "./topic";

const allReducers = combineReducers({
  loginReducer,
  topics :topicReducer
});

export default allReducers;