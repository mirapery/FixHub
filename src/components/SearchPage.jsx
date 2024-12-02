import { useEffect, useState } from "react";

import { Link, useParams, useSearchParams } from "react-router-dom";
import Searchbar from "./Searchbar.jsx";
import ResultArea from "./ResultArea.jsx";
import { dummyItems } from "../data.js";
const SearchPage = () => {
  const [searchParams] = useSearchParams(); // Hakee query-parametrit

  const query = searchParams.get("query") || ""; // Lukee "query"-parametrin

  const [items, setItems] = useState(dummyItems);
  const [itemCount, setItemCount] = useState("");

  //Function gets item from inventory
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const results = [...dummyItems].filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setItems(results);
      setItemCount(results.length);
    } else {
      setItems(dummyItems);
      setItemCount("");
    }
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <div className="mt-20 ">
      <Searchbar />
      <ResultArea itemCount={itemCount} items={items} />
    </div>
  );
};
export default SearchPage;
