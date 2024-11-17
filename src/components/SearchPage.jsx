import { useState } from "react";

import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import ResultArea from "./ResultArea";

import { dummyItem } from "../data.js"

const SearchPage = () => {
  const dummyItemList = [
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
    dummyItem[0],
  ];

  return (
    <div className="mt-20">
      <Searchbar />
      <ResultArea items={dummyItemList} />
    </div>
  );
};
export default SearchPage;
