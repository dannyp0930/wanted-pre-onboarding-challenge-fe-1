import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiInstance } from "../../api";

function Auth() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  const instance = apiInstance();
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const res = await instance.post("users/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("accessToken", res.data.token);
    navigate("/");
  }
  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>로그인</button>
      </form>
      <Link to="/signup">회원가입</Link>
    </div>
  );
}

export default Auth;
