import React from "react";
import { register } from "timeago.js";
import ko from "timeago.js/lib/lang/ko";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./routes/Auth";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import GlobalStyle from "./styles/GlobalStyle";

register("ko", ko);
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
