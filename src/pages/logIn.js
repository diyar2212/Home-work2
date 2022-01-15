import React from "react";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./bar";
import Clothes from "./clothes";
import ContactUs from "./contact";
import List from "./list";
import Home from "./Home";
import More from "./More"

const LogIn = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/list" element={<List />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/LogOut" element={<Home/>}/>
          <Route path="/More:id" element={<More/>}/>


        </Routes>
      </div>
    </Router>
  );
};

export default LogIn;