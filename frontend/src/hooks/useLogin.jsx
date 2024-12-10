import { useContext, useState } from "react";


export default function useLogin(url) {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (object) => {
    setIsLoading(true);
    setError(null); // Clear any previous error

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error); // Näytä virheviesti
      setIsLoading(false); // Lopeta lataus
      return result.error; // Lopeta suoritus
    }


    const userData = result.user; // Erota käyttäjätiedot
    const token = result.token; // Erota token

    // Tallenna sessionStorageen
    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("token", JSON.stringify(token));

   
    


    setIsLoading(false); // Stop loading
  };

  return { login, isLoading, error };
}
