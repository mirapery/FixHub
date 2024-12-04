import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
const Layout = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-fh_white">
      <Navbar  isAuthenticated={isAuthenticated} setIsAuthenticated = {setIsAuthenticated} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
