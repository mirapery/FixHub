import ItemCard from "./ItemCard";

import Sort from "../components/Sort";

const resultArea = ({ items, itemCount }) => {
  return (
    <div className="2xl:mx-96 xl:mx-80 lg:mx-32 md:mx-32 grid grid-cols-1">
      <div className="my-3">
        {itemCount!=="" && <h1 className="text-2xl  ml-4">{itemCount} osumaa </h1>}
      </div>

      <Sort />
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
        {items.map((item, index) => {
          return <ItemCard itemData={item} key={index} />;
        })}
      
      </div>
    </div>
  );
};
export default resultArea;
