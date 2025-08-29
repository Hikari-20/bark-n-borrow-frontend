import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />

        {/* Main Content */}
        <div
          className="flex-grow-1 p-4"
          style={{
            marginLeft: isOpen ? "250px" : "70px",
            transition: "all 0.3s",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
