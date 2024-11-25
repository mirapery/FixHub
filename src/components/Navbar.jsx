import PageLinks from "./PageLinks";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./LogIn";
import NewItem from "./NewItem";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginName, setLoginName] = useState(
    /*localStorage.getItem("loginName") ||*/ "Login" // Get name from local storage
  );

  // new item modaalin jutut
  const [isNewItemOpen, setNewItemOpen] = useState(false)

  const openNewItem = () => {
    setNewItemOpen(true);
  }
  const closeNewItem = () => {
    setNewItemOpen(false);
  }
  // estää taustan scrollaamisen kun new item on auki
  useEffect(() => {
    if (isNewItemOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNewItemOpen]);

  // useEffect(()=>{
  // localStorage.setItem("loginName",loginName);

  // },[loginName])

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handleButton() {
    document.getElementById("nav-content").classList.toggle("hidden");
  }

  return (
    <div>
      <header className="flex items-center justify-between flex-wrap py-4 w-full bg-fh_dgreen">
        <div className="flex shrink-0 ml-6 cursor-pointer">
          <Link
            to="/"
            className="text-4xl font-bold font-sans text-fh_beige-dark"
          >
            FixHub
          </Link>
        </div>

        <button
          id="nav-toggle"
          onClick={handleButton}
          className="md:hidden p-2 mr-4 ml-6 my-2 border rounded border-gray-600 text-fh_beige-dark hover:text-fh_beige-light"
        >
          <i className="fas fa-bars fa-2x"></i>
        </button>

        {/* testingiin, Ville laittaa tän sit fiksumpaan paikkaan :) */}
        <button
          className="m-2 p-4 h-full rounded-lg text-fh_beige-dark hover:text-fh_beige md:hover:bg-fh_dgreen-light md:active:bg-fh_dgreen text-2xl"
          onClick={openNewItem}>
          New Item
        </button>

        <div className="pl-6 w-full md:w-auto hidden md:block" id="nav-content">
          <PageLinks
            parentClass="md:flex"
            itemClass="m-2 p-4 h-full rounded-lg text-fh_beige-dark hover:text-fh_beige md:hover:bg-fh_dgreen-light md:active:bg-fh_dgreen text-2xl"
            openModal={openModal}
            loginName={loginName}
          />
        </div>
      </header>
      <Login
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        loginName={setLoginName}
      />

      <NewItem
        isOpen={isNewItemOpen}
        closeNewItem={closeNewItem}
      />
    </div>
  );
};

export default Navbar;
