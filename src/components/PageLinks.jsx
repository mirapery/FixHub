import { useState, useRef } from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const PageLinks = ({
  parentClass,
  itemClass,
  openLoginModal,
  user,
  isAuthenticated,
  logOut,isDropDown,setIsDropDown,openNewItem
}) => {


  const handleClick = () => {
    if(user===null) {
      openLoginModal();
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
          <DropDown user={user} logOut={logOut} openNewItem={openNewItem}/>
        )}
      </li>
    </ul>
  );
};
export default PageLinks;
