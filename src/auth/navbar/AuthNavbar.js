import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthNavbar = () => {
  const [isLoggedIn1, setIsLoggedIn1] = useState(false);
  const [auth, setAuth] = useState("");

  const navigate = useNavigate();

  // const checkUserToken = () => {

  //   if (!userToken || userToken == "null") {
  //     setIsLoggedIn(false);
  //     navigate("/login");
  //   }
  //   console.log("data token : ", userToken);

  // };

  // const checkAuth = () => {
  //   const userToken = localStorage.getItem("user-token");
  //   let decode = jwtDecode(userToken);
  //   setAuth(decode.roleUser);
  //   // console.log(decode.roleUser);
  //   if (auth === "admin") {
  //     setIsLoggedIn1(true);
  //   } else {
  //     setIsLoggedIn1(false);
  //   }
  // };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  return (
    <div>
      <Navbar bg="dark" expand="lg" className="navbar-dark">
        <Navbar.Brand className="ms-3">NIN ONE PORTAL (TRIAL) </Navbar.Brand>
        <Nav.Link
          style={{ color: "white", marginLeft: "50px" }}
          className=""
          as={Link}
          to={"/home"}
        >
          Home
        </Nav.Link>

        <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
          <button onClick={logout}> Logout </button>
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default AuthNavbar;
