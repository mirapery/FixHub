import React from "react";

const Review = ({ review }) => {

    return (
    <div className="flex-col rounded-md bg-fh_white shadow-sm max-w-70 m-2">
        <div className="flex flex-row mx-1 text-fh_yellow m-2 justify-center">
            {[...Array(5)].map((_, index) => (
                <i className={index < review.rating ? "fa-solid fa-star" : "fa-regular fa-star"} />
            ))}
        </div>
        <div className="min-h-20 max-h-70 m-2 w-3/4 justify-center">
            <p>
                {review.body}
            </p>
        </div>
        <div className="flex flex-row m-2 justify-center">
            <p>
                Tähän käyttäjän kuva ja nimi?
            </p>
        </div>
    </div>
    )
};

export default Review;