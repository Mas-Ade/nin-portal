import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthNavbar from "./auth/navbar/AuthNavbar";
import AuthFooter from "./auth/footer/AuthFooter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken == "null") {
      setIsLoggedIn(false);
      navigate("/login");
    }
    console.log("data token : ", userToken);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      <h6> #source app </h6>
      {isLoggedIn && <AuthNavbar />}
      <Outlet />
      {isLoggedIn && <AuthFooter />}
      {/* {isLoggedIn && <PortalNavbar />}
      <Outlet />
      {isLoggedIn && <PortalFooter />} */}
    </React.Fragment>
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
