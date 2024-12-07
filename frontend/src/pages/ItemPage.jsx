import React, { useState, useEffect } from "react";
import ItemFull from "../components/ItemFull.jsx";
import CardArea from "../components/CardArea.jsx";
import { useParams } from "react-router-dom";
//import { dummyItems } from "../assets/data.js";

// mockdata
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
  // const item = dummyItems.find((i) => i.itemId === itemId); // Find item by id
  const { itemId } = useParams(); // Get itemId from URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/api/items/${itemId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch item data");
        }
        const itemData = await response.json();
        setItem(itemData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [itemId]);

  if (loading) {
    return (
      <div className="bg-fh_white">
        <div className="p-4">
          <p className="text-fh_black text-2xl">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-fh_white">
        <div className="p-4">
          <p className="text-fh_black text-2xl">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="bg-fh_white">
        <div className="p-4">
          <p className="text-fh_black text-2xl">
            Item not found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center align-middle bg-fh_white">
      <div className="p-4 w-full">
        <ItemFull itemData={item} />
      </div>
      <div className=" flex items-center justify-center m-2">
        <h2 className="font-bold text-3xl text-fh_black font-serif text-center">
          Similar Items:
        </h2>
      </div>
      <div className="flex justify-center w-11/12">
        <CardArea items={[]} /> {/* Tähän logiikkaa jolla haetaan samankaltaisia tuotteita. Nyt hakee kaiken. */}
      </div>
    </div>
  );
};

export default ItemPage;
