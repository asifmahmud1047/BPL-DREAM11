// App.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import "react-toastify/dist/ReactToastify.css";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [money, setMoney] = useState(0);

  const increaseMoney = () => setMoney(money + 500000); // Adjust as needed
  const updateMoney = (amount) => setMoney(money + amount);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar money={money} />
      <Banner increaseMoney={increaseMoney} />
      <MainSection money={money} updateMoney={updateMoney} />
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
