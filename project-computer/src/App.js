import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Nav from './Layout/Nav';
import Footer from './Layout/Footer';
import style from './Assets/style.css'
import Admin from './Page/Admin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
          {/* <Nav /> */}
          {/* <Header></Header> */}
          <Admin></Admin>
          {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
