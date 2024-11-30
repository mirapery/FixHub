import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp"
let registeredUsers = [
  { id: 1, name: "ville", email: "ville", password: "Ville" },
];

function Login({ isModalOpen, closeModal, setUser,setIsAuthenticated}) {
  const navigate = useNavigate();
  const nameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registerUser, setRegisterUser] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      nameInputRef.current?.focus();
    }
  }, [isModalOpen]);

/* 
const handleLogin = async () =>{
  try {
    //endpoint: POS>T /api/user/login
    const response = await fetch("/api/user/login",{
      method : "POST",
      body: JSON.stringify({username, password}),
      headers: {"Content-Type": "application /json"},
    });
    if(response.ok){
      const user = await response.json();
      sessionStorage.setItem("user",JSON.stringify(user));
      setIsAuthenticated(true);
      navigate("/")
    }
    else{
      console.error("Login failed")
    }
  }
  catch(error){
    console.error("Error during login", error);
  }
}
*/

  const handleSubmit = (e) => {
    e.preventDefault();
    const wrongPassword = registeredUsers.some(
      (user) => user.userame === userName && user.password !== password
    );

    const accesGranted = registeredUsers.some(
      (user) => user.name === userName && user.password === password
    );

    const testPassword =
      /^(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.*[\W_])+[\S]{10,}$/;

    const testEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // if (!testPassword.test(password) && !wrongPassword) {
    //   setErrorMessage(
    //     "Password must contain at least 10 characters, one uppercase, one lowercase, one number and one special character"
    //   );
    //   setPassword("");
    //   return;
    // }
    if (accesGranted) {
      setIsAuthenticated(true);
      setUser(userName);
      closeModal();
    }
    else if (wrongPassword) {
        passwordInputRef.current.setCustomValidity("Väärä salasana!");
        passwordInputRef.current.reportValidity();
    }
  };


  const handleRegister=()=>{ 
    setRegisterUser(true)
  }

 if(registerUser){
    return(
         <SignUp isModalOpen={isModalOpen} closeModal={closeModal} setIsAuthenticated={setIsAuthenticated} />
    )
 }
else{

  return (
    isModalOpen && (
      <section
      className={`fixed z-10 inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-sm flex items-center justify-center ${isModalOpen}`}
    >
      <div className="flex flex-col bg-fh_beige-light shadow-lg w-[90vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl-[20vw] h-auto rounded-sm">
        <div className="flex rounded-t-sm bg-fh_lgreen justify-between p-3">
          <h1 className="text-xl">Kirjaudu</h1>
          <button
            type="button"
            onClick={() => closeModal()}
            className="text-fh_black-dark text-xl hover:text-fh_beige-dark"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form
          className="text-center p-4 sm:p-6 flex flex-col h-full w-full"
          onSubmit={handleSubmit}
        >
          <label className="flex items-center justify-between text-lg mb-2">
            Käyttäjätunnus:
          </label>
          <input
            className="w-full sm:w-3/4 mb-4 p-3 bg-fh_beige rounded-sm"
            ref={nameInputRef}
            value={userName}
            type="text"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
    
          <label className="flex items-center justify-between text-lg mb-2">
            Salasana:
          </label>
          <input
            className="w-full sm:w-3/4 mb-6 p-3 bg-fh_beige rounded-sm"
            value={password}
            id="password-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex flex-col sm:flex-row items-center sm:justify-between">
            <button
              className="flex justify-center px-6 py-2  bg-fh_lgreen rounded-sm hover:bg-fh_lgreen-light"
              type="submit"
            >
              Kirjaudu
            </button>
            <div className="flex mt-4 items-center">
              <input className="mr-2" type="checkbox" />
              <p className="text-sm ">Muista kirjautumiseni</p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <p className="text-sm sm:text-base">Eikö sinulla ole käyttäjätunnusta?</p>
            <button
              onClick={handleRegister}
              className="flex justify-center  px-7 py-2 bg-fh_lgreen rounded-sm mt-2 hover:bg-fh_lgreen-light"
            >
              Rekisteröidy
            </button>
          </div>
        </form>
      </div>
    </section>
    )
    
  );}
 }

export default Login;
