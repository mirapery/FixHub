import React from "react";

const Review = ({ review }) => {

    return (
        <div className=" flex flex-col rounded-md bg-fh_white shadow-sm max-w-60 h-80 m-2 ">
            <div className="flex flex-row text-fh_yellow m-4 justify-center">
                {[...Array(5)].map((_, index) => (
                    <i
                        key={index}
                        className={index < review.score ? "fa-solid fa-star" : "fa-regular fa-star"}
                    />
                ))}
            </div>
            <div className="min-h-20 max-h-70 m-2 w-3/4 justify-center flex-grow">
                <p>
                    {review.body}
                </p>
            </div>
            <div className="flex flex-row m-2 justify-evenly items-center">
                <img
                    src="/src/assets/images/userPlaceholder.jpg"
                    alt="profile picture"
                    className="rounded-full w-10 h-auto m-2 shadow"
                />
                <p>
                    username 
                </p> 
            </div>
        </div>
    )
};

export default Review;