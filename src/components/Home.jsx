import React from "react";
import Hero from "./Hero";

import Searchbar from "./Searchbar";

import ItemCard from "./ItemCard";
import { dummyFixer, dummyItem } from "../data.js";
import CardArea from "./CardArea.jsx";

function Home() {
  //testingiin
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

  const dummyUserList = [
    dummyFixer[0],
    dummyFixer[0],
    dummyFixer[0],
    dummyFixer[0],
    dummyFixer[0],
    dummyFixer[0],
    dummyFixer[0],
  ];

  return (
    <>
      <Hero />
      <Searchbar />
      <CardArea itemsList={dummyItemList} />
      <CardArea itemsList={dummyUserList} />
    </>
  );
}

export default Home;
