import { useContext, useState } from "react";
import AuthContext from "../components/AuthContext";
export default function useSignup(url) {
  const { setIsAuthenticated, setUser} = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const signup = async (object) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });
    const user = await response.json();
    if (!response.ok) {
      console.log(user.error);
      setError(user.error);
      setIsLoading(false);
      return user.error;
    }

    sessionStorage.setItem("user", JSON.stringify(user));

    try {
      const response = await fetch(`/api/users/${user.userName}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      //save userdata to useContext
      sessionStorage.setItem("userdata", JSON.stringify(userData));
      setUser(userData);
      console.log(userData);
    } catch (error) {
      setError(error.message);
    }
//set auth
    setIsAuthenticated(true);
    setIsLoading(false);
  };
  return { signup, isLoading, error };
}
