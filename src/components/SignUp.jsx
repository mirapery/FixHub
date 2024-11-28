import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useField from "./useField";

//for testing
/*******************************************/

let registeredUsers = [
  { id: 1, name: "ville", email: "ville", password: "Ville" },
];
let currentId = 1;
//testing
const createUser = (name, email, password) => {
  const newUser = {
    id: currentId++,
    name: nameInput.value,
    userName: userNameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    about: aboutInput.value,
    creationTime: Date.now().toString(),
    location: {
      province: provinceInput.value,
      city: cityInput.value,
      postalcode: postalcodeInput.value,
    },
  };
  registeredUsers.push(newUser);
  console.log("new user created:" + newUser);
};
/*******************************************/

const SignUp = ({
  isModalOpen,
  closeModal,
  setIsAuthenticated,
  setRegisterUser,
}) => {
  const nameInput = useField("text");
  const userNameInput = useField("text");
  const passwordInput = useField("password");
  const emailInput = useField("email");
  const phoneInput = useField("text");
  const provinceInput = useField("text");
  const cityInput = useField("text");
  const postalcodeInput = useField("text");
  const aboutInput = useField("text");
  const navigate = useNavigate();
  const nameInputRef = useRef(null);
  const [image, setImage] = useState("");

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      nameInputRef.current?.focus();
    }
  }, [isModalOpen]);

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameInput.value,
          userName: userNameInput.value,
          phone: phoneInput.value,
          email: emailInput.value,
          password: passwordInput.value,
          image,
          creationTime: Date.now().toString(),
          location: {
            province: provinceInput.value,
            city: cityInput.value,
            postalcode: postalcodeInput.value,
          },
          about: aboutInput.value,
        }),
      });
      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up succesfully");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("error during signup: ", error);
    }
  };

  const handleClose = () => {
    setRegisterUser(false);
    closeModal();
  };

  return (
    <section
      className={`fixed z-10 inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-sm flex items-center justify-center ${isModalOpen}`}
    >
      <div className="flex flex-col bg-fh_beige-light shadow-lg w-[400px] h-auto rounded-sm">
        <div className="flex  bg-fh_lgreen justify-between p-3 rounded-t-sm">
          <h1 className="text-xl ">Rekisteröidy</h1>
          <button
            type="button"
            onClick={handleClose}
            className="text-fh_black-dark text-xl hover:text-fh_beige-dark "
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <form
          className="text-center flex flex-col h-full w-full"
          onSubmit={handleSignup}
        >
          <h1 className="flex items-center my-2 p-3 justify-between ">Nimi:</h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            ref={nameInputRef}
            {...nameInput}
            required
          ></input>
          <h1 className="flex items-center my-2 p-3 justify-between ">
            Käyttäjätunnus:
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            {...userNameInput}
            required
          ></input>

          <h1 className="flex items-center p-3 my-2 justify-between">
            Salasana:
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            {...passwordInput}
            id="password-input"
          ></input>
          <h1 className="flex items-center my-2 p-3 justify-between ">
            Sähköposti:
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            {...emailInput}
            required
          ></input>
          <h1 className="flex items-center my-2 p-3 justify-between ">
            Puhelin:
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            {...phoneInput}
            required
          ></input>
          <h1 className="flex items-center my-2 p-3 justify-between ">
            Maakunta:
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            {...provinceInput}
            required
          ></input>
          <h1 className="flex items-center my-2 p-3 justify-between ">
            Kaupunki{" "}
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            {...cityInput}
            required
          ></input>
          <h1 className="flex items-center my-2 p-3 justify-between ">
            Postinumero:
          </h1>
          <input
            className="w-2/3 ml-3 p-3 bg-fh_beige rounded-sm"
            {...postalcodeInput}
            required
          ></input>

          <div className="flex flex-wrap items-center p-3">
            <button
              className="p-4 bg-fh_lgreen rounded-sm hover:bg-fh_lgreen-light"
              type="submit"
            >
              Hyväksy
            </button>
            <div className="flex">
              <input className=" ml-2" type="checkbox"></input>
              <p className="ml-2">Muista kirjautumiseni</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default SignUp;
