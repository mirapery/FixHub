import React from "react";
import UserFull from "./UserFull.jsx"
import { dummyUsers } from "../data";
import { useParams } from "react-router-dom";



const UserPage = () => {
    const { userName } = useParams();
    const user = dummyUsers.find((u) => u.userName === userName);

    if (!user) {
        return (
            <div className="bg-fh_white">
            <div className=" p-4">
                <p className="text-fh_black text-2xl">
                    User not found
                </p>
            </div>
        </div>
        )
    }

    return (
        <div className="bg-fh_white">
            <div className=" p-4">
                <UserFull userData={user} />
            </div>
        </div>
    )
}

export default UserPage;