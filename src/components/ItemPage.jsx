import React, { useEffect, useState } from "react";
import ItemFull from "./ItemFull";
import CardArea from "./CardArea.jsx";
import { dummyItems } from "../data.js";
import { useParams } from "react-router-dom";
import { set } from "mongoose";


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

const isAuthenticated = false; // tähän tarvii logiikkaa

const ItemPage = () => {
  const { itemId } = useParams(); // Get itemId from URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const item = dummyItems.find((i) => i.itemId === itemId); // dummydata tai fetch

  // search item based on url id
  useEffect(() => {
    const fetchItem = async () => {
      const apiUrl = '/api/items/' + itemId;
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const itemData = await response.json();
          console.log(itemData);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchItem();
  }, []);

  useEffect(() => {
    const fetchitems = async () => {
      const apiUrl = '/api/items';
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const itemsData = await response.json();
          console.log(itemsData);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      }
    }

    fetchitems();
  }, []);


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

  return (
    <div className="flex flex-col justify-center items-center align-middle bg-fh_white">
      <div className="p-4 w-full">
        <ItemFull
          itemData={item}
          isAuthenticated={isAuthenticated}
        />
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
