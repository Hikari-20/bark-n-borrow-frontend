import reactLogo from "../assets/react.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-brand-blue shadow-sm">
        <div className="container-fluid">
          {/* Logo / Brand */}
          <Link className="navbar-brand fw-bold" to="/">
            <span className="text-brand-yellow">Bark</span>
            <span className="text-white"> N' Borrow</span>
          </Link>

          {/* Toggler button (Hamburger) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              {/* Auth Buttons */}
              <li className="nav-item ms-lg-3">
                <Link className="btn btn-primary me-2" to="/login">
                  Log In
                </Link>
                <Link className="btn btn-secondary" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="d-flex flex-column align-items-center justify-content-center text-center bg-light py-5">
        <img src={reactLogo} alt="React Logo" style={{ width: "120px" }} />
        <h1 className="mt-3">
          Welcome to <span className="text-brand-blue">Faci</span>
          <span className="text-brand-yellow">Track</span>
        </h1>
        <p className="text-muted w-75">
          A modern solution for tracking faculty attendance, meetings, and
          schedules in real time.
        </p>
        <a href="/register" className="btn btn-primary-2 mt-3">
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-4 p-4">
              <h4 className="mb-3">📅 Schedule Tracking</h4>
              <p>
                Stay updated with real-time faculty schedules and availability.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-4 p-4">
              <h4 className="mb-3">✅ Attendance Management</h4>
              <p>Monitor and record faculty attendance seamlessly.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded-4 p-4">
              <h4 className="mb-3">📊 Reports & Insights</h4>
              <p>Generate detailed reports for analysis and decision-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
