import React from "react";
import { Link } from "react-router-dom";

// tätä ei visiin enää tarvita mihinkään

const UserCard = ({ userData }) => {

    const formattedTags = userData.tags
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(", ");

    return (
        <Link to={"/user/" + userData.userName} className="flex flex-none flex-col m-4 p-4 items-center rounded-md bg-fh_beige min-w-120 active:scale-95 hover:brightness-75 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300">
            <img
                src={"/src/assets/images/" + userData.image}
                alt={userData.name}
                className='w-full h-auto object-cover m-4 rounded-full'
            />
            <h2 className="text-fh_black font-serif font-bold text-2xl m-2">
                {userData.name}
            </h2>
            <p className='font-bold text-fh_black'>
                {formattedTags}
            </p>
            <div className="flex flex-row my-2 text-fh_black text-lg">
                <i className="fa-solid fa-location-dot mr-2" />
                <p>
                    {userData.location}
                </p>
            </div>
        </Link>
    )
}

export default UserCard;