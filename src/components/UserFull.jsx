import React from "react";
import { useState } from "react";
import ReviewArea from "./ReviewArea";
import CardArea from "./CardArea";
import { dummyItem, dummyReview } from "../data";

const UserFull = ({ userData }) => {

    const [activeTab, setActiveTab] = useState(0);

    const tabs = []
    const tabContent = []

    if (userData.isFixer) {
        tabs.push("Reviews", "Fixed items")
        tabContent.push(
            <ReviewArea reviews={dummyReview} />,
            <CardArea itemsList={dummyItem} />)
    } else if (true) { //tähän siis kysely et onko itemeitä userin id:llä, sit vois olla pelkkä if ni saa fixerisivulle kans
        tabs.push("Items")
        tabContent.push(
            <CardArea itemsList={dummyItem} />)
    }


    const imagePath = userData.image ? `/src/assets/images/${userData.image}` : `/src/assets/images/userPlaceholder.jpg`;

    if (userData.isFixer) {
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
                                src={imagePath}
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
                <div className="w-3/4 mx-auto mt-10">
                    {/* Tab Headers */}
                    <div className="flex border-b max-w-md">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 py-2 text-center ${activeTab === index
                                    ? "border-b-2 border-fh_dgreen text-fh_dgreen"
                                    : "text-fh_black hover:text-fh_black-light"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-4 ">
                        <div>{tabContent[activeTab]}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="bg-fh_beige flex align-middle rounded-md items-center flex-col justify-center min-h-screen w-full">

                <div className="flex align-middle flex-col md:flex-row w-screen justify-center">
                    <div className="flex flex-col items-center my-6">
                        <div className="min-h-80 align-middle">
                            <img
                                src={imagePath}
                                alt={userData.userName}
                                className='w-80 h-auto m-4 rounded-full'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col m-8 items-center justify-evenly">
                        <div>
                            <div>
                                <h3 className="text-fh_black font-bold font-sans text-md my-2">
                                    {userData.userName}
                                </h3>
                            </div>
                            <div className="flex flex-row my-2 text-fh_black text-lg">
                                <i className="fa-solid fa-location-dot mr-2" />
                                <p>
                                    {userData.location}
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
                <div className="w-3/4 mx-auto mt-10">
                    <div className="flex border-b max-w-md">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 py-2 text-center ${activeTab === index
                                    ? "border-b-2 border-fh_dgreen text-fh_dgreen"
                                    : "text-fh_black hover:text-fh_black-light"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-4 ">
                        <div>{tabContent[activeTab]}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserFull;