import { Link } from "react-router-dom";
import "../../resources/css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navBar">
      <Link to="/">Início</Link>
      <Link to="/about">Sobre Mim</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contactos</Link>
    </div>
  );
};
