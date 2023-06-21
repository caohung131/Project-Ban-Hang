<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Nav from './Layout/Nav';
import Footer from './Layout/Footer';
import style from './Assets/style.css'
// import Homepage from './pages/Homepage/Homepage';
import detail from './Assets/detail.css';
import Detail from './Details/Detail.jsx';
function App() {
  return (
    <div className="App">
         
        <Detail/>


>>>>>>> f8a89d75cca4120c35d431b8f090ec90626e2bcb
    </div>
  );
}

export default App;
