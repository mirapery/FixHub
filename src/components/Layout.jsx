import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Login from "./LogIn";
import SignUp from "./SignUp";
import NewItem from "./NewItem";
import useSessionStorage from "./useSessionStorage";

const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [user, setUser] = useSessionStorage("user", null);

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
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        setIsLoginOpen={setIsLoginOpen}
        user={user}
        setUser={setUser}
      
      />

      <main className="flex-grow">
        <Outlet />

        {isSignupOpen && (
          <SignUp
            setIsSignupOpen={setIsSignupOpen}
            isSignupOpen={isSignupOpen}
            setUser={setUser}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}

        {isLoginOpen && (
          <Login
            isLoginOpen={isLoginOpen}
            setIsLoginOpen={setIsLoginOpen}
            setIsSignupOpen={setIsSignupOpen}
            setUser={setUser}
            setIsAuthenticated={setIsAuthenticated}
          />
        )}

        
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
