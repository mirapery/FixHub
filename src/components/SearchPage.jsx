import { useEffect, useState } from "react";

import { Link, useParams, useSearchParams } from "react-router-dom";
import Searchbar from "./Searchbar.jsx";
import ResultArea from "./ResultArea.jsx";
import { dummyItems } from "../data.js";
const SearchPage = () => {
  const [searchParams] = useSearchParams(); // Hakee query-parametrit

  const query = searchParams.get("q") || ""; // Lukee "query"-parametrin
 // const tag = searchParams.get("tag")|| "";
  const [items, setItems] = useState(dummyItems);
  const [itemCount, setItemCount] = useState("");

  //Function gets item from inventory
  const handleSearch = (searchTerm) => { // , tag
    if (!searchTerm) {
      console.warn("Search term is empty");
      return [];
    }
    if (searchTerm) {
      const results = [...dummyItems].filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.tags &&
            item.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase())
            ))
      );

      setItems(results);
      setItemCount(results.length);
    } else {
      setItems(dummyItems);
      setItemCount("");
    }
  };

  useEffect(() => {
    handleSearch(query);//,tag
  }, [query]); //,tag

  return (
    <div className="mt-20 ">
      <Searchbar />
      <ResultArea itemCount={itemCount} items={items} />
    </div>
  );
};
export default SearchPage;
