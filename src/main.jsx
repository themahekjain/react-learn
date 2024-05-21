import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todo } from "./component/todo/todo";
import { Signup } from "./component/signup/signup";
import { Login } from "./component/signup/login";
import { Home } from "./component/signup/home";
import { UseEffect } from "./component/useEffect/new";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/effect" element={<UseEffect/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
