import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
