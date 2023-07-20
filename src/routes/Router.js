import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/404";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Login } from "../pages/Login";
import { Navbar } from "../components/Header/Navbar";

export const RouterPage = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
};
