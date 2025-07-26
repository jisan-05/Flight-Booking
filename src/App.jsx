import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import lwsLogo from "../src/assets/img/lws-logo.svg";
import BookingForm from "./components/BookingForm";
import BookingTable from "./components/BookingTable";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div>
        <header id="header">
          <div className="container">
            <img src={lwsLogo} alt="logo" className="logo" />
            <div className="flex items-center">
              <a className="text-white min-w-[50px] font-medium" href="#">
                Home
              </a>
              <button className="log-btn btn">Login</button>
            </div>
          </div>
        </header>
        <BookingForm></BookingForm>
        <BookingTable></BookingTable>
      </div>
    </Provider>
  );
}

export default App;
