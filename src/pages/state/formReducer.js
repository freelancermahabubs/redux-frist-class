import {actionTypes} from "./actionTypes";

export const initailState = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  education: "",
  quantity: 0,
  feedback: "",
  terms: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
      };

    case actionTypes.TOGGLE:
      return {
        ...state,
        terms: !state.terms,
      };
    default:
      return state;
  }
};
