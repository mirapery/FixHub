import About from "./components/About";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ItemPage from "./components/ItemPage";
import UserPage from "./components/UserPage";
import SearchPage from "./components/SearchPage";
import ScrollToTop from "./components/ScrollToTop";
import AuthProvider from "../src/components/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  //sessionStorage.removeItem("user");

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="item/:itemId" element={<ItemPage />} />
            <Route path="user/:userName" element={<UserPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
