import { useState, useRef } from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
//from navbar
const PageLinks = ({
  parentClass,
  itemClass,
  setIsLoginOpen,
  logOut,
  isDropDown,
  setIsDropDown,
  setNewItemOpen,
}) => {
  let user = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null;
  const handleClick = () => {
    if (user === null) {
      setIsLoginOpen(true);
    } else {
      setIsDropDown(!isDropDown);
    }
  };

  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
      <li className="relative">
        <Link to="#" className={itemClass} onClick={handleClick}>
          {user === null ? "login" : user.userName}
        </Link>
        {isDropDown && (
          <DropDown
            user={user}
            logOut={logOut}
            setNewItemOpen={setNewItemOpen}
          />
        )}
      </li>
    </ul>
  );
};
export default PageLinks;
