import React from "react";
import Hero from "./Hero";
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
            <CardArea itemsList={dummyItemList} />
            {/* <ItemCard itemData={dummyItem[0]}/> */}
            <div>This is Home</div>
        </>
    );
}

export default Home;
