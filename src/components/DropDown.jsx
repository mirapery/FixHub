import { Link } from "react-router-dom";

const DropDown = ({ openNewItem, logOut, user }) => {
  return (
    <div className="absolute top-11 right-0 mt-2 w-48 bg-fh_white shadow-lg rounded-sm z-50 ">
      <ul className="p-2">
        <Link to={`user/${user.userName}`}>
          <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            Profiili
          </li>
        </Link>
        <li
          onClick={openNewItem}
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
