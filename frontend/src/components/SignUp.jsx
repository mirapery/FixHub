import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";
import useTags from "../hooks/useTags";
import { dummyUsers } from "../data.js";
import useSignup from "../hooks/useSignup";
import AuthContext from "./AuthContext";
const SignUp = ({ setIsSignupOpen, isSignupOpen }) => {
  const navigate = useNavigate();
  const { list: tags, addTag, removeTag, resetTags, addTagList } = useTags([]);

  const nameInput = useField("text");
  const userNameInput = useField("text");
  const passwordInput = useField("password");
  const emailInput = useField("email");
  const phoneInput = useField("text");
  const provinceInput = useField("text");
  const cityInput = useField("text");
  const postalcodeInput = useField("text");
  const aboutInput = useField("text");
  const fixerChoice = useField("checkbox");
  const imageInput = useField("file");
  const nameInputRef = useRef(null);
  const [tag, setTag] = useState("");
  const { signup, error } = useSignup("/api/users/signup");
  const { setIsAuthenticated } = useContext(AuthContext);

  
  //for testing
  /*******************************************/
  let currentId = 1;
  const createUser = (
    name,
    userName,
    phone,
    email,
    password,
    about,
    tags_,
    isFixer,
    province,
    city,
    postalcode
  ) => {
    const newUser = {
      id: currentId++,
      name,
      userName,
      phone,
      email,
      password,
      about,
      tags_,
      isFixer,
      creationTime: Date.now().toString(),
      location: {
        province,
        city,
        postalcode,
      },
    };
    dummyUsers.push(newUser);
    console.log("new user created:" + newUser);
  };
  
  const handleSignup = (event) => {
    event.preventDefault();
    createUser(
      nameInput.value,
      userNameInput.value,
      phoneInput.value,
      emailInput.value,
      passwordInput.value,
      aboutInput.value,
      tags,
      fixerChoice.value,
      provinceInput.value,
      cityInput.value,
      postalcodeInput.value
    );
    sessionStorage.setItem("user", JSON.stringify(user));
    setIsAuthenticated(true);
    setIsSignupOpen(false);
  };
  /*******************************************/



  useEffect(() => {
    if (isSignupOpen) {
      nameInputRef.current?.focus();
    }
  }, [isSignupOpen]);
  const handleClose = () => {
    setIsSignupOpen(false);
  };

  /*****SIGN UP FETCH*************'**/
  /*
  const handleSignup async (e) =>{
    e.preventDefault();
    const newUser = {
   
      name:nameInput.value,
      userName:userNameInput.value,
      phone:phoneInput.value,
      email:emailInput.value,
      password:passwordInput.value,
      about:aboutInput.value,
      tags_:tags,
      isFixer:fixerChoice.value,
      creationTime: Date.now().toString(),
      location: {
        province: provinceInput.value,
        city:cityInput.value,
      postalcode:postalcodeInput.value
      },
    };
    await signup(newUser);
    if(!error){
    console.log("succes")
   }
    setIsSignupOpen(false);
  
  
  }
  */
 /****************************** */
  return (
    <section
      className={`fixed z-10 inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-sm flex items-center justify-center`}
    >
      {/*Regiter modal*/}
      <div className="flex flex-col bg-fh_beige-light shadow-lg w-auto h-auto rounded-sm">
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

        {/*Form here*/}
        <form
          className="flex p-3 sm:flex-wrap lg:flex-nowrap"
          onSubmit={handleSignup}
        >
          <section className="text-center flex flex-col">
            {/*Name here*/}
            <h1 className="flex items-center  justify-between">Nimi:</h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              ref={nameInputRef}
              {...nameInput}
              required
            ></input>
            {/*Username here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Käyttäjätunnus
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...userNameInput}
              required
            ></input>
            {/*Password here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Salasana
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...passwordInput}
              id="password-input"
            ></input>
            {/*Email here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Sähköposti
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...emailInput}
              required
            ></input>
            {/*Phone here*/}
            <h1 className="flex items-center  mt-4 justify-between">Puhelin</h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...phoneInput}
              required
            ></input>
            {/*Province here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Maakunta
            </h1>
            <input
              className="p-3 bg-fh_beige rounded-sm"
              {...provinceInput}
              required
            ></input>
            {/*City here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Kaupunki
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...cityInput}
              required
            ></input>
            {/*Postalcode here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Postinumero
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...postalcodeInput}
              required
            ></input>
            {/*Image here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Lisää kuva
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...imageInput}
              accept="image/*"
            ></input>
            {/*Fixer choice here*/}

            <div className="text-center flex my-3">
              <h1 className="mr-5">Olen korjaaja </h1>
              <input {...fixerChoice}></input>
            </div>
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
          </section>
          <section className="text-center flex flex-col ml-3 ">
            {/*If fixer: load fixer options*/}
            {fixerChoice.value && (
              <div className="text-center flex flex-col ">
                {/*About here*/}
                <h1 className="flex items-center   justify-between">
                  Lisätietoja
                </h1>
                <textarea
                  className=" p-3 bg-fh_beige rounded-sm"
                  {...aboutInput}
                  rows="10"
                ></textarea>
                {/*Tags here*/}
                <div className="flex  flex-col m-2 space-y-2 items-center">
                  <label
                    htmlFor="itemTags"
                    className="text-lg text-fh_black font-bold m-1"
                  >
                    Lisää tägit:
                  </label>

                  <div className="flex flex-row mx-1">
                    <input
                      type="text"
                      //name="name"
                      id="itemTags"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      placeholder="Anna uusi tägi:"
                      className=" w-8/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          addTag(tag);
                          setTag("");
                        }
                      }}
                    ></input>

                    <button
                      className="  h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                      onClick={() => {
                        addTag(tag);
                        setTag("");
                      }}
                    >
                      Lisää
                    </button>
                    {/*Selected tags here*/}
                  </div>
                  <div className="w-1/2 flex flex-col items-center">
                    <label className="text-xl text-fh_black-light m-1">
                      Valitut tägit:
                    </label>
                    <ul className="m-1 flex flex-wrap justify-center">
                      {tags.map((tag, index) => (
                        <li
                          key={index}
                          className="m-1  flex flew-row border border-fh_black bg-fh_white rounded-md p-1"
                        >
                          <p className="my-1 mx-2 text-lg text-fh_dgreen font-bold">
                            {tag}
                          </p>
                          <button
                            className="w-7 p-0 border border-fh_black-light m-1 rounded-full text-md bg-fh_white-dark hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                            onClick={() => removeTag(index)}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </section>
        </form>
      </div>
    </section>
  );
};
export default SignUp;
