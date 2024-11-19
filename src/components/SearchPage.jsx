import { useState } from "react";

import { Link,useParams } from "react-router-dom";
import Searchbar from "./Searchbar.jsx";
import ResultArea from "./ResultArea.jsx";

import { dummyItem } from "../data.js";
import { inventory } from "../data.js";
const SearchPage = () => {
  const defaultItems = [
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
  ];
  const { ItemNameURL } = useParams();
  const [Items, setItems] = useState(defaultItems);
  const [ItemName, setItemName] = useState(ItemNameURL);


  //Function gets item from inventory
  const handleSearch = (itemName) => {
    setItemName(itemName)
    const results = [...inventory].filter((item) =>
      item.name.toLowerCase().includes(itemName.toLowerCase())
    );
    setItems(results);
  };

  return (
    <div className="mt-20">
      <Searchbar onSearch={handleSearch} />
      <ResultArea itemName={ItemName} items={Items} />
    </div>
  );
};
export default SearchPage;
