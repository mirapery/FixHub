import React, { useEffect, useState } from "react";
import Hero from "../components/Hero.jsx";
import Searchbar from "../components/Searchbar.jsx";
import ItemCard from "../components/ItemCard.jsx";
import CardArea from "../components/CardArea.jsx";

function Home() {
  
  const [items, setItems] = useState([]);
  const [fixers, setFixers] = useState([]);

  useEffect(() => {
    const fetchFixers = async () => {
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
        const users = await response.json();
        console.log(users);


        // Suodata fixerit

        const fixers = users.filter(
          (user) =>
            user.isFixer === true
        );

        setFixers(fixers);
      } catch (error) { console.error(error); }
    }
    fetchFixers();
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
          <CardArea itemsList={fixers} />
        </div>
      </div>
    </>
  );
}

export default Home;