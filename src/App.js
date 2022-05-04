import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "./components/Header";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

import './styles/App.css';

function App() {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;