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
    <>
      <Searchbar />
      <ResultArea items={dummyItemList} />
    </>
  );
};
export default SearchPage;
