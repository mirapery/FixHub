import { useState, useRef } from "react";
import { pageLinks } from "../assets/data";
import PageLink from "./PageLink";
import { Link } from "react-router-dom";
import DrobDown from "./DrobDown";

const PageLinks = ({
  parentClass,
  itemClass,
  openLoginModal,
  user,
  isAuthenticated,
  logOut,isDrobDown,setIsDrobDown,openNewItem
}) => {


  const handleClick = () => {
    if(user===null) {
      openLoginModal();
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
          {user === null ? "login" : user.userName}
        </Link>
        {isDrobDown && (
          <DrobDown user={user} logOut={logOut} openNewItem={openNewItem}/>
        )}
      </li>
    </ul>
  );
};
export default PageLinks;
