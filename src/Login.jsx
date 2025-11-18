// Login.jsx
import { useState } from "react";
import { supabase } from "./supabase";

import "./Login.css";
export default function Login({ session }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSignIn() {
    supabase.auth.signInWithPassword({ email, password });
    console.log("в момент входа сессия -" + session);
  }

  function handleSignUp(event) {
    event.preventDefault();
    supabase.auth.signUp({ email, password });
    console.log("в момент регистрации сессия -" + session);
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignUp}>
        <h1 className="Login-h1">Вход / Регистрация</h1>
        <input
          className="login-input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
          type="email"
        />
        <input
          className="login-input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Пароль"
          type="password"
        />
        <div className="login-buttons">
          <button
            className="login-button signin-button"
            onClick={handleSignIn}
            type="button"
          >
            Войти
          </button>
          <button className="login-button signup-button" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
}
