import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthNavbar from "./auth/navbar/AuthNavbar";
import AuthNavbar_user from "./auth/navbar/AuthNavbar.user";
import AuthFooter from "./auth/footer/AuthFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import jwtDecode from "jwt-decode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuth] = useState("");
  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken == "null") {
      setIsLoggedIn(false);
      navigate("/login");
    }
    console.log("data token : ", userToken);
    let decode = jwtDecode(userToken);
    // setIsLoggedIn(true);
    // setAuth(decode.roleUser);
    if (decode.roleUser === "admin") {
      setIsLoggedIn(true);
    }
    // console.log(decode.roleUser);
  };

  useEffect(() => {
    checkUserToken();
    console.log(isLoggedIn);
  }, []);

  return (
    <div>
      <h6> #source app </h6>
      {isLoggedIn ? <AuthNavbar_user /> : <AuthNavbar />}
      <Outlet />
      <AuthFooter />
      {/* {isLoggedIn && <PortalNavbar />}
      <Outlet />
      {isLoggedIn && <PortalFooter />} */}
    </div>
  );
}

export default App;

// function App() {
//   const [currentUser, setCurrentUser] = useState(undefined);

//   useEffect(() => {
//     const user = AuthService.getCurrentUser();

//     if (user) {
//       setCurrentUser(user);
//     }
//   }, []);

//   const logOut = () => {
//     AuthService.logout();
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/home"} className="nav-link">
//               Home
//             </Link>
//           </li>

//           {currentUser && (
//             <li className="nav-item">
//               <Link to={"/private"} className="nav-link">
//                 Private
//               </Link>
//             </li>
//           )}
//         </div>

//         {currentUser ? (
//           <div className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a href="/login" className="nav-link" onClick={logOut}>
//                 Logout
//               </a>
//             </li>
//           </div>
//         ) : (
//           <div className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link to={"/login"} className="nav-link">
//                 Login
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to={"/signup"} className="nav-link">
//                 Sign up
//               </Link>
//             </li>
//           </div>
//         )}
//       </nav>

//       <div className="container mt-3">
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/private" element={<Private />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
