import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import EditItem from "./EditItem";
import { useNavigate } from "react-router-dom";
import OfferWindow from "./OfferWindow";
import AuthContext from "./AuthContext";
//Itempage:sta
const ItemFull = ({ itemData }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // backend version
    const { isAuthenticated, } = useContext(AuthContext);
 
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    const loggedInUserName = storedUser ? storedUser.userName : null;

    // Käyttäjän tietojen hakeminen backendistä
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/users/userId/${itemData.userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const userData = await response.json();
                console.log("User data fetched:", userData);
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUser();
    }, [itemData.userId]);

    //check status of logged in user
    const owner = user && user.userName === loggedInUserName;
    const fixer = storedUser && storedUser._id === itemData.fixerId;


    // edit item modaalin jutut
    const [isEditItemOpen, setEditItemOpen] = useState(false)

    const openEditItem = () => {
        setEditItemOpen(true);
    }
    const closeEditItem = () => {
        setEditItemOpen(false);
        navigate(`/item/${itemData._id}`);
        window.location.reload();
    }

    // offer window
    const [isOfferWindowOpen, setOfferWindowOpen] = useState(false)

    const openOfferWindow = () => {
        setOfferWindowOpen(true);
    }
    const closeOfferWindow = () => {
        setOfferWindowOpen(false);
    }

    // estää taustan scrollaamisen kun new item on auki
    useEffect(() => {
        if (isEditItemOpen || isOfferWindowOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isEditItemOpen, isOfferWindowOpen]);




    // muokattu backend-yhteensopivaksi - kesken
    const sendOffer = () => {
        console.log("Offer window opened");
        openOfferWindow();
    };

    // lisää itemille fixerId:n, eli on työn alla sillä fikserillä
    const startFixing = async () => {
        try {
            const token = JSON.parse(sessionStorage.getItem("token"));

            const formData = new FormData();
            formData.append("fixerId", storedUser._id);

            const response = await fetch(`/api/items/${itemData._id}`, {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + token,
                    },
                body: formData,

            });
            if (!response.ok) {
                throw new Error("Failed to start fixing");
            }
            const updatedItem = await response.json();
            console.log("Fixing started:", updatedItem);
            alert("You have started fixing this item!");
            window.location.reload();
        } catch (error) {
            console.error("Error starting fixing:", error);
        }
    };

    // asettaa isFixed = true
    const completeFix = async () => {
        try {
            const token = JSON.parse(sessionStorage.getItem("token"));

            const formData = new FormData();
            formData.append("isFixed", true);

            const response = await fetch(`/api/items/${itemData._id}`, {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + token,
                    },
                body: formData,
            });
            if (!response.ok) {
                throw new Error("Failed to mark item as fixed");
            }
            const updatedItem = await response.json();
            console.log("Item marked as fixed:", updatedItem);
            window.location.reload();
        } catch (error) {
            console.error("Error marking item as fixed:", error);
        }
    };

    return (
        <div className="bg-fh_beige flex align-middle rounded-md items-center flex-col justify-center min-h-screen w-full">
            <EditItem // itemin editti-ikkuna
                isOpen={isEditItemOpen}
                closeEditItem={closeEditItem}
                itemData={itemData}
            />

            <OfferWindow // viestin lähetysikkuna
                isOpen={isOfferWindowOpen}
                closeOfferWindow={closeOfferWindow}
                itemData={itemData}
                user={user}
                owner={owner}
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
                            src={itemData.images.length > 0 ? `http://localhost:5173/api/items/${itemData._id}/image/` + currentImage  : "/src/assets/images/itemPlaceholder.jpg"} 
                            alt={itemData.name}
                            className='w-80 h-auto m-4 rounded-md'
                        />
                    </div>
                    <div className="flex m-2">
                        {itemData.images.map((image, index) => {
                            if (index === currentImage) {
                                return;
                            }
                            return <img
                                key={index}
                                src={`http://localhost:5173/api/items/${itemData._id}/image/` + index} 
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
                                        onClick={() => navigate(`/search?q=${tag}`)}
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
                            {user && (
                            <div className="my-2 text-fh_dgreen text-lg underline">

                                {/* käyttäjän profiilikuva ja nimi, linkki userisivulle */}
                                {user && <Link
                                    to={`/user/${user.userName}`}
                                    className="flex flex-row items-center"
                                >
                                    <img
                                        src={user.image ?  `http://localhost:5173/api/users/${user._id}/image/0`: `/src/assets/images/userPlaceholder.jpg`} // tähän odotta koodia eetulta
                                        alt="profile picture"
                                        className="rounded-full w-10 h-auto m-2 shadow"
                                    />
                                    <p className="my-2 text-fh_dgreen text-lg ">
                                        {user.userName}
                                    </p>
                                </Link> }
                                
                            </div>
                            )}

                            {/* nappiosio */}
                            <div className="flex flex-col">

                                {/* oma itemi, ei fiksattu */}
                            {(owner  && !itemData.isFixed) &&
                                <button
                                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                                    onClick={openEditItem}
                                >
                                    Edit item
                                </button>
                            }

                            {(owner && itemData.fixerId) &&
                                <button
                                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                                    onClick={completeFix}
                                >
                                    Mark as complete
                                </button>
                            }

                            {/* kirjautunut käyttäjä, ei fixeri, itemiä ei fiksattu */}
                            {(!owner && !fixer && !itemData.isFixed && isAuthenticated) &&
                                <button
                                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                                    onClick={sendOffer}
                                >
                                    Message item owner
                                </button>
                            }

                            {/* kirjautunut käyttäjä, on fixeri, itemiä ei fiksattu, itemi ei fiksauksessa */}
                            {(storedUser?.isFixer && !owner && !itemData.isFixed && isAuthenticated && !itemData.fixerId) && 
                                <button
                                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                                    onClick={startFixing}
                                >
                                    Start Fixing!
                                </button>
                            }

                            {/* itemi fiksattu */}
                            {itemData.isFixed &&
                                <div className="p-4 rounded-lg  my-4">
                                    <h3 className="text-fh_dgreen text-3xl font-bold">
                                        Fixed!
                                    </h3>
                                </div>
                            }

                            {/* itemi on fiksauksessa */}
                            {(!itemData.isFixed && itemData.fixerId) &&
                                <div className="p-4 rounded-lg  my-4">
                                    <h3 className="text-fh_dgreen text-3xl font-bold">
                                        Item is being fixed.
                                    </h3>
                                </div>
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemFull;