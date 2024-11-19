import React from "react";
import ItemFull from "./ItemFull";
import CardArea from "./CardArea.jsx";
import { dummyItem } from "../data.js";
import { useParams } from "react-router-dom";


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
  const { itemId } = useParams(); // Get itemId from URL
  const item = dummyItemList.find((i) => i.itemId === itemId); // Find item by id

  if (!item) {
    return (
      <div className="bg-fh_white">
        <div className="p-4">
          <p className="text-fh_black text-2xl">
            Item not found
          </p>
        </div>
      </div>
    );
  }

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
