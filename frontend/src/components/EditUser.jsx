import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";
import useTags from "../hooks/useTags";

import AuthContext from "./AuthContext";

const EditUser = ({ closeEditProfileWindow}) => {
  const navigate = useNavigate();
  const { list: tags, addTag, removeTag, resetTags, addTagList } = useTags([]);
  
  const nameInput = useField("text");
  const userNameInput = useField("text");
  const passwordInput = useField("password");
  const passwordInput2 = useField("password");
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

  const { setIsAuthenticated, setUser, user } = useContext(AuthContext);

  useEffect(() => {
    nameInput.onChange({ target: { value: user.name } });
    userNameInput.onChange({ target: { value: user.userName } });
    emailInput.onChange({ target: { value: user.email } });
    phoneInput.onChange({ target: { value: user.phone } });
    provinceInput.onChange({ target: { value: user.location.province } });
    cityInput.onChange({ target: { value: user.location.city } });
    postalcodeInput.onChange({
      target: { value: user.location.postalcode },
    });
    aboutInput.onChange({ target: { value: user.about } });
    fixerChoice.onChange({ target: { checked: user.isFixer } });
  }, [user]); 

  /*****Update fetch*************'**/

  const handleEdit = async (e) => {
    e.preventDefault();
    if (passwordInput.value !== passwordInput2.value) {
      alert("Password do not match");
      return;
    }
    const updatedUser = {
      name: nameInput.value,
      userName: userNameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      about: aboutInput.value,
      isFixer: fixerChoice.value,
      location: {
        province: provinceInput.value,
        city: cityInput.value,
        postalcode: postalcodeInput.value,
      },
      // Conditionally include password if it's not null or empty
      ...(passwordInput.value && { password: passwordInput.value }),
      // Conditionally include image if it's not null or empty
      ...(imageInput.value && { image: imageInput.value }),
    };
    //päivitetty yhteys databaseen
    try {
      const token = JSON.parse(sessionStorage.getItem("user"))?.token;
      console.log("token",token);

      const response = await fetch(`/api/users/${user._id}`, {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      const updatedData = await response.json();
      console.log("User updated:", updatedData);
      setUser(updatedData);
      closeEditProfileWindow(true);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    }
  };

  /****************************** */
  return (
    <section
      className={`fixed z-50 inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-sm flex items-center justify-center ma `}
    >
      {/*Regiter modal*/}
      <div className="flex flex-col bg-fh_beige-light shadow-lg w-auto h-auto rounded-sm max-h-[90vh] overflow-y-auto">
        <div className="flex  bg-fh_lgreen justify-between p-3 rounded-t-sm">
          <h1 className="text-xl ">Edit user</h1>
          <button
            type="button"
            onClick={closeEditProfileWindow}
            className="text-fh_black-dark text-xl hover:text-fh_beige-dark "
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/*Form here*/}
        <form
          className="flex p-3 sm:flex-wrap lg:flex-nowrap"
          onSubmit={handleEdit}
        >
          <section className="text-center flex flex-col">
            {/*Name here*/}
            <h1 className="flex items-center  justify-between">Name</h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              ref={nameInputRef}
              {...nameInput}
              required
            ></input>
            {/*Username here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Username
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...userNameInput}
              required
            ></input>
            {/*Password here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Password
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...passwordInput}
              id="password-input"
            ></input>
            {/*Password here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Re-enter password
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...passwordInput2}
              id="password-input2"
            ></input>
            {/*Email here*/}
            <h1 className="flex items-center  mt-4 justify-between">Email</h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...emailInput}
              required
            ></input>
            {/*Phone here*/}
            <h1 className="flex items-center  mt-4 justify-between">Phone</h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...phoneInput}
              required
            ></input>
            {/*Province here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Province
            </h1>
            <input
              className="p-3 bg-fh_beige rounded-sm"
              {...provinceInput}
              required
            ></input>
            {/*City here*/}
            <h1 className="flex items-center  mt-4 justify-between">City</h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...cityInput}
              required
            ></input>
            {/*Postalcode here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Postal code
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...postalcodeInput}
              required
            ></input>
            {/*Image here*/}
            <h1 className="flex items-center  mt-4 justify-between">
              Profile pic
            </h1>
            <input
              className=" p-3 bg-fh_beige rounded-sm"
              {...imageInput}
              accept="image/*"
            ></input>
            {/*Fixer choice here*/}

            <div className="text-center flex my-3">
              <h1 className="mr-5">I am fixer </h1>
              <input {...fixerChoice}></input>
            </div>
            <div className="flex flex-wrap items-center ">
              <button
                className="p-4 bg-fh_lgreen rounded-sm hover:bg-fh_lgreen-light"
                type="submit"
              >
                Submit
              </button>
            </div>
          </section>

          {/*If fixer: load fixer options*/}
          {fixerChoice.value && (
            <section className="text-center flex flex-col ml-3 ">
              <div className="text-center flex flex-col ">
                {/*About here*/}
                <h1 className="flex items-center   justify-between">About</h1>
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
                    Add tags:
                  </label>

                  <div className="flex flex-row mx-1">
                    <input
                      type="text"
                      //name="name"
                      id="itemTags"
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      placeholder="Give a new tag:"
                      className=" w-8/12 h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white focus:outline-none focus:ring-2 focus:ring-fh_dgreen-light hover:bg-fh_white-light"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addTag(tag);
                          setTag("");
                        }
                      }}
                    ></input>

                    <button
                      type="button"
                      className="  h-12 px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                      onClick={() => {
                        addTag(tag);
                        setTag("");
                      }}
                    >
                      Add
                    </button>
                    {/*Selected tags here*/}
                  </div>
                  <div className=" w-1/2 flex flex-col items-center">
                    <label className="text-xl text-fh_black-light m-1">
                      Selected tags:
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
            </section>
          )}
        </form>
      </div>
    </section>
  );
};
export default EditUser;
