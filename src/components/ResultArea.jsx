
import ItemCard from "./ItemCard";

import Sort from "../components/Sort";

const resultArea = ({ items,itemName }) => {
  return (
    <div className="2xl:mx-96 xl:mx-80 lg:mx-32 md:mx-32 grid grid-cols-1">
      <div><h1 className="text-2xl font-bold ml-4">{itemName}</h1></div>
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
