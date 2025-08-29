import reactLogo from "../assets/react.svg";

const Register = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-brand-blue">
        <div
          className="card w-100 d-flex justify-content-center shadow-lg rounded-4"
          style={{ maxWidth: "900px", minHeight: "650px", border: "none" }}
        >
          <div className="row g-0 align-items-center">
            {/* Left Side */}
            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
              <div className="row g-0 align-items-center">
                <img
                  className="col-6 border-end p-4"
                  src={reactLogo}
                  alt="React Logo"
                  style={{ width: "150px" }}
                />
                <img
                  className="col-6 p-4"
                  src={reactLogo}
                  alt="React logo"
                  style={{ width: "150px" }}
                />
              </div>
              <h2 className="mt-3">
                Join <span className="text-brand-blue">Bark</span>
                <span className="text-brand-yellow"> N' Borrow</span>
              </h2>
              <p className="text-muted mt-2">Create your account today</p>
            </div>

            {/* Right Side */}
            <div className="col-6 d-flex flex-column justify-content-center align-items-center p-4 border-start">
              <h2 className="mb-4">Register</h2>
              <form className="w-75">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="name"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="password"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <button type="submit" className="btn btn-primary-2 w-100">
                    Register
                  </button>
                </div>
              </form>
              <div className="mt-3">
                <a href="/login" className="link-primary">
                  Already have an account? Login here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
