import React, { useState, useEffect, useContext } from "react";
import ReviewArea from "./ReviewArea";
import CardArea from "./CardArea";
import { useNavigate } from "react-router-dom";
import MessageWindow from "./MessageWindow";
import NewReviewWindow from "./NewReviewWindow";
import AuthContext from "./AuthContext";
import EditUser from "./EditUser";

//tähän tullaan Userpagesta

const UserFull = ({ userData, setUser }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated,user } = useContext(AuthContext);


  // haetaan käyttäjän itemit ja arvostelut
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const itemsResponse = await fetch(`/api/items?_id=${userData._id}`);
        const itemsData = await itemsResponse.json();
        const reviewsResponse = await fetch(`/api/reviews?_id=${userData._id}`);
        const reviewsData = await reviewsResponse.json();

        setItems(itemsData);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // täytetään sivun tabit fixeristatuksen mukaan

  const tabs = [];
  const tabContent = [];

  if (userData.isFixer) {
    tabs.push("Fixer Reviews", "Items Fixed by Me");
    tabContent.push(
      <ReviewArea
      receiver={userData}  
      reviews={reviews.filter((r) => r.fixerId === userData._id)}
      />,
      <CardArea
        itemsList={items.filter(
          (item) => item.fixerId === userData._id && item.isFixed
        )}
      />
    );
  } else {
    tabs.push("My Items looking for Fixing");
    tabContent.push(
      <CardArea
        itemsList={items.filter((item) => item.userId === userData._id)}
      />
    );
  }

  // viesti-ikkunan jutut
  const [isMessageWindowOpen, setMessageWindowOpen] = useState(false);
  const openMessageWindow = () => setMessageWindowOpen(true);
  const closeMessageWindow = () => setMessageWindowOpen(false);

  const sendMessage = () => {
    openMessageWindow();
    console.log("Message window opened");
  };

  // reviewikkunan jutut
  const [isNewReviewWindowOpen, setNewReviewWindowOpen] = useState(false);
  const openNewReviewWindow = () => setNewReviewWindowOpen(true);
  const closeNewReviewWindow = () => setNewReviewWindowOpen(false);

  const addReview = () => {
    openNewReviewWindow();
    console.log("Review window opened");
  };

  // profiilin muokkausikkunan jutut
  const [isEditProfileWindowOpen, setEditProfileWindowOpen] = useState(false);
  const openEditProfileWindow = () => setEditProfileWindowOpen(true);
  const closeEditProfileWindow = () => setEditProfileWindowOpen(false);

  // kuvajuttuja, tuleeko muutoksia eetulta?
  const imagePath = userData.image
    ? `/src/assets/images/${userData.image}`
    : `/src/assets/images/userPlaceholder.jpg`;

  if (loading) {
    return <div>Loading...</div>;
  }

  //daten muotoilu
  const sanitizedDate = userData.creationTime.slice(0, 10);

  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  const loggedInUserName = storedUser ? storedUser.userName : null;

  if (userData.isFixer) {
    // const formattedTags = userData.tags
    //     .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    //     .join(", ");

    return (
      <div className="bg-fh_beige flex align-middle rounded-md items-center flex-col justify-center min-h-screen">
        {isMessageWindowOpen && (
          <MessageWindow // viestin lähetysikkuna
            closeMessageWindow={closeMessageWindow}
            sender={user}
            receiver={userData}
          />
        )}

        {isNewReviewWindowOpen && (
          <NewReviewWindow // arvostelun lisäysikkuna
            closeReviewWindow={closeNewReviewWindow}
            sender={user}
            receiver={userData}
          />
        )}

        {isEditProfileWindowOpen && (
          <EditUser // profiilin muokkausikkuna
            closeEditProfileWindow={closeEditProfileWindow}
          />
        )}

        <div className="my-2 flex flex-row items-center ">
          <h1 className="text-fh_black font-bold font-serif text-6xl my-2">
            {userData.name}
          </h1>
          <h1 className="text-fh_dgreen font-bold font-serif text-5xl ml-5 my-2">
            {userData.userName === loggedInUserName ? " (You)" : ""}
          </h1>
        </div>
        <div className="flex align-middle flex-col md:flex-row justify-center">
          <div className="flex flex-col items-center my-6">
            <div className="min-h-80 align-middle">
              <img
                src={imagePath}
                alt={userData.name}
                className="w-80 h-auto m-4 rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col m-8 items-center justify-evenly">
            <div>
              <h3 className="text-fh_black font-bold font-sans text-md my-2">
                Location:
              </h3>
              <div className="flex flex-row my-2 text-fh_black text-lg">
                <i className="fa-solid fa-location-dot mr-2" />
                <p className="mr-1">{userData.location.province + ", "}</p>
                <p className="mr-1">{userData.location.city + ", "}</p>
                <p>{userData.location.postalcode}</p>
              </div>
              {/* <div>
                            <h3 className="text-fh_black font-bold font-sans text-lg my-2">
                                    Tags:
                                </h3>
                                <ul className="m-1 w-full flex flex-wrap">
                                    {userData.tags.map((tag, index) => (
                                        <li key={index}
                                            className="m-1  flex flew-row border border-fh_black bg-fh_white rounded-md p-1 hover:bg-fh_white-dark cursor-pointer hover:scale-105"
                                            onClick={() => navigate(`/search?q=${tag}`)}

                                        >
                                            <p className="my-1 mx-2 text-lg text-fh_dgreen font-bold">
                                                {tag}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
              <div>
                <h3 className="text-fh_black font-bold font-sans text-md my-2">
                  About me:
                </h3>
                <p className="my-2 text-fh_black min-h-10">{userData.about}</p>
              </div>
              <div>
                <h3 className="text-fh_black font-bold font-sans text-md my-2">
                  Member since:
                </h3>
                <p className="my-2 text-fh_black">{sanitizedDate}</p>
              </div>

              {/* nappialue */}

              {userData.userName !== loggedInUserName && isAuthenticated && (
                <div>
                  <button
                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                    onClick={sendMessage}
                  >
                    Send Message
                  </button>
                </div>
              )}
              {userData.userName !== loggedInUserName && isAuthenticated && (
                <div>
                  <button
                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                    onClick={addReview}
                  >
                    Leave a Review
                  </button>
                </div>
              )}
              {userData.userName === loggedInUserName && (
                <div>
                  <button
                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                    onClick={openEditProfileWindow}
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-fh_dgreen my-2" />
        <div className="w-3/4 mx-auto mt-10">
          {/* Tab Headers */}
          <div className="flex border-b max-w-md">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-2 text-center ${
                  activeTab === index
                    ? "border-b-2 border-fh_dgreen text-fh_dgreen"
                    : "text-fh_black hover:text-fh_black-light"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 ">
            <div>{tabContent[activeTab]}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-fh_beige flex align-middle rounded-md items-center flex-col justify-center min-h-screen">
        
        {isEditProfileWindowOpen && (
          <EditUser
            setUser={setUser}
            userData={userData}
            closeEditProfileWindow={closeEditProfileWindow}
          />
        )}
        <div className="flex align-middle flex-col md:flex-row justify-center">
          <div className="flex flex-col items-center my-6">
            <div className="min-h-80 align-middle">
              <img
                src={imagePath}
                alt={userData.userName}
                className="w-80 h-auto m-4 rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col m-8 items-center justify-evenly">
            <div>
              <div className="flex flex-row">
                <h3 className="text-fh_black font-bold font-sans text-md my-2">
                  {userData.userName}
                </h3>
                <h3 className="text-fh_dgreen font-bold font-sans text-md my-2 ml-2">
                  {userData.userName === loggedInUserName ? " (You)" : ""}
                </h3>
              </div>
              <div className="flex flex-row my-2 text-fh_black text-lg">
                <i className="fa-solid fa-location-dot mr-2" />
                <p className="mr-2">{userData.location.province},</p>
                <p className="mr-2">{userData.location.city},</p>
                <p>{userData.location.postalcode}</p>
              </div>
              <div>
                <h3 className="text-fh_black font-bold font-sans text-md my-2">
                  Member since:
                </h3>
                <p className="my-2 text-fh_black">{sanitizedDate}</p>
              </div>
              {userData.userName === loggedInUserName && (
                <div>
                  <button
                    className="bg-fh_yellow p-4 rounded-lg border-fh_yellow-dark hover:bg-fh_yellow-light hover:scale-105 drop-shadow-md my-4"
                    onClick={openEditProfileWindow}
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-fh_dgreen my-2" />
        <div className="w-3/4 mx-auto mt-10">
          <div className="flex border-b max-w-md">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-2 text-center ${
                  activeTab === index
                    ? "border-b-2 border-fh_dgreen text-fh_dgreen"
                    : "text-fh_black hover:text-fh_black-light"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 ">
            <div>{tabContent[activeTab]}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserFull;
