import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types'

const initialState = []

export default function (state = initialState, action) {
  const { type ,payload} = action;
  console.log(payload)
  switch (type) {
    case SAVE_COMMENT:
        return [...state, payload]
    case FETCH_COMMENTS:
      const comments = payload.map(comment => comment.name)
      return [...state, ...comments]
    default:
      return state;
  }
}
