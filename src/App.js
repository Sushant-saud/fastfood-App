import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Cart from "./pages/Cart/index";
import Notfound from "./Component/common/NofFound/Notfound";
import Payment from "./pages/Payment/Payment";
import Signup from "./pages/Signup/SignUp.js";
import Login from "./pages/Login/Login.js";
import { getAuth } from "firebase/auth";
import { auth } from "./firebase";
const App = () => {
  const user = localStorage.getItem("email");
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
