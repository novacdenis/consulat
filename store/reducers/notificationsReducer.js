import { NOTIFICATIONS_PUSH, NOTIFICATIONS_REMOVE } from "store/actionTypes";

const initialState = {
  topLeft: [],
  topRight: [],
  bottomLeft: [],
  bottomRight: [],
};

const notifications = (state = initialState, action = {}) => {
  switch (action.type) {
    case NOTIFICATIONS_PUSH:
      return {
        ...state,
        payload: [...state.payload, action.payload],
      };
    case NOTIFICATIONS_REMOVE:
      return {
        ...state,
        [action.payload.pos]: state[action.payload.pos].filter(
          (ntf) => ntf.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default notifications;
