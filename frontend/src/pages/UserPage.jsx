import React, { useState, useEffect } from "react";
import UserFull from "../components/UserFull.jsx"
import { useParams } from "react-router-dom";



const UserPage = () => {
    const { userName } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/users/${userName}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const userData = await response.json();
                setUser(userData);
                console.log(userData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userName]);

    if (loading) {
        return (
            <div className="bg-fh_white">
                <div className="p-4">
                    <p className="text-fh_black text-2xl">
                        Loading...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-fh_white">
                <div className="p-4">
                    <p className="text-fh_black text-2xl">
                        Error: {error}
                    </p>
                </div>
            </div>
        );
    }

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
                <UserFull setUser={setUser} userData={user} />
            </div>
        </div>
    )
}

export default UserPage;