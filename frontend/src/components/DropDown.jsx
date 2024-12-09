import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
// from pagelinks
const DropDown = ({ setIsNewItemOpen, logOut, user, setIsDropDown }) => {




  return (
    <div className="
     absolute  top-56 mt-1  w-[100vw]
    md:top-16 md:mt-2 right-0 md:w-48 bg-fh_white shadow-lg rounded-sm z-50 ">
      <ul className="p-2">
        <Link to={`user/${user.userName}`}>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Profile
          </li>
        </Link>
        <li
          onClick={() => setIsNewItemOpen(true)}
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
        >
          Add listing
        </li>
        <Link to="lisäätuote">
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            My listings
          </li>
        </Link>

        <li
          onClick={logOut}
          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
        >
          Log out
        </li>
      </ul>
    </div>
  );
};
export default DropDown;