import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
      <>
        <div className="nav">
          <div className="logo">
            <div className="nav-link">Codegrid</div>
          </div>
          <div className="nav-links">
            <div className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </div>
            </div>
            <div className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </div>
            </div>
            <div className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </>
  );
};

export default Navbar;
