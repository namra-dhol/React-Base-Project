import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
              <div className="container-fluid">
              <a className="navbar-brand" href="#">Hotel Management</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/rooms">Rooms</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/bookings">Bookings</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/AboutUs">About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col m-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
