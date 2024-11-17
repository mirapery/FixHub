import { Link } from "react-router-dom"
const CategoryItem = ({ item }) => {


  return (
    <li className="flex w-12 h-auto flex-col items-center mx-6 hover:opacity-50">
      <Link to={item.href}>
        <i className={item.icon}></i>
      </Link>
      <p className="text-center   mt-2">{item.text}</p>
    </li>
  );
};

export default CategoryItem;
