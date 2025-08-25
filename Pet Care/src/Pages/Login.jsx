import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        console.log("Login successful");
        const token = await res.text();
        console.log(token);
        localStorage.setItem("token", token);
      navigate("/blogs");
      } else {
        const errorMsg = await res.text();
        setError(errorMsg);
        console.log(errorMsg);
      }
    } catch (error) {
      console.log("Login failed");
      setError("Invalid email or password");
    }
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Login</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
