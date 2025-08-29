import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-brand-blue px-4">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <img
          src={reactLogo}
          alt="Logo"
          style={{ width: "40px" }}
          className="me-2"
        />
        <span className="fw-bold text-brand-yellow">Bark N' Borrow</span>
      </a>
      <div className="ms-auto d-flex align-items-center">
        <span className="text-white me-3">Hello, User 👋</span>
        <a className="btn btn-outline-light" href="/logout">
          Logout
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
