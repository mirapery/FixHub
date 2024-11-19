import { pageLinks } from "../data";
import PageLink from "./PageLink";
import { Link } from "react-router-dom";

const PageLinks = ({ parentClass, itemClass, openModal, loginName }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
      <li>
        <Link to="#" className={itemClass} onClick={() => openModal()}>
          {loginName}
        </Link>
      </li>
    </ul>
  );
};
export default PageLinks;
