import PageLinks from "./PageLinks";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./LogIn";
import NewItem from "./NewItem";

const Navbar = ({
  isAuthenticated,
  setIsAuthenticated,
  setIsLoginOpen,
  user,
  setUser,
}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isNewItemOpen, setNewItemOpen] = useState(false);
  const navigate = useNavigate();

  //logout function
  const logOut = () => {
    setIsDropDown(false);
    // This is for later use
    //sessionStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  function handleButton() {
    document.getElementById("nav-content").classList.toggle("hidden");
  }

  return (
    <div>
      <header className="flex items-center justify-between flex-wrap py-4  w-full bg-fh_dgreen">
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
        <div className="pl-6 w-full md:w-auto hidden md:block" id="nav-content">
          <PageLinks
            parentClass="md:flex"
            itemClass="m-2 p-4 h-full rounded-lg text-fh_beige-dark hover:text-fh_beige md:hover:bg-fh_dgreen-light md:active:bg-fh_dgreen text-2xl"
            setIsLoginOpen={setIsLoginOpen}
            user={user}
            isAuthenticated={isAuthenticated}
            logOut={logOut}
            isDropDown={isDropDown}
            setIsDropDown={setIsDropDown}
            setNewItemOpen={setNewItemOpen}
          />
        </div>
      </header>
      {isNewItemOpen && <NewItem isOpen={setNewItemOpen} />}
    </div>
  );
};

export default Navbar;
