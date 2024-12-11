import React, { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useField from "../hooks/useField";
import useTags from "../hooks/useTags";
import useSignup from "../hooks/useSignup";
const SignUp = ({ setIsSignupOpen, isSignupOpen }) => {
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
  const [images, setImages] = useState([]);
  const nameInputRef = useRef(null);
  const [tag, setTag] = useState("");
  const { signup, error } = useSignup("/api/users/signup");

  useEffect(() => {
    if (isSignupOpen) {
      nameInputRef.current?.focus();
    }
  }, [isSignupOpen]);
  const handleClose = () => {
    setIsSignupOpen(false);
  };
  // check image type
  const handleFileChange = (e) => {
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
    const files = Array.from(e.target.files);

    const validFiles = files.filter((file) => {
      if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
        setError("Only JPG and PNG images are allowed.");
        return false;
      }

      if (file.size > maxSizeInBytes) {
        setError(
          `File size should not exceed ${maxSizeInBytes / (1024 * 1024)} MB.`
        );
        return false;
      }

      return true;
    });

    if (validFiles.length === 0) return; // Stop if no valid files

    // Limit the number of images
    const newImages = validFiles.slice(0, 4 - images.length);
    if (newImages.length < validFiles.length) {
      setError(`You can upload up to 4 images only.`);
    }

    // Rename images
    const renamedFiles = newImages.map((file, index) => {
      const timestamp = Date.now();
      const newFileName = `image_${timestamp}_${index + 1}.${file.name
        .split(".")
        .pop()}`; //tähän alkuun vielä itemin id sit jostain
      return new File([file], newFileName, { type: file.type });
    });

    // Update images
    setImages((prev) => [...prev, ...renamedFiles]);
  };

  const newUser = new FormData();
  //add data to formData

  newUser.append("isFixer", fixerChoice.value);
  newUser.append("name", nameInput.value);
  newUser.append("userName", userNameInput.value);
  newUser.append("phone", phoneInput.value);
  newUser.append("email", emailInput.value);
  newUser.append("password", passwordInput.value);
  newUser.append("about", aboutInput.value);
  newUser.append(
    "location",
    JSON.stringify({
      province: provinceInput.value,
      city: cityInput.value,
      postalCode: postalcodeInput.value,
    })
  );
  // Append images

  images.forEach((image) => {
    newUser.append("images", image); // Lisää jokainen tiedosto
  });
   // Append files under the "images" key

  /*****SIGN UP FETCH*************'**/

  const handleSignup = async (e) => {
    e.preventDefault();
    if (passwordInput.value !== passwordInput2.value) {
      alert("Password do not match");
      return;
    }
    // const newUser = {
    //   name: nameInput.value,
    //   userName: userNameInput.value,
    //   phone: phoneInput.value,
    //   email: emailInput.value,
    //   password: passwordInput.value,
    //   about: aboutInput.value,
    //   isFixer: fixerChoice.value,
    //   location: {
    //     province: provinceInput.value,
    //     city: cityInput.value,
    //     postalcode: postalcodeInput.value,
    //   },
    // };

    const loginError = await signup(newUser);
    if (loginError) {
      alert(loginError);
    } else {
      setIsSignupOpen(false);
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
          <h1 className="text-xl ">Sign up</h1>
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
              required
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
            <h1 className="flex items-center  mt-4 justify-between">Puhelin</h1>
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
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            ></input>
            {images[0] && (
              <div className="min-h-80 align-middle">
                <img
                  src={URL.createObjectURL(images[0])}
                  alt={`preview-main`}
                  className="w-80 h-auto m-4 rounded-md"
                />

                <button type="button" onClick={() => setImages((prev) => [])}>
                  Remove
                </button>
              </div>
            )}
            {/*Fixer choice here*/}

            <div className="text-center flex my-3">
              <h1 className="mr-5">Olen korjaaja </h1>
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
                    Add tag:
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
                  <div className="w-1/2 flex flex-col items-center">
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
export default SignUp;
