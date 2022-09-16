import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
import { ProductsProvider } from "./Context_Api/Context";
import Slider from "./Components/Slider";
import Subscribe from "./Components/Subscribe";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Products />
                <Subscribe />
              </>
            }
          />

          <Route path="/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </ProductsProvider>
  );
}

export default App;
