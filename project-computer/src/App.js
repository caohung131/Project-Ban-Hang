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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav />
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes> */}
      {/* <Login /> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
