import reactLogo from "../assets/react.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <Layout>
        {/* Welcome Section */}
        <header className="d-flex flex-column align-items-center justify-content-center text-center py-5 bg-light">
          <h1>
            Welcome back to <span className="text-brand-blue">Bark</span>
            <span className="text-brand-yellow"> N' Borrow</span>
          </h1>
          <p className="text-muted">
            Manage your activities, schedules, and reports in one place.
          </p>
        </header>

        {/* Quick Actions */}
        <section className="container py-5">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm rounded-4 p-4">
                <h4 className="mb-3">📅 My Schedule</h4>
                <p>Check your upcoming classes and meetings.</p>
                <a href="/schedule" className="btn btn-primary-2">
                  View Schedule
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm rounded-4 p-4">
                <h4 className="mb-3">✅ Attendance</h4>
                <p>Mark or review your attendance records.</p>
                <a href="/attendance" className="btn btn-primary-2">
                  Go to Attendance
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm rounded-4 p-4">
                <h4 className="mb-3">📊 Reports</h4>
                <p>Generate and download attendance & schedule reports.</p>
                <a href="/reports" className="btn btn-primary-2">
                  View Reports
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
