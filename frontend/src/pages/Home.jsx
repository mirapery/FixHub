import React from "react";
import Hero from "../components/Hero.jsx";
import Searchbar from "../components/Searchbar.jsx";
import ItemCard from "../components/ItemCard.jsx";
//import { dummyUsers, dummyItems } from "../assets/data.js";
import CardArea from "../components/CardArea.jsx";

function Home() {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const itemsResponse = await fetch("/api/items");
        const usersResponse = await fetch("/api/users");
        
        if (!itemsResponse.ok || !usersResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const itemsData = await itemsResponse.json();
        const usersData = await usersResponse.json();

        setItems(itemsData);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Hero />
      <Searchbar />
      <div className="transform scale-90 md:mx-48">
        <h1 className="text-4xl font-bold text-center text-fh_dgreen m-3">
          Featured items:
        </h1>
        <CardArea itemsList={items} />
        <h1 className="text-4xl font-bold text-center text-fh_dgreen m-3">
          Featured Fixers:
        </h1>
        <CardArea itemsList={users.filter(user => user.isFixer)} />
      </div>
    </>
  );
}

export default Home;
