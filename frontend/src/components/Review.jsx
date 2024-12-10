import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import EditReviewWindow from "./EditReviewWindow";
import AuthContext from "./AuthContext";
//Reviewarea:sta

const Review = ({ review, receiver }) => {
  //const user = JSON.parse(sessionStorage.getItem("userdata"));
  const { user } = useContext(AuthContext);

  const [reviewSender, setReviewSender] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/userId/${review.userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        console.log("User data fetched:", userData);
        setReviewSender(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [review]);

  const owner = reviewSender.userName === user.userName;

  const [isEditWindowOpen, setEditWindowOpen] = useState(false);

  const openEditWindow = () => {
    setEditWindowOpen(true);
  };
  const closeEditWindow = () => {
    setEditWindowOpen(false);
  };

  const editReview = () => {
    openEditWindow();
    console.log("Edit review window opened");
  };

  return (
    <div className=" flex flex-col rounded-md bg-fh_white shadow-sm max-w-60 h-80 m-2 ">
      {isEditWindowOpen && (
        <EditReviewWindow
          receiver={receiver}
          closeReviewWindow={closeEditWindow}
          review={review}
        />
      )}
      <div className="flex flex-row text-fh_yellow m-4 justify-center">
        {[...Array(5)].map((_, index) => (
          <i
            key={index}
            className={
              index < review.score ? "fa-solid fa-star" : "fa-regular fa-star"
            }
          />
        ))}
      </div>
      <div className="min-h-20 max-h-70 m-2 w-3/4 justify-center flex-grow">
        <p>{review.message}</p>
      </div>
      <div className="flex flex-row m-2 justify-center items-center">
        {owner ? (
          <button
            className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
            onClick={editReview}
          >
            Edit
          </button>
        ) : (
          <div>
            <Link to={`/user/${user.userName}`}>
              <img
                src={
                  user.image
                    ? `/src/assets/images/${user.image}`
                    : `/src/assets/images/userPlaceholder.jpg`
                }
                alt="profile picture"
                className="rounded-full w-10 h-auto m-2 shadow"
              />
            </Link>
            <p className="my-2 text-fh_dgreen text-lg underline">
              <Link to={`/user/${user.userName}`}>{user.userName}</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
