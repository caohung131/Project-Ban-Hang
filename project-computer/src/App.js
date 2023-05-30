import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Nav from './Layout/Nav';
import Footer from './Layout/Footer';
import style from './Assets/style.css'

function App() {
  return (
    <div className="App">
          <Nav />
          <Header></Header>
          <Footer></Footer>
    </div>
  );
}

export default App;
