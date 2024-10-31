import { del, get, post } from "../utils/request"

export const getListTopic = async () => {
  const result = await get(`topic`);
  return result;
}

export const getTopic = async (id) => {
  const result = await get(`topic/${id}`);
  return result;
}

export const createTopic = async (options) => {
  const result = await post(`topic`, options);
  return result;
}

export const deleteTopicApi = async (id) => {
  const result = await del(`topic/${id}`);
  return result;
}