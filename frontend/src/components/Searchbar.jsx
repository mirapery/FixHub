import CategoryItem from "./CategoryItem";
import { categoryLinks } from "../assets/data";
import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`); // Päivittää URL:n query-parametrilla
    onSearch(searchTerm); // Suorittaa haun
  };
  return (
    <div className="flex justify-center m-4">
      <div className="w-2/3">
        <form
          onSubmit={handleSubmit}
          className=" flex border-gray-900 rounded border-2"
        >
          <input
            className="w-full p-4  focus:outline-none"
            type="text"
            required
            placeholder="Search item"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-white">
            <i className=" mr-3 fa-solid fa-magnifying-glass scale-150"></i>
          </button>
        </form>
        <ul className="flex mt-8 lg:gap-8 flex-wrap justify-center  ">
          {categoryLinks.map((item, index) => {
            return <CategoryItem item={item} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Searchbar;
