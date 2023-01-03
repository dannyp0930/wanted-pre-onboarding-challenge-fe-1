import { AxiosError } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiInstance } from "../../api";
import { Button, Container, Form, Input } from "../../styles/form";

function Auth() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  const instance = apiInstance();
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    try {
      const res = await instance.post("users/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("accessToken", res.data.token);
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.details, {
          theme: "dark"
        })
      }
    }
  }
  return (
    <Container>
      <h1>로그인</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>로그인</Button>
      </Form>
      <Button>
        <Link to="/signup">회원가입</Link>
      </Button>
    </Container>
  );
}

export default Auth;
