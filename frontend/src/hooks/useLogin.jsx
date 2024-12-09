import { useContext, useState } from "react";
import AuthContext from "../components/AuthContext";

export default function useLogin(url) {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (object) => {
    setIsLoading(true);
    setError(null); // Clear any previous error

    // Make the API call
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });

    const user = await response.json();

    if (!response.ok) {
      setError(user.error); // Set error if login failed
      setIsLoading(false); // Stop loading
      return user.error; // Stop further processing
    }

    // If no error, proceed with successful login
    sessionStorage.setItem("user", JSON.stringify(user)); // Store user in session
    setIsAuthenticated(true); // Set authentication to true
    setUser(user);
    console.log(user); // Log user details
    setIsLoading(false); // Stop loading
  };

  return { login, isLoading, error };
}
