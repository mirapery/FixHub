import PageLinks from "./PageLinks";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useLocalStorage from "./UseLocalStorage";
import Login from "./LogIn";


const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDrobDown, setIsDrobDown] = useState(false);
  const [user, setUser] = useLocalStorage("user", "");
  const navigate = useNavigate();
  const logOut = () =>{
    setIsDrobDown(false);
    setUser(null);
    setIsAuthenticated(false)
    navigate("/")
  };

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
        <div className="pl-6 w-full md:w-auto hidden md:block" id="nav-content">
          <PageLinks
            parentClass="md:flex"
            itemClass="m-2 p-4 h-full rounded-lg text-fh_beige-dark hover:text-fh_beige md:hover:bg-fh_dgreen-light md:active:bg-fh_dgreen text-2xl"
            openModal={openModal}
            user={user}
            isAuthenticated={isAuthenticated}
            logOut={logOut}
            isDrobDown={isDrobDown}
            setIsDrobDown={setIsDrobDown}
            
          />
        </div>
      </header>
      <Login
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        setUser={setUser}
        setIsAuthenticated={setIsAuthenticated}
      />
    </div>
  );
};

export default Navbar;
