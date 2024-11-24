import React, { useState } from "react";

const Alert = ({ isOpen, closeAlert, message =[] }) => {

    return (
        isOpen && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-fh_black bg-opacity-10 backdrop-blur-sm"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="flex items-center flex-col justify-center w-1/2 p-5 bg-fh_white rounded-xl shadow-lg"
                    
                >
                    <h2
                    className="m-2 text-xl text-fh_black font-bold"
                    >
                        Failed to add new item!
                    </h2>

                    {message.map((text, index) => {
                        return <p
                            key={index}
                            className="m-2 text-lg text-fh_red font-bold"
                        >
                            {text}
                        </p>
                    })}

                    <div className=" w-1/3 flex flex-col m-2">
                        <button
                            className=" w-full px-4 py-2 border border-fh_dgreen m-1 rounded-lg text-xl bg-fh_white hover:bg-fh_white-light hover:scale-105 hover:shadow-md active:scale-95"
                            onClick={closeAlert}
                        >
                            Ok
                        </button>
                    </div>
                </div>

            </div>
        )
    )
}

export default Alert;