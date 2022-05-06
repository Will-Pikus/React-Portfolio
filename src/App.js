import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer"

import Resume from "./pages/Resume"
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
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;