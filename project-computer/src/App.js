import "mdb-ui-kit/css/mdb.min.css";
import "./App.css";
import Header from "./Layout/Header";
import Nav from "./Layout/Nav";
import Footer from "./Layout/Footer";
import style from "./Assets/style.css";
import Showproduct from "./Layout/Productcarousel";
import Productcarousel from "./Layout/Productcarousel";
import Homepage from "./Layout/Homepage";
import Productvid from "./Layout/Productvid";
import Productcategory from "./Layout/Productcategory";
import Login from "./Layout/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav />
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
        }}
      >
        <Productcarousel />
        <Productvid />
      </div>
      <div>
        <Productcategory />
      </div>

      <Homepage /> */}
      <Login />
      <Footer></Footer>
    </div>
  );
}

export default App;
