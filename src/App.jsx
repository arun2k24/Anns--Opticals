import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages.jsx/Home';
import Carosal from './Pages.jsx/Carosal';
import Footer from './Pages.jsx/Footer';
import Icons from './Pages.jsx/Icons';
import About from './components/About';
import Contact from './components/Contact';
import OurBrand from './Pages.jsx/OurBrand';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Carosal/>
      <Home/>
      <About/>
      <Routes>
    
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ourbrand" element={<OurBrand />} />
      </Routes>

    <Icons/>
    <OurBrand/>
   <Contact/>  
     
      <Footer />
    </>
  );
}

export default App;
