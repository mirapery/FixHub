import React, { useState, useEffect } from "react";
import Alert from "./Alert";

const MessageWindow = ({ isOpen, closeMessageWindow, sender, receiver }) => {

    const [message, setMessage] = useState("");

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
        if (!message) {
            setAlertMessage(
                ["Message field is empty"]
            );

            openAlert();

            return

        } else {
            console.log("Message sent");
            closeMessageWindow();

            const messageBody = `You have received a message from ${sender.userName} via FixHub.\n\nMessage: ${message}`;
            const messageSubject = `Message on FixHub from ${sender.userName}`;

            const mailTo = `mailto:${receiver.email}?subject=${encodeURIComponent(messageSubject)}&body=${encodeURIComponent(messageBody)}`;

            window.location.href = mailTo;
        }
    }

    return (
        isOpen && (
            <div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-fh_black bg-opacity-50 backdrop-blur-sm"
                onClick={closeMessageWindow}
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
                        onClick={closeMessageWindow}
                    >
                        <i className="fa-solid fa-xmark text-3xl text-fh_black"></i>
                    </button>

                    <div className="flex items-center justify-center ">
                        <h2 className="text-2xl text-fh_black font-bold">
                            Send message to user {receiver.userName}
                        </h2>
                    </div>

                    {/* viestikentät */}
                    <div className="flex flex-col m-2 w-full md:w-1/2">
                        <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                            Your message:
                        </h3>
                        <textarea
                            className="border border-fh_black rounded-md p-2 h-40"
                            placeholder="Write your message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />

                        <button
                            className="m-2 bg-fh_dgreen text-fh_white font-bold py-2 px-4 rounded-md hover:bg-fh_dgreen-dark"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        )
    )
}

export default MessageWindow;