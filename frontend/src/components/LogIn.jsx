import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyUsers } from "../assets/data";
import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";
import AuthContext from "./AuthContext";

function Login({ setIsLoginOpen, isLoginOpen, setIsSignupOpen }) {
  const navigate = useNavigate();
  const nameInputRef = useRef(null);
  const userName = useField("text");
  const password = useField("password");
  const { setIsAuthenticated, isAuthenticated} =
    useContext(AuthContext);

  const { login, error } = useLogin("/api/users/login");

  useEffect(() => {
    if (isLoginOpen) {
      nameInputRef.current?.focus();
    }
  }, [isLoginOpen]);
  const openRegistering = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  /**************USE LOGIN HERE***************/
  const handleLogin = async (e) => {
    e.preventDefault();

    // Call login and get the error directly
    const loginError = await login({
      userName: userName.value,
      password: password.value,
    });

    if (loginError) {
      console.log("Error occurred:", loginError); // Log the error
      alert(loginError); // Show an alert with the error
      return; // Stop execution if there's an error
    }

    setIsLoginOpen(false);
  };
  /******************************************** */
  return (
    <section
      className={`fixed z-10 inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-sm flex items-center justify-center`}
    >
      <div className="flex flex-col bg-fh_beige-light shadow-lg w-[400px] max-h-[90vh] overflow-y-auto h-auto rounded-sm">
        <div className="flex rounded-t-sm bg-fh_lgreen justify-between p-3">
          <h1 className="text-xl">Kirjaudu</h1>
          <button
            type="button"
            onClick={() => setIsLoginOpen(false)}
            className="text-fh_black-dark text-xl hover:text-fh_beige-dark"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form
          className="text-center p-4 sm:p-6 flex flex-col h-full w-full"
          onSubmit={handleLogin}
        >
          <label className="flex items-center justify-between text-lg mb-2">
            Username
          </label>
          <input
            className="w-full sm:w-3/4 mb-4 p-3 bg-fh_beige rounded-sm"
            ref={nameInputRef}
            {...userName}
            required
          />

          <label className="flex items-center justify-between text-lg mb-2">
            Password
          </label>
          <input
            className="w-full sm:w-3/4 mb-6 p-3 bg-fh_beige rounded-sm"
            {...password}
            required
          />
          <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <button
              className="flex justify-center px-6 py-2  bg-fh_lgreen rounded-sm hover:bg-fh_lgreen-light"
              type="submit"
            >
              Login
            </button>
            <div className="flex mt-4 items-center">
              <input className="mr-2" type="checkbox" />
              <p className="text-sm ">Remember me</p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <p className="text-sm sm:text-base">You dont have an account?</p>
            <button
              onClick={openRegistering}
              className="flex justify-center  px-7 py-2 bg-fh_lgreen rounded-sm mt-2 hover:bg-fh_lgreen-light"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
