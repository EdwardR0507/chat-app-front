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
    case types.NEW_MESSAGE:
      if (
        state.activeChat === payload.from ||
        state.activeChat === payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, payload],
        };
      } else {
        return state;
      }
    case types.LOAD_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    case types.LOGOUT:
      return {
        uid: null,
        activeChat: null,
        users: [],
        messages: [],
      };
    default:
      return state;
  }
};
