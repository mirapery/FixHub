import { useEffect, useState } from "react";

import { Link, useParams, useSearchParams } from "react-router-dom";
import Searchbar from "./Searchbar.jsx";
import ResultArea from "./ResultArea.jsx";

import { dummyItems } from "../data.js";
// import { inventory } from "../data.js";
const SearchPage = () => {
  const defaultItems = [
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
  ];
  const [searchParams] = useSearchParams(); // Hakee query-parametrit

  const query = searchParams.get("query") || ""; // Lukee "query"-parametrin

  const [items, setItems] = useState(defaultItems);
  const [itemCount, setItemCount] = useState("");

  //Function gets item from inventory
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const results = [...inventory].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setItems(results);
      setItemCount(results.length);
    } else {
      setItems(defaultItems);
      setItemCount("");
    }
  };

useEffect(()=>{
  handleSearch(query);
},[query])

  return (
    <div className="mt-20 ">
      <Searchbar onSearch={handleSearch} />
      <ResultArea itemCount={itemCount} items={items} />
    </div>
  );
};
export default SearchPage;
