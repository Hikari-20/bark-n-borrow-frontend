import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  Phone,
  LogIn,
  UserPlus,
  ShoppingCartIcon,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const style = { border: "none" };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-brand-blue text-white vh-100 p-3 shadow-lg position-fixed transition-all ${
          isOpen ? "sidebar-open" : "sidebar-collapsed"
        }`}
        style={{ width: isOpen ? "250px" : "70px" }}
      >
        {/* Nav Links */}
        <ul className="nav flex-column">
          <li className="nav-item my-2">
            <Link
              className="btn btn-primary text-white d-flex align-items-center"
              style={style}
              to="/home"
            >
              <Home size={20} className="me-2" />
              {isOpen && "Home"}
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link
              className="btn btn-primary text-white d-flex align-items-center"
              style={style}
              to="/categories"
            >
              <ShoppingCart size={20} className="me-2" />
              {isOpen && "Categories"}
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link
              className="btn btn-primary text-white d-flex align-items-center"
              style={style}
              to="/contact"
            >
              <Phone size={20} className="me-2" />
              {isOpen && "Contact"}
            </Link>
          </li>
          <hr className="text-light" />
          <li className="nav-item my-2">
            <Link
              className="btn btn-primary text-white d-flex align-items-center"
              to="/login"
            >
              <LogIn size={20} className="me-2" />
              {isOpen && "Log In"}
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link
              className="btn btn-primary text-white d-flex align-items-center"
              to="/about"
            >
              <UserPlus size={20} className="me-2" />
              {isOpen && "About"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
