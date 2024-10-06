import React from 'react';
import './Home.css'; // Import custom CSS if needed

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-5 flex-grow-1">
        <div className="card text-center shadow">
          <div className="card-body">
            <h1 className="card-title">Welcome to Hotel Management System</h1>
            <p className="card-text">
              This is react first project. Manage your hotel efficiently with our easy-to-use system.
            </p>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </div>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; 2024 Hotel Management System. All rights reserved.</p>
          <p className="mb-0">
            123 Hotel Ave, New York, NY 10001 | Phone: +1 234 567 890 | Email: info@hotelmanagement.com
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
