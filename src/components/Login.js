import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URLAPI from "../config/base.url";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const endpoint = "/api/login";

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(data);
    try {
      const response = await axios.post(`${BASE_URLAPI}` + `${endpoint}`, data);
      const token = response.data.token;
      console.log(token);
      if (!token) {
        alert("username dan password tidak sesuai");
        return;
      } else {
        alert(response.data.message);
        localStorage.clear();
        localStorage.setItem("user-token", token);
        setTimeout(() => {
          navigate("/home");
        }, 500);
      }
    } catch (error) {
      console.log(error.message);
      alert("terjadi kesalahan saat login mohon coba lagi");
    }
    // try {
    //   await AuthService.login(email, password).then(
    //     () => {
    //       navigate("/home");
    //       window.location.reload();
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <input
          id="username"
          type="text"
          placeholder="username"
          name="username"
          value={data.name}
          onChange={handleInputChange}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
