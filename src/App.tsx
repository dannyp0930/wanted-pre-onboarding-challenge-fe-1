import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import GlobalStyle from "./styles/GlobalStyle";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer autoClose={2000}/>
    </BrowserRouter>
  );
}

export default App;
