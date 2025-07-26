import { combineReducers } from "redux";
import { bookingReducer } from "./reducer";

const rootReducer = combineReducers({
    booking:bookingReducer
})

export default rootReducer;