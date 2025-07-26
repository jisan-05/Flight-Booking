import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import lwsLogo from '../src/assets/img/lws-logo.svg'
import BookingForm from "./components/BookingForm";
import BookingTable from "./components/BookingTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header id="header">
        <div class="container">
          <img src={lwsLogo} alt="logo" class="logo" />
          <div class="flex items-center">
            <a class="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button class="log-btn btn">Login</button>
          </div>
        </div>
      </header>
      <BookingForm></BookingForm>
      <BookingTable></BookingTable>
    </div>
  );
}

export default App;
