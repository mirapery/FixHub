import { useNavigate } from "react-router-dom";
const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search?q=${item.href}`);
  };
  return (
    <li
      onClick={handleClick}
      className="flex w-12 h-auto flex-col items-center mx-6 hover:opacity-50"
    >
      <i className={item.icon}></i>

      <p className="text-center   mt-2">{item.text}</p>
    </li>
  );
};

export default CategoryItem;