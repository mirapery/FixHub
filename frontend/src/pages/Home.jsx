import React from "react";
import Hero from "../components/Hero.jsx";

import Searchbar from "../components/Searchbar.jsx";

import ItemCard from "../components/ItemCard.jsx";
import { dummyUsers, dummyItems } from "../assets/data.js";
import CardArea from "../components/CardArea.jsx";

function Home() {
  //testingiin
  const dummyItemList = [
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
    dummyItems[0],
  ];z

  const dummyUserList = [
    dummyUsers[0],
    dummyUsers[0],
    dummyUsers[0],
    dummyUsers[0],
    dummyUsers[0],
    dummyUsers[0],
    dummyUsers[0],
  ];

  return (
    <>
      <Hero />
      <Searchbar />
      <div className="transform scale-90 md:mx-48">
        <h1 className="text-4xl font-bold text-center text-fh_dgreen m-3">
          Featured items:
        </h1>
        <CardArea itemsList={dummyItems} />
        <h1 className="text-4xl font-bold text-center text-fh_dgreen m-3">
          Featured Fixers:
        </h1>
        <CardArea itemsList={dummyUsers.filter(user => user.isFixer)} />
      </div>
    </>
  );
}

export default Home;
