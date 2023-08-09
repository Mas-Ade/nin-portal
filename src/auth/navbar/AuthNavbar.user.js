import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const AuthNavbar_user = () => {
  const navigate = useNavigate();

  // const checkUserToken = () => {

  //   if (!userToken || userToken == "null") {
  //     setIsLoggedIn(false);
  //     navigate("/login");
  //   }
  //   console.log("data token : ", userToken);

  // };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

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

        <Nav.Link
          style={{ color: "white", marginLeft: "20px" }}
          className=""
          as={Link}
          to={"/trial"}
        >
          Trial
        </Nav.Link>

        <Nav.Link
          style={{ color: "white", marginLeft: "20px" }}
          className=""
          as={Link}
          to={"/trial"}
        >
          Trial 2
        </Nav.Link>

        <Nav.Link style={{ color: "white", marginLeft: "20px" }}>
          <button onClick={logout}> Logout </button>
        </Nav.Link>
      </Navbar>
    </div>
  );
};

export default AuthNavbar_user;
