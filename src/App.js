import { BrowserRouter, Routes, Route } from "react-router-dom";
import FashionPage from "./pages/FashionPage";
import AccessoryPage from "./pages/AccessoryPage";
import DigitalPage from "./pages/DigitalPage";
import MainPage from "./pages/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";
import { CartProvider } from "./CartContext";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <ThemeProvider theme={{ isDarkMode, toggleDarkMode }}>
      <CartProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/fashion"} element={<FashionPage />} />
            <Route path={"/accessory"} element={<AccessoryPage />} />
            <Route path={"/digital"} element={<DigitalPage />} />
            <Route
              path={"/product/:productId"}
              element={<ProductDetailPage />}
            />
            <Route path={"/cart"} element={<CartPage />} />
            <Route path={"/grocery"} element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
