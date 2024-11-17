import React from "react";
import ItemCard from "./ItemCard";

import Sort from "../components/Sort";

const resultArea = ({ items }) => {
  return (
    <div className="2xl:mx-96 xl:mx-80 lg:mx-32 md:mx-32 grid grid-cols-1">
      <Sort />

<div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
        {items.map((item, index) => {
          return <ItemCard itemData={item} key={index} />;
        })}
        ;
      </div>
    </div>
  );
};
export default resultArea;
