import { FETCH_COMMENTS, SAVE_COMMENT } from "actions/types";
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
