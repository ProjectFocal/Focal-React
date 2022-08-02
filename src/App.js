import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home/Home.js';
import Navbar from './components/shared/navbar/Navbar.js';
import Footer from './components/shared/footer/Footer.js';
import About from './components/pages/About/About.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/about" caseSensitive={false} element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
