import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Education from "./pages/education";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;