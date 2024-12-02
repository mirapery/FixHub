import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewItem from "./NewItem";
import { useNavigate } from "react-router-dom";

import { dummyUsers } from "../data";
import MessageWindow from "./MessageWindow";

const ItemFull = ({ itemData, isAuthenticated }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();

    const itemOwner = dummyUsers.find((u) => u.userId === itemData.userId);
    let user = null;
    let owner = false;
    let fixer = false;

    if (isAuthenticated) {
        user = dummyUsers.find((u) => u.userName === sessionStorage.getItem("userName"));

        //check status of logged in user
        owner = user.userId === itemData.userId;
        console.log('Item owner: ' + owner);
        fixer = user.userId === itemData.fixerId;
        console.log('Item fixer: ' + fixer);
    }

    // new item modaalin jutut
    const [isNewItemOpen, setNewItemOpen] = useState(false)

    const openNewItem = () => {
        setNewItemOpen(true);
    }
    const closeNewItem = () => {
        setNewItemOpen(false);
    }

    const [isMessageWindowOpen, setMessageWindowOpen] = useState(false)

    const openMessageWindow = () => {
        setMessageWindowOpen(true);
    }
    const closeMessageWindow = () => {
        setMessageWindowOpen(false);
    }

    // estää taustan scrollaamisen kun new item on auki
    useEffect(() => {
        if (isNewItemOpen || isMessageWindowOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isNewItemOpen, isMessageWindowOpen]);

    const sendMessage = () => {
        openMessageWindow();
        console.log("Message sent");
    }

    const completeFix = () => {
        // tässä pitäisi laittaa itemin status "fixed"
        // ja lähettää userille ilmoitus
        console.log("Fix completed");
    }
    return (
        <div className="bg-fh_beige flex align-middle rounded-md items-center flex-col justify-center min-h-screen w-full">
            <NewItem // editti-ikkuna
                isOpen={isNewItemOpen}
                closeNewItem={closeNewItem}
                itemData={itemData}
            />

            <MessageWindow // viestin lähetysikkuna
                isOpen={isMessageWindowOpen}
                closeMessageWindow={closeMessageWindow}
                itemData={itemData}
                user={user}
                owner={itemOwner}
            />

            <div className="my-2 ">
                <h1 className="text-fh_black font-bold font-serif text-6xl my-2">
                    {itemData.name}
                </h1>
                <p className='flex align-middle justify-center font-bold text-fh_black items-center'>
                    {itemData.category}
                </p>
            </div>
            <div className="flex align-middle flex-col md:flex-row justify-center">
                <div className="flex flex-col items-center my-6">
                    <div className="min-h-80 align-middle">
                        <img
                            src={"/src/assets/images/" + itemData.images[currentImage]}
                            alt={itemData.name}
                            className='w-80 h-auto m-4 rounded-md'
                        />
                    </div>
                    <div className="flex m-2">
                        {itemData.images.map((image, index) => {
                            if (index === 0) {
                                return;
                            }
                            return <img
                                key={index}
                                src={"/src/assets/images/" + image}
                                alt={itemData.name + ' ' + index + '-pic-' + 1}
                                onClick={() => setCurrentImage(index)}
                                className='w-32 h-auto hover:brightness-75 hover:cursor-pointer transition duration-300 rounded-md m-2'
                            />
                        })}
                    </div>
                </div>
                <div className="flex flex-col m-8 items-center justify-evenly">
                    <div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Description:
                            </h3>
                            <div className="my-2 text-fh_black min-h-20">
                                {itemData.description}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Offer for fixing:
                            </h3>
                            <div className="my-2 text-fh_black text-lg">
                                {(String(itemData.priceRange[0]) + " - " + String(itemData.priceRange[1]) + " €")}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Location:
                            </h3>
                            <div className="flex flex-row my-2 text-fh_black text-lg">
                                <i className="fa-solid fa-location-dot mr-2" />
                                <div className="mr-2">
                                    {itemData.location.province},
                                </div>
                                <div className="mr-2">
                                    {itemData.location.city},
                                </div>
                                <div>
                                    {itemData.location.postalcode}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Tags:
                            </h3>
                            <ul className="m-1 w-full flex flex-wrap">
                                {itemData.tags.map((tag, index) => (
                                    <li key={index}
                                        className="m-1  flex flew-row border border-fh_black bg-fh_white rounded-md p-1 hover:bg-fh_white-dark cursor-pointer hover:scale-105"
                                        onClick={() => navigate(`/search?tag=${tag}`)}
                                    >
                                        <div className="my-1 mx-2 text-lg text-fh_dgreen font-bold">
                                            {tag}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Owner:
                            </h3>
                            <div className="my-2 text-fh_dgreen text-lg underline">
                                <Link
                                    to={`/user/${itemOwner.userName}`}
                                    className="flex flex-row items-center"
                                >
                                    <img
                                        src={itemOwner.image ? `/src/assets/images/${itemOwner.image}` : `/src/assets/images/userPlaceholder.jpg`}
                                        alt="profile picture"
                                        className="rounded-full w-10 h-auto m-2 shadow"
                                    />

                                    <p className="my-2 text-fh_dgreen text-lg ">
                                        {itemOwner.userName}
                                    </p>

                                </Link> {/* Create link to user's page */}
                            </div>
                            {owner &&
                                <button
                                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                                    onClick={openNewItem}
                                >
                                    Edit item
                                </button>
                            }
                            {fixer &&
                                <button
                                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                                    onClick={completeFix}
                                >
                                    Mark as complete
                                </button>

                            }
                            {(!owner && !fixer && !itemData.isFixed ) && // tähän tarvii viel varmistuksen et on kirjautunu sisään
                                <button
                                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                                    onClick={sendMessage}
                                >
                                    Message item owner
                                </button>
                            }
                            {itemData.isFixed &&
                                <div className="p-4 rounded-lg  my-4">
                                    <h3 className="text-fh_dgreen text-3xl font-bold">
                                        Fixed!
                                    </h3>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemFull;