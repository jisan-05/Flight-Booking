import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

export const addBooking = (value) => {
  return {
    type: ADD_BOOKING,
    payload: value,
  };
};

export const removeBooking = (id) => {
  return {
    type: REMOVE_BOOKING,
    payload: id,
  };
};
