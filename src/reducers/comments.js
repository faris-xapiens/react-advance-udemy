import {SAVE_COMMENT} from 'actions/types'

const initialState = []

export default function (state = initialState, action) {
  const { type ,payload} = action;
  switch (type) {
    case SAVE_COMMENT:
        return [...state, payload]
    default:
      return state;
  }
}
