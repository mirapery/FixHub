import React from "react";

const ItemCard = ({ itemData }) => {
    return (
        <div className="flex flex-none flex-col m-4 p-4 items-center rounded-md bg-fh_beige min-w-120 hover:brightness-75 hover:cursor-pointer transition duration-300">
            <img
                src={"src/assets/images/" + itemData.images[0]}
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

        </div>
    )
}

export default ItemCard;