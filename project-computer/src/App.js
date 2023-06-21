import "mdb-ui-kit/css/mdb.min.css";
import "./App.css";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import style from "./Assets/style.css";
import Showproduct from "./Layout/Productcarousel";
import Homepage from "./Layout/Homepage";
import Productcategory from "./Layout/Productcategory";
import Login from "./Layout/Login";
import Signin from "./Layout/Signin";
import { Routes, Route } from "react-router-dom";
import Phone from "./Layout/phone/Phone";
import Index from "./components/Index.jsx"
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/components/:blogId" element={<Index />} /> 
        <Route path="/Signin" element={<Signin />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
      {/* <Login /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
