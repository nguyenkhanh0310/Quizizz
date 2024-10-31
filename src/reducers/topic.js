import { SET_TOPICS } from "../actions/topic";

const topicReducer = (state = [], action) => {

  switch (action.type) {
    case SET_TOPICS:
      return action.payload;
    case "DELETE__TOPIC":
      return state.filter((item) => item.id !== action.id);
    case "ADD_TOPIC":
      return state;
    default:
      return state;
  }
}

export default topicReducer;