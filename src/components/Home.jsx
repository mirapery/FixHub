import React from "react";
import Hero from "./Hero";
import ItemCard from "./ItemCard";
import { dummyFixer, dummyItem } from "../data.js"
import CardArea from "./CardArea.jsx";


function Home() {

    //testingiin
    const dummyItemList = [
        dummyItem[0],
        dummyItem[0],
        dummyItem[0],
        dummyItem[0],
        dummyItem[0],
        dummyItem[0],
        dummyItem[0],
        dummyItem[0]
    ]

    const dummyUserList = [
        dummyFixer[0],
        dummyFixer[0],
        dummyFixer[0],
        dummyFixer[0],
        dummyFixer[0],
        dummyFixer[0],
        dummyFixer[0],
    ]

    return (
        <>
            <Hero />
            <CardArea itemsList={dummyItemList} />
            <CardArea itemsList={dummyUserList} />
            <div>This is Home</div>
        </>
    );
}

export default Home;
