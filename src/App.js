import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Resume from './Pages/Resume/Resume';
import MyWork from './Pages/MyWork/MyWork';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>

      <Navbar></Navbar>


      <div className='mt-16'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
