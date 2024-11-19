import React from "react";
import { useState } from "react";
import { styles } from "./LoginPageStyle";

let registeredUsers = [
  { id: 1, name: "ville", email: "ville", password: "V1lleee>ee" },
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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginVariable, setLoginVariable] = useState("Login");
  const [showEmailField, setShowEmailField] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [pwFieldVariable, setPwFieldVariable] = useState("Give password");
  const [errorMessage, setErrorMessage] = useState("");


  const handleSubmit = (e) => {
    setErrorMessage("");
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

    if (!testPassword.test(password)&&!wrongPassword) {
      setErrorMessage(
        "Password must contain at least 10 characters, one uppercase, one lowercase, one number and one special character"
      );
      setPassword("");
      return;
    }

    if (showEmailField && !testEmail.test(email)) {
    
      setEmail("");
      return;
    }

    switch (true) {
      //if user enters wrong password message is shown in text field
      case !userLoggedIn && wrongPassword:
        setErrorMessage("Wrong password!");
        setPassword("");
        break;
      //after user pressed logout button, next time modal is log in
      case userLoggedIn:
        setPwFieldVariable("Give password");
        setShowEmailField(false);
        setEmail("");
        setLoginVariable("Login");
        setUserLoggedIn(false);
        loginName("Login");
        closeModal();
        break;

      //after registration
      case !userLoggedIn && showEmailField:
        createUser(name, email, password);
        closeModal();
        loginName(name);
        setUserLoggedIn(true);
        setShowEmailField(false);
        setLoginVariable("Log Out " + name);
        break;
      //if user not found, show email input-field for registration
      case !userLoggedIn && !accesGranted:
    
        setLoginVariable("Sign In");
        setShowEmailField(true);
        break;

      //if user is not logged in and login accesGranted next time modal is for logout
      case !userLoggedIn:
        closeModal();
        loginName(name);
        setUserLoggedIn(true);
        setLoginVariable("Log Out " + name);
        break;
    }
  };

  return (
    <div className={`${styles.loginBody} ${isModalOpen}`}>
      <form className={styles.formBody} onSubmit={handleSubmit}>
        <div className={styles.closeButtonElement}>
          <button
            type="button"
            onClick={() => closeModal()}
            className={styles.closeButton}
          >
            x
          </button>
        </div>
        <h1 className={styles.h1}>{loginVariable}</h1>

        {showEmailField && (
          <input
            className={styles.input}
            value={email}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {!userLoggedIn && (
          <>
            <input
              className={styles.input}
              value={name}
              type="text"
              placeholder="User Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              value={password}
              type="text"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.loginButton} type="submit">
              Ok
            </button>
            <p className={styles.errorMessage}>{errorMessage}</p>
          </>
        )}
        {userLoggedIn && (
          <>
            <button className={styles.logoutButton} type="submit">
              Ok
            </button>
            
            </>
        )}
          
          
      </form>
    </div>
  );
}

export default Login;
