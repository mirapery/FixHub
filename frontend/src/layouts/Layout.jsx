import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Login from "./LogIn";
import SignUp from "./SignUp";


const Layout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  //prevents background scrolling when modal is open do this for useContext
  // useEffect(() => {
  //   if (isNewItemOpen || isLoginOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isNewItemOpen, isLoginOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-fh_white">
      <Navbar setIsLoginOpen={setIsLoginOpen} />

      <main className="flex-grow">
        <Outlet />

        {isSignupOpen && (
          <SignUp
            setIsSignupOpen={setIsSignupOpen}
            isSignupOpen={isSignupOpen}
          />
        )}

        {isLoginOpen && (
          <Login
            isLoginOpen={isLoginOpen}
            setIsLoginOpen={setIsLoginOpen}
            setIsSignupOpen={setIsSignupOpen}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
