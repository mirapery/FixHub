import { useState, useRef } from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";
import { Link } from "react-router-dom";

const PageLinks = ({
  parentClass,
  itemClass,
  openModal,
  user,
  isAuthenticated,
  logOut,isDrobDown,setIsDrobDown
}) => {
  const dropdownRef = useRef(null);

  const handleClick = () => {
    if (!isAuthenticated) {
      openModal();
    } else {
      setIsDrobDown(!isDrobDown);
    }
  };

  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
      <li className="relative">
        <Link to="#" className={itemClass} onClick={handleClick}>
          {user === null ? "login" : user}
        </Link>
        {isDrobDown && (
          <div
            ref={dropdownRef}
            className="absolute top-11 right-0 mt-2 w-48 bg-fh_white shadow-lg rounded-sm z-50 "
          >
            <ul className="p-2">
              <Link to="'user/:userName'">
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  Profiili
                </li>
              </Link>
              <Link to="lisäätuote">
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  Lisää tuote
                </li>
              </Link>
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
        )}
      </li>
    </ul>
  );
};
export default PageLinks;
