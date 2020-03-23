import { GET_ERRORS } from "../actions/types";

const INITIALSTATE = {
  msg: {},
  status: null
};

export default function(state = INITIALSTATE, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
}
