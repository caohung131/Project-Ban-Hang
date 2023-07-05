import logo from "./logo.svg";
import "./App.css";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import Homepage from "./pages/main/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Phone from "./pages/phone/Phone.jsx";
import Tablet from "./pages/Tablet/Tablet.jsx";
import OldProduct from "./pages/oldProduct/OldProduct.jsx";
import Accessories from "./pages/accessories/Accessories.jsx";
import Index from "./components/Index.jsx";
import { ContextProvider } from "./context/Context";
import style from "./Assets/style.css";
import Admin from "./Page/Admin";
import ToDoApp from "./Page/Admin/ToDoApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from 'react'

function App() {

  const location = useLocation();

  console.log("location: ", location);
  


  return (
    <div className="App">
      {
        location?.pathname?.includes("/admin") ? <Admin /> : <ContextProvider>
        <Header></Header>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route path="/oldproduct" element={<OldProduct />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/details/:blogId" element={<Index />}></Route>
          <Route path="/components/:blogId" element={<Index />} />
        </Routes>

        {/* <Login /> */}
        <Footer></Footer>

        
      </ContextProvider>
      }
      
      
    </div>
  );
}

export default App;
