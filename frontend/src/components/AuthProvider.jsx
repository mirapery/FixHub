import { useState } from "react";
import AuthContex from "./AuthContext";

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContex.Provider value={{ isAuthenticated,setIsAuthenticated }}>
      {children}
    </AuthContex.Provider>
  );
}
