import './assets/style/main.css';

import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';

function App() {
  return (
    <>
      <NavBar/>
      {/* <Home/> */}
      {/* <Projects/> */}
      <Project/>
      {/* <Contacts/> */}
      <Footer/>
    </>
  );
}

export default App;
