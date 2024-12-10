import { useState, useRef } from "react";
import { pageLinks } from "../assets/data";
import PageLink from "./PageLink";
import { Link } from "react-router-dom";

//from navbar
const PageLinks = ({
  parentClass,
  itemClass,
  setIsLoginOpen,
  isDropDown,
  setIsDropDown,user

}) => {
  
  const handleClick = () => {
    if (user === null) {
      setIsLoginOpen(true);
    } else {
      //console.log("Dropdown toggle:", !isDropDown);
      setIsDropDown(!isDropDown);
    }
  };

  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
      <li >
        <Link to="#" className={itemClass} onClick={handleClick}>
          {user === null ? "Login" : user.userName}
        </Link>
   
      </li>
    </ul>
  );
};
export default PageLinks;