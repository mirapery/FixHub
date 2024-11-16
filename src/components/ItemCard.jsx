import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ itemData }) => {
    return (
        <Link to={"/item/" + itemData.id} className="flex flex-none flex-col m-4 p-4 items-center rounded-md bg-fh_beige min-w-120 active:scale-95 hover:brightness-75 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300">
            <img
                src={"/src/assets/images/" + itemData.images[0]}
                alt={itemData.name}
                className='w-full h-auto object-cover m-4 rounded-md'
            />
            <h2 className="text-fh_black font-serif font-bold text-2xl m-2">
                {itemData.name}
            </h2>
            <p className="text-fh_black m-1">
                {itemData.priceRange}
            </p >
            <p className="text-fh_black m-1">
                {itemData.location}
            </p>

        </Link>
    )
}

export default ItemCard;