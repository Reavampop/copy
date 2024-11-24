## FRONTEND STEPS

# go to terminal /frontend

# GO TO TAILWIND CSS WEBSITE AND FOLLOW THE STEPS

# npm create vite@latest . -- --template react

# npm install -D tailwindcss postcss autoprefixer

# npx tailwindcss init -p

# create folder in src/components/Header.jsx

# create folder in src/components/Navbar.jsx

# create folder in src/pages/Home.jsx

# install this npm i react-router-dom react-icons react-toastify axios

# in main.jsx

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
<BrowserRouter>
<App />
</BrowserRouter>
);

# then create a routes in App.jsx, and create all those components

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Verify from "./pages/Verify";

const App = () => {
return (
<main className="">
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/collection" element={<Collection />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/product/:productId" element={<Product />} />
<Route path="/cart" element={<Cart />} />
<Route path="/login" element={<Login />} />
<Route path="/place-order" element={<PlaceOrder />} />
<Route path="/orders" element={<Orders />} />
<Route path="/verify" element={<Verify />} />
</Routes>
</main>
);
};

export default App;
