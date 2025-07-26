import React from "react";
import FrameImg from "../assets/img/icons/Frame.svg";
import Vector1 from "../assets/img/icons/Vector (1).svg";
import Vector3 from "../assets/img/icons/Vector (3).svg";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../redux/actions";

let nextId = 1; // unique id generator

const BookingForm = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const from = form.from.value.trim();
    const to = form.to.value.trim();
    const date = form.date.value;
    const guests = form.guests.value;
    const ticketClass = form.ticketClass.value;

    // validation
    if (!from || !to || !date || !guests || !ticketClass) {
      alert("All fields are required!");
      return;
    }
    if (bookings.length >= 3) {
      alert("You can only book 3 flights!");
      return;
    }

    const newBooking = {
      id: nextId++,
      from,
      to,
      date,
      guests,
      ticketClass,
    };
    dispatch(addBooking(newBooking));
    form.reset();
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form onSubmit={handleSubmit} className="first-hero lws-inputform">
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={FrameImg} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
              >
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={FrameImg} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
              >
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
            />
          </div>

          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={Vector1} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
              >
                <option value="" hidden>Please Select</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={Vector3} alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
              >
                <option value="" hidden>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
