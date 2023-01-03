import { AxiosError } from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiInstance } from "../../api";
import { Button, Container, Form, Input } from "../../styles/form";

function SignUp() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  const instance = apiInstance();
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    try {
      const res = await instance.post("users/create", {
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
      <h1>회원가입</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$"
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
        />
        <Button type="submit">가입</Button>
        <Button>
          <Link to='/auth'>뒤로</Link>
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
