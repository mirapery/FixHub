import React from "react";
import UserFull from "./UserFull.jsx"
import { dummyFixer } from "../data";



const UserPage = () => {

    return (
        <div className="bg-fh_white">
            <div className=" p-4">
                <UserFull userData={dummyFixer[0]} />
            </div>
        </div>
    )
}

export default UserPage;