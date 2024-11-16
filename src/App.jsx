import About from "./components/About";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ItemPage from "./components/ItemPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='item/:itemId' element={<ItemPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
