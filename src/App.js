import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const App = () => {
  return <div className="container">
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
    </Routes>
  </div>;
};

export default App; 
