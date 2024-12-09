import { useEffect, useState } from "react";

import { Link, useParams, useSearchParams } from "react-router-dom";
import Searchbar from "../components/Searchbar.jsx";
import ResultArea from "../components/ResultArea.jsx";
//import { dummyItems } from "../assets/data.js";

const SearchPage = () => {
  const [searchParams] = useSearchParams(); // Hakee query-parametrit

  const query = searchParams.get("q") || ""; // Lukee "query"-parametrin
  // const tag = searchParams.get("tag")|| "";
  //const [items, setItems] = useState(dummyItems);
  const [items, setItems] = useState([]);
  const [itemCount, setItemCount] = useState("");

  //Function gets item from inventory
  const handleSearch = async (searchTerm) => { // , tag
    if (!searchTerm) {
      console.warn("Search term is empty");
      return [];
    }

    if (searchTerm) {

      const response = await fetch(`/api/items`);
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const allItems = await response.json();

      const results = allItems.filter(
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
      setItems([]);
      setItemCount(0);
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
