import React from "react";
import ItemFull from "./ItemFull";
import CardArea from "./CardArea.jsx";
import { dummyItem } from "../data.js";

//tähän sit logiikka miten saadaan tietyn esineen data databasesta ajettua tohon. Nyt mennään mockidatalla

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

const ItemPage = () => {
  return (
    <div className="bg-fh_white">
      <div className=" p-4">
        <ItemFull itemData={dummyItem[0]} />
      </div>
      <div className=" flex items-center justify-center m-2">
        <h2 className="font-bold text-3xl text-fh_black font-serif text-center">
          Similar Items:
        </h2>
      </div>
      <CardArea itemsList={dummyItemList} />
    </div>
  );
};

export default ItemPage;
