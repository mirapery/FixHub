import React from "react";
import { useState } from "react";

const UserFull = ({ userData }) => {

    const formattedTags = userData.tags
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(", ");

    return (
        <div className="bg-fh_beige flex align-middle rounded-md items-center flex-col justify-center min-h-screen w-full">
            <div className="my-2">
                <h1 className="text-fh_black font-bold font-serif text-6xl my-2">
                    {userData.name}
                </h1>
            </div>
            <div className="flex align-middle flex-col md:flex-row w-screen justify-center">
                <div className="flex flex-col items-center my-6">
                    <div className="min-h-80 align-middle">
                        <img
                            src={"/src/assets/images/" + userData.image}
                            alt={userData.name}
                            className='w-80 h-auto m-4 rounded-full'
                        />
                    </div>
                </div>
                <div className="flex flex-col m-8 items-center justify-evenly">
                    <div>
                        <p className='font-bold text-fh_black'>
                            {formattedTags}
                        </p>
                        <div className="flex flex-row my-2 text-fh_black text-lg">
                            <i className="fa-solid fa-location-dot mr-2" />
                            <p>
                                {userData.location}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-md my-2">
                                About me:
                            </h3>
                            <p className="my-2 text-fh_black min-h-10">
                                {userData.about}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-md my-2">
                                Member since:
                            </h3>
                            <p className="my-2 text-fh_black">
                                {userData.creationTime}
                            </p>
                        </div>
                        <div>
                            <button className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4">
                                Send Message
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-fh_dgreen my-2" />
            <div>
                tähän tulis sit se tabi alue
            </div>
        </div>
    )
}

export default UserFull;