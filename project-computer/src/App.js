import logo from "./logo.svg";
import "./App.css";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import style from "./Assets/style.css";
import Admin from "./Page/Admin";
import ToDoApp from "./Page/Admin/ToDoApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Admin />
    </div>
  );
}

export default App;
