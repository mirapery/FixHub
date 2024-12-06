import React, { useState } from "react";
import Alert from "./Alert";

const OfferWindow = ({ isOpen, closeOfferWindow, itemData, user, owner }) => {

    const [message, setMessage] = useState("");
    const [offer, setOffer] = useState("");

    const [isAlertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState([]);

    const openAlert = () => {
        setAlertOpen(true);
        console.log('alert open')
    };

    const closeAlert = () => {
        setAlertOpen(false);
        setAlertMessage([]);
    };

    // submit
    const sendMessage = () => {
        if (!message || !offer) {
            setAlertMessage((prev) => {
                const newMessages = [];
                if (!message) {
                    newMessages.push("Message field is empty");
                }
                if (!offer) {
                    newMessages.push("Offer field is empty");
                }
                return [...prev, ...newMessages];
            });

            openAlert();

            return

        } else {
            console.log("Message sent");
            closeOfferWindow
    ();
            // tähän viestin lähetyksen logiikka

            const messageBody = `You have received a message from ${user.userName} regarding your item ${itemData.name}.\n\nMessage: ${message}\n\nOffer: ${offer} €\n\nYou can contact the user via email: ${user.email}`;
            const messageSubject = `Message regarding your item ${itemData.name}`;

            const mailTo = `mailto:${owner.email}?subject=${encodeURIComponent(messageSubject)}&body=${encodeURIComponent(messageBody)}`;

            window.location.href = mailTo;
        }
    }

    let formattedTags;
    let formattedPrice;

    if ("tags" in itemData) {
        formattedTags = itemData.tags
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
            .join(", ");
    }

    if ("priceRange" in itemData) {
        formattedPrice = (String(itemData.priceRange[0]) + " - " + String(itemData.priceRange[1]) + " €")
    }

    const imageUrl = itemData.images?.[0] || itemData.image || "userPlaceholder.jpg";

    const handleNumberChange = (e, setter) => {
        const inputValue = e.target.value;
        const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
        setter(sanitizedValue);
    }

    return (
        isOpen && (
            <div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-fh_black bg-opacity-50 backdrop-blur-sm"
                onClick={closeOfferWindow}
            >
                <Alert
                    isOpen={isAlertOpen}
                    closeAlert={closeAlert}
                    message={alertMessage}
                />
                <div
                    className="w-4/5 md:w-3/5 p-5 bg-fh_beige rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-0 right-0 m-4 bg-fh_white rounded-full border border-fh_black px-2 hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                        onClick={closeOfferWindow}
                    >
                        <i className="fa-solid fa-xmark text-3xl text-fh_black"></i>
                    </button>

                    <div className="flex items-center justify-center ">
                        <h2 className="text-2xl text-fh_black font-bold">
                            Message Item Owner
                        </h2>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row m-2">

                        {/* itemdata */}
                        <div className="flex flex-col items-center m-2 w-full md:w-1/2">
                            <img
                                src={`/src/assets/images/${imageUrl}`}
                                alt={itemData.name}
                                className="w-32 h-32 object-cover m-4 rounded-md"
                            />
                            <h2 className="text-fh_black font-serif font-bold text-2xl m-2">
                                {itemData.name}
                            </h2>
                            <p className="text-fh_black m-1">
                                {formattedPrice || formattedTags}
                            </p >
                            <div className="flex flex-row my-2 text-fh_black text-lg">
                                <i className="fa-solid fa-location-dot mr-2" />
                                <p className="mr-1">
                                    {itemData.location.province},
                                </p>
                                <p>
                                    {itemData.location.city}
                                </p>
                            </div>
                            <div className="flex flex-row m-2 justify-center items-center">

                                <img
                                    src={user.image ? `/src/assets/images/${user.image}` : `/src/assets/images/userPlaceholder.jpg`}
                                    alt="profile picture"
                                    className="rounded-full w-10 h-auto m-2 shadow"
                                />

                                <p className="my-2 text-fh_dgreen text-lg ">
                                    {user.userName}
                                </p>
                            </div>
                        </div>

                        {/* viestikentät */}
                        <div className="flex flex-col m-2 w-full">
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Your message:
                            </h3>
                            <textarea
                                className="border border-fh_black rounded-md p-2 h-40"
                                placeholder="Write your message here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Your offer for fixing:
                            </h3>
                            <div className="flex flex-row">
                                <input
                                    className="border border-fh_black rounded-md p-2 w-1/2"
                                    type="text"
                                    placeholder="Enter your offer here..."
                                    value={offer}
                                    onChange={(e) => handleNumberChange(e, setOffer)}
                                />
                                <p className="m-2 text-fh_black font-bold">
                                    €
                                </p>
                            </div>

                            <button
                                className="m-2 bg-fh_dgreen text-fh_white font-bold py-2 px-4 rounded-md hover:bg-fh_dgreen-dark"
                                onClick={sendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default OfferWindow;