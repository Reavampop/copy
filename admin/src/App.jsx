import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./component/Login";
import { useState } from "react";

export const backend_url = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState("");

  return (
    <main>
      {token === "" ? (
        <Login />
      ) : (
        <div className="bg-primary text-[#404040]">
          <Header />
          <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row mt-8 sm:mt-4">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Add />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
