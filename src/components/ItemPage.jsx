import React from "react";
import ItemFull from "./ItemFull";
import CardArea from "./CardArea.jsx";
import { dummyItems } from "../data.js";
import { useParams } from "react-router-dom";


//tähän sit logiikka miten saadaan tietyn esineen data databasesta ajettua tohon. Nyt mennään mockidatalla

//testingiin
const dummyItemsList = [
  dummyItems[0],
  dummyItems[0],
  dummyItems[0],
  dummyItems[0],
  dummyItems[0],
  dummyItems[0],
  dummyItems[0],
  dummyItems[0],
];

const ItemPage = () => {
  const { itemId } = useParams(); // Get itemId from URL
  const item = dummyItems.find((i) => i.itemId === itemId); // Find item by id

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
    <div className="flex flex-col justify-center items-center align-middle bg-fh_white">
      <div className=" p-4">
        <ItemFull itemData={item} />
      </div>
      <div className=" flex items-center justify-center m-2">
        <h2 className="font-bold text-3xl text-fh_black font-serif text-center">
          Similar Items:
        </h2>
      </div>
      <div className="flex justify-center w-11/12">
        <CardArea itemsList={dummyItems} />
      </div>
    </div>
  );
};

export default ItemPage;
