import React from "react";
import { dummyUsers } from "../data";
import { Link } from "react-router-dom";

const Review = ({ review }) => {

    const user = dummyUsers.find(u => u.userId === review.userId)

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
                    {review.message}
                </p>
            </div>
            <div className="flex flex-row m-2 justify-center items-center">
            <Link to={`/user/${user.userName}`}>
                    <img
                        src={user.image ? `/src/assets/images/${user.image}` : `/src/assets/images/userPlaceholder.jpg`}
                        alt="profile picture"
                        className="rounded-full w-10 h-auto m-2 shadow"
                    />
                </Link>
                <p className="my-2 text-fh_dgreen text-lg underline">
                    <Link to={`/user/${user.userName}`}>{user.userName}</Link>
                </p>
            </div>
        </div>
    )
};

export default Review;