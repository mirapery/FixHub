import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";

import Searchbar from "../components/Searchbar.jsx";

import ItemCard from "../components/ItemCard.jsx";
// import { dummyUsers, dummyItems } from "../assets/data.js";
import CardArea from "../components/CardArea.jsx";

function Home() {
  
  //testingiin
  // const dummyItemList = [
  //   dummyItems[0],
  //   dummyItems[0],
  //   dummyItems[0],
  //   dummyItems[0],
  //   dummyItems[0],
  //   dummyItems[0],
  //   dummyItems[0],
  //   dummyItems[0],
  // ];

  // const dummyUserList = [
  //   dummyUsers[0],
  //   dummyUsers[0],
  //   dummyUsers[0],
  //   dummyUsers[0],
  //   dummyUsers[0],
  //   dummyUsers[0],
  //   dummyUsers[0],
  // ];
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fecth users");
        }
        console.log(response);
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) { console.error(error); }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/items");
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchItems();
  }, []);

  return (
    <>
      <Hero />
      <Searchbar />
      <div className="transform scale-90 md:mx-48">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-fh_dgreen m-3">
            Featured items:
          </h1>
          <CardArea itemsList={items} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-center text-fh_dgreen m-3">
            Featured Fixers:
          </h1>
          <CardArea itemsList={users.filter(user => user.isFixer)} />
        </div>
      </div>
    </>
  );
}

export default Home;