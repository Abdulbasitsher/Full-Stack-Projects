// src/App.js
import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./Components/layout/Navbar";
import LandingPage from "./Components/layout/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Alert from "./Components/layout/alert";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <main className="container" style={{ marginTop: "70px" }}>
            <Alert />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
