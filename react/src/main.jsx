import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Locked from "./Pages/Locked";
import SignIn from "./Pages/SignIn";
import ProtectedRoutes from "./ProtectedRoutes";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About user="Renan" />} />
        <Route path="signin" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="locked" element={<Locked />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
