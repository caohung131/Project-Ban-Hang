import "./App.css";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import Homepage from "./pages/main/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Phone from "./pages/phone/Phone.jsx";
import Index from "./components/Index.jsx";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header></Header>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Phone" element={<Phone />} />
          <Route path="/components/:blogId" element={<Index />} />
        </Routes>

        {/* <Login /> */}
        <Footer></Footer>
      </ContextProvider>
    </div>
  );
}

export default App;
