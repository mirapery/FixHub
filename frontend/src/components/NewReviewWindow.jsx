import React, { useState, useEffect } from "react";
import Alert from "./Alert";

const NewReviewWindow = ({ isOpen, closeReviewWindow, sender, receiver }) => {

    const [message, setMessage] = useState("");
    const [rating, setRating] = useState("");
    const token = sessionStorage.getItem("user", token);
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

    const addReview = async () => {
        if (!message || !rating) {
            setAlertMessage((prev) => {
                const newMessages = [];
                if (!message) {
                    newMessages.push("Message field is empty");
                }
                if (!rating) {
                    newMessages.push("Please add a rating");
                }
                return [...prev, ...newMessages];
            });
    
            openAlert();
    
            return
    
        } else {
            console.log("Review sent");
    
            try {
                const response = await fetch("/api/reviews", {
                    method: "POST",
                    headers: {
                        Authentication: "Bearer " + token,
                        "Content-Type": "application/json",
                      },
                    body: JSON.stringify({
                        userId: sender.userId,
                        fixerId: receiver.userId,
                        score: rating,
                        message: message,
                    }),
                });
                if (!response.ok) {
                    throw new Error("Failed to add review")
                }
    
                const newReview = await response.json();
                console.log("New Review: " + newReview);
                closeReviewWindow();
                setMessage("")
                setRating("")
            } catch (error) {
                console.error("Error adding review: ", error);
                alert("Failed to add review")
            }
        }
    }

    return (
        isOpen && (
            <div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-fh_black bg-opacity-50 backdrop-blur-sm"
                onClick={closeReviewWindow}
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
                        onClick={closeReviewWindow}
                    >
                        <i className="fa-solid fa-xmark text-3xl text-fh_black"></i>
                    </button>

                    <div className="flex items-center justify-center ">
                        <h2 className="text-2xl text-fh_black font-bold">
                            Leave a review to Fixer: {receiver.userName}
                        </h2>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row m-2">

                        {/* viestikentät */}
                        <div className="flex flex-col m-2 w-full">
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Your review:
                            </h3>
                            <textarea
                                className="border border-fh_black rounded-md p-2 h-40"
                                placeholder="Write your review here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                Your rating:
                            </h3>
                            <select
                                className="border border-fh_black rounded-md p-2"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            >
                                <option value="" disabled>
                                -- Select --
                                </option>
                                {[1, 2, 3, 4, 5].map((number) => (
                                <option key={number} value={number}>
                                    {number}
                                </option>
                                ))}
                            </select>
                                                    
                            <button
                                className="m-2 bg-fh_dgreen text-fh_white font-bold py-2 px-4 rounded-md hover:bg-fh_dgreen-dark"
                                onClick={addReview}
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

export default NewReviewWindow;