import { useContext, useState } from "react";
import AuthContext from "../components/AuthContext";
export default function useSignup(url) {
  const { setIsAuthenticated, setUser } = useContext(AuthContext);

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
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
      setIsLoading(false);
      return result.error;
    }

    const userData = result.user; // Erota käyttäjätiedot
    const token = result.token; // Erota token

    // Tallenna sessionStorageen
    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("token", JSON.stringify(token));
    setUser(userData);

    //set auth
    setIsAuthenticated(true);
    setIsLoading(false);
  };
  return { signup, isLoading, error };
}
