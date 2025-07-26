import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

const initialState = {
    bookings:[]
}

export const bookingReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_BOOKING:
            if(state.bookings.length >= 3) return state;
            return {
                ...state,
                bookings:[...state.bookings,action.payload]
            }
        case REMOVE_BOOKING:
            return{
                ...state,
                bookings:state.bookings.filter((item)=> item.id !== action.payload)
            }
            
    
        default:
            return state;
    }
}