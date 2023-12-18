import React from "react";
import TextInput from "./TextInput.js";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function handleLogin() {}
  return (
    <form onSubmit={handleLogin}>
      <TextInput
        required={true}
        data-test-id="login-email-field"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextInput
        required={true}
        data-test-id="login-email-field"
        label="Password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button>Log in</button>
      <button>Sign up</button>
    </form>
  );
}

export default LoginForm;
