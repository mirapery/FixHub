import PageLinks from "./PageLinks";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import NewItem from "./NewItem";
import DropDown from "./DropDown";

//Laytoutista
const Navbar = ({ setIsLoginOpen, isDropDown, setIsDropDown }) => {
  const {setIsAuthenticated } = useContext(AuthContext);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [isNewItemOpen, setIsNewItemOpen] = useState(false);
  const navigate = useNavigate();

  //logout function
  const logOut = () => {
    setIsDropDown(false);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
  };

  function handleButton() {
    document.getElementById("nav-content").classList.toggle("hidden");
  }

  return (
    <div>
      <header className="flex relative items-center justify-between flex-wrap py-4 w-full bg-fh_dgreen">
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
            isDropDown={isDropDown}
            setIsDropDown={setIsDropDown}
            user={user}
          />
        </div>
        {isDropDown && (
          <DropDown
            user={user}
            logOut={logOut}
            setIsDropDown={setIsDropDown}
            setIsNewItemOpen={setIsNewItemOpen}
            setIsLoginOpen={setIsLoginOpen}
          />
        )}
      </header>
      {isNewItemOpen && (
        <NewItem setIsNewItemOpen={setIsNewItemOpen} isOpen={isNewItemOpen} />
      )}
    </div>
  );
};

export default Navbar;
