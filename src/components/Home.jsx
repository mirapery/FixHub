import React from "react";
import Hero from "./Hero";


import Searchbar from "./Searchbar";

import ItemCard from "./ItemCard";
import { dummyItem } from "../data.js"
import CardArea from "./CardArea.jsx";



function Home() {

    //testingiin
    const dummyItemList = [dummyItem[0], 
    dummyItem[0], 
    dummyItem[0], 
    dummyItem[0], 
    dummyItem[0], 
    dummyItem[0], 
    dummyItem[0], 
    dummyItem[0]]

    return (
        <>
            <Hero />
            <Searchbar/>
            <CardArea itemsList={dummyItemList} />
            {/* <ItemCard itemData={dummyItem[0]}/> */}
        </>

    );
}

export default Home;
