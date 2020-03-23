import { CREATE_MESSAGE } from "../actions/types";

const INITIALSTATE = {
  msg: {},
  status: null
};

export default function(state = INITIALSTATE, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
