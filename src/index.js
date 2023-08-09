import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Trial from "./auth/trial";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./utils/ProtectedRoute";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      {/* path "/" dan element App merupakan parent dari route  */}

      <Route path="/" element={<App />}>
        {/* path trial dan home merupakan child dari path "/" */}
        <Route path="/trial" element={<Trial />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
