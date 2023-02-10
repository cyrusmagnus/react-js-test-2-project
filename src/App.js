import './assets/style/main.css';

import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <NavBar/>
      {/* <Home/> */}
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
