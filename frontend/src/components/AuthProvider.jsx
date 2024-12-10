import { useState, useEffect } from "react";
import AuthContext from "./AuthContext"; // Tarkista, että AuthContext on kirjoitettu oikein!

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Lue käyttäjätiedot sessionStorage:sta ja päivitä tila
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("userdata"));
    if (storedUser) {
      setUser(storedUser); // Aseta käyttäjä uudelleen
      setIsAuthenticated(true); // Merkitse käyttäjä autentikoituneeksi
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
