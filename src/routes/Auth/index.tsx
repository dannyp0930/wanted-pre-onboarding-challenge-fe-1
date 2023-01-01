import React from "react";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div>
      <h1>로그인</h1>
      <form>
        <input type="email" />
        <input type="password" />
        <button>로그인</button>
      </form>
      <Link to="/signup">회원가입</Link>
    </div>
  );
}

export default Auth;
