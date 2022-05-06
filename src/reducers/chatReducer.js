import { types } from "../types/types";

export const chatReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOAD_USERS:
      return {
        ...state,
        users: payload,
      };
    case types.ACTIVATE_CHAT:
      if (state.activeChat === payload) return state;
      return {
        ...state,
        activeChat: payload,
        messages: [],
      };
    default:
      return state;
  }
};
