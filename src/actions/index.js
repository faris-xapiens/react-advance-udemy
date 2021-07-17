import { FETCH_COMMENTS, SAVE_COMMENT, CHANGE_AUTH } from "actions/types";
import axios from "axios";

export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = async () => {
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments");

  return { type: FETCH_COMMENTS, payload: data };
};

export const changeAuth = async (isLoggedIn) => {

  return { type: CHANGE_AUTH, payload: isLoggedIn };
};
