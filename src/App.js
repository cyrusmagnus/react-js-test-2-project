import './assets/style/main.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/project/:id' element={<Project/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
