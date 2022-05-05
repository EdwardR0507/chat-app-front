import { types } from "../types/types";

export const chatReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOAD_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
