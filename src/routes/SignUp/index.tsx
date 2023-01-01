import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[a-z0-9]+@[a-z]+\.[a-z]"
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
