import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./Componnets/Login";
import { CreateNewUser } from "./Componnets/CreateNewUser";
import { NavBar } from "./Componnets/NavBar";
import { Example } from "./Componnets/Exsmpel";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/createNewUser" element={<CreateNewUser />}></Route>
        <Route path="/Exsmpel" element={<Example />}></Route>
        {/* <Route path="/Exsmpel/:id" element={<Exsmpel />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
