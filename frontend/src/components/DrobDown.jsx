import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
// from pagelinks
const DropDown = ({ setNewItemOpen, logOut, user, setIsDropDown }) => {
  const dropDownRef = useRef(null); // useRef to reference the dropdown div
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropDown(false); // Close the dropdown if clicked outside
      }
    };

    // Add event listener for click
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listener when component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropDownRef}
      className="mt-2 w-48 bg-fh_white shadow-lg rounded-sm z-50 "
    >
      <ul className="p-2">
        <Link to={`user/${user.userName}`}>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Profiili
          </li>
        </Link>
        <li
          onClick={() => setNewItemOpen(true)}
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
        >
          Lisää ilmoitus
        </li>

        <Link to="lisäätuote">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Viestit
          </li>
        </Link>
        <Link to="lisäätuote">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Ilmoitukset
          </li>
        </Link>

        <li
          onClick={logOut}
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
        >
          Kirjaudu ulos
        </li>
      </ul>
    </div>
  );
};
export default DropDown;
