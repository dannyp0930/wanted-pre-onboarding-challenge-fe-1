import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../../api";

function SignUp() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  const instance = apiInstance();
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const res = await instance.post("users/create", {
      email: email,
      password: password,
    });
    localStorage.setItem("accessToken", res.data.token);
    navigate("/");
  }
  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$"
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
        />
        <button type="submit">생성</button>
      </form>
    </div>
  );
}

export default SignUp;