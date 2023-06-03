import "./App.css";
import Header from "./Layout/Header.jsx";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import style from "./Assets/style.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav />
      <Footer></Footer>
    </div>
  );
}

export default App;
