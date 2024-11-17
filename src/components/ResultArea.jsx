import React from "react";
import ItemCard from "./ItemCard";

import Sort from "../components/Sort";

const resultArea = ({ items }) => {
  return (
    <div className="mx-64">
      <Sort />

      <div className="grid grid-cols-3 gap-4 justify-items-center">
        {items.map((item, index) => {
          return <ItemCard itemData={item} key={index} />;
        })}
        ;
      </div>
    </div>
  );
};
export default resultArea;
