import React from "react";
import { useState, useRef, useEffect } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const inputElement = document.getElementById("password-input");

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

  return (
    <section
      className={` fixed z-10 inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-sm flex items-center justify-center ${isModalOpen}`}
    >
      <div className="flex flex-col bg-fh_beige-light shadow-lg h-2/5 w-[30vw] rounded-sm">
        <form
          className="text-center rounded-sm flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="flex  bg-fh_lgreen justify-between p-3">
            <h1 className="text-xl ">Kirjaudu</h1>
            <button
              type="button"
              onClick={() => closeModal()}
              className="text-fh_black-dark text-xl hover:text-fh_beige-dark "
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <h1 className="flex items-center my-2 p-3 justify-between ">
            Käyttäjätunnus:
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            ref={nameInputRef}
            value={name}
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>

          <h1 className="flex items-center p-3 my-2 justify-between">
            Salasana:
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            value={password}
            id="password-input"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="flex flex-wrap items-center p-3">
            <button
              className="p-4 bg-fh_lgreen rounded-sm hover:bg-fh_lgreen-light"
              type="submit"
            >
              Kirjaudu
            </button>
            <div className="flex">
              <input className=" ml-2" type="checkbox"></input>
              <p className="ml-2">Muista kirjautumiseni</p>
            </div>
          </div>
          <div className=" flex flex-col items-center mt-5">
            <p>Eikö sinulla ole käyttäjätunnusta?</p>
            <button className="p-4 bg-fh_lgreen rounded-sm mt-2 w-1/2 hover:bg-fh_lgreen-light">
              Rekisteröidy
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
