import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ itemData }) => {
    let formattedTags;

    if ("tags" in itemData) {
        formattedTags = itemData.tags
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
            .join(", ");
    }

    const itemLink = () => {
        if (itemData.isFixer) {
            return "/user/" + itemData.userName
        } else {
            return "/item/" + itemData.id
        }
    }

    return (
        <Link to={itemLink()} className="flex flex-none flex-col m-4 p-4 items-center rounded-md bg-fh_beige min-w-120 active:scale-95 hover:brightness-75 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300">
            <img
                src={"/src/assets/images/" + (itemData.images?.[0] || itemData.image)}
                alt={itemData.name}
                className="w-32 h-32 object-cover m-4 rounded-md"
            />
            <h2 className="text-fh_black font-serif font-bold text-2xl m-2">
                {itemData.name}
            </h2>
            <p className="text-fh_black m-1">
                {itemData.priceRange || formattedTags}
            </p >
            <div className="flex flex-row my-2 text-fh_black text-lg">
                <i className="fa-solid fa-location-dot mr-2" />
                <p>
                    {itemData.location}
                </p>
            </div>

        </Link>
    )
}

export default ItemCard;