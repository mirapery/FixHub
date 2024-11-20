import React from "react";
import { useState, useRef, useEffect } from "react";
import SignUp from "./SignUp"
let registeredUsers = [
  { id: 1, name: "ville", email: "ville", password: "Ville" },
];
let currentId = 1;

const createUser = (name, email, password) => {
  const newUser = {
    id: currentId++,
    name,
    email,
    password,
  };
  registeredUsers.push(newUser);
  console.log("new user created:" + newUser);
};

function Login({ isModalOpen, closeModal, loginName }) {
  const nameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [registerUser, setRegisterUser] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      nameInputRef.current?.focus();
    }
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const wrongPassword = registeredUsers.some(
      (user) => user.name === name && user.password !== password
    );

    const accesGranted = registeredUsers.some(
      (user) => user.name === name && user.password === password
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
      setUserLoggedIn(true);
      loginName(name);
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
         <SignUp isModalOpen={isModalOpen} closeModal={closeModal} setRegisterUser={setRegisterUser} />
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
            value={name}
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
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
              className="w-1/2 flex justify-center sm:w-1/3 px-6 py-2  bg-fh_lgreen rounded-sm hover:bg-fh_lgreen-light"
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
              className="flex justify-center  w-1/2 sm:w-1/3 px-7 py-2 bg-fh_lgreen rounded-sm mt-2 hover:bg-fh_lgreen-light"
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
