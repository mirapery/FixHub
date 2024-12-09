import React from "react";
import ItemFull from "../components/ItemFull.jsx";
import CardArea from "../components/CardArea.jsx";
// import { dummyItems } from "../assets/data.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//tähän sit logiikka miten saadaan tietyn esineen data databasesta ajettua tohon. Nyt mennään mockidatalla

//testingiin
// const dummyItemsList = [
//   dummyItems[0],
//   dummyItems[0],
//   dummyItems[0],
//   dummyItems[0],
//   dummyItems[0],
//   dummyItems[0],
//   dummyItems[0],
//   dummyItems[0],
// ];

const ItemPage = () => {
  const { itemId } = useParams(); // Get itemId from URL
  const [itemData, setItemData] = useState(null);
  const [similar, setSimilar] = useState([]);
  // const item = dummyItems.find((i) => i.itemId === itemId); // Find item by id

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await fetch(`/api/items/${itemId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fecth item");
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        setItemData(data);
      } catch (error) { console.error(error); }
    }
    fetchItemData();
  }, []);

  // täs ei oo mitään filtteriä viel
  useEffect(() => {
    const fetchSimilarItems = async () => {
      try {
        const response = await fetch(`/api/items/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fecth similar items");
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        setSimilar(data);
      } catch (error) { console.error(error); }
    }
    fetchSimilarItems();
  }, []);

  if (!itemData) {
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
      <div className="p-4 w-full">
        <ItemFull
          itemData={itemData}
        />
      </div>
      <div className=" flex items-center justify-center m-2">
        <h2 className="font-bold text-3xl text-fh_black font-serif text-center">
          Similar Items:
        </h2>
      </div>
      <div className="flex justify-center w-11/12">
        <CardArea itemsList={similar} />
      </div>
    </div>
  );
};

export default ItemPage;