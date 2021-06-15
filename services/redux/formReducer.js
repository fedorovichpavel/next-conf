import { formData } from "./types";

const initialState = {};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case formData:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
