import About from "./components/About";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import UserPage from "./pages/UserPage";
import SearchPage from "./pages/SearchPage";
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='search'element={<SearchPage />} />
          <Route path='item/:itemId' element={<ItemPage />} />
          <Route path='user/:userName' element={<UserPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
