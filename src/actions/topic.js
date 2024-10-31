export const deleteTopic = (id) => {
  return {
    type: "DELETE__TOPIC",
    id: id
  }
}

export const addTopic = (id, info) => {
  return {
    type: "ADD_TOPIC",
    id: id,
    info: info
  }
}


export const SET_TOPICS = "SET_TOPICS";
// Action để lưu topics vào Redux
export const setTopic = (topics) => {
  return {
    type: SET_TOPICS,
    payload: topics,
  };
};

export const UPDATE_TOPIC = "UPDATE_TOPIC";

export const updateTopic = (id, newInfo) => {
  return {
    type: UPDATE_TOPIC,
    payload: { id, newInfo },
  };
};
