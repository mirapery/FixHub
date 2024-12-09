import { useContext, useState } from "react";
import AuthContext from "../components/AuthContext";
export default function useSignup(url) {
  const { setIsAuthenticated } = useContext(AuthContext);

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
    setIsAuthenticated(true);
    setIsLoading(false);
  };
  return { signup, isLoading, error };
}
