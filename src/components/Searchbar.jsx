import vehicle from "../assets/images/vehicles.png";
import clothes from "../assets/images/clothes.png";
import furnitures from "../assets/images/furnitures.png";
import electronics from "../assets/images/electronics.png";
import guitar from "../assets/images/guitar.png";
import sports from "../assets/images/sports.png";

import CategoryItem from "./CategoryItem";
import { categoryLinks } from "../data";
import { Link } from "react-router-dom";
const Searchbar = () => {
  return (
    <div className="flex justify-center m-4">
      <div className="w-2/3">
        <form
          onSubmit={<Link to="searhPage" />}
          className=" flex border-gray-900 rounded border-2"
        >
          <input
            className="w-full p-4  focus:outline-none"
            type="text"
            placeholder="Search item"
          />
          <button className="bg-white">
            <i className=" mr-3 fa-solid fa-magnifying-glass scale-150"></i>
          </button>
        </form>
          <ul className="flex mt-4 lg:gap-8 flex-wrap justify-center  ">
          {categoryLinks.map((item, index) => {
            return <CategoryItem item={item} key={index} />;
          })}
          </ul>
      </div>
    </div>
  );
};

export default Searchbar;
