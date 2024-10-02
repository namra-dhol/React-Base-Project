import React from 'react';

function Home() {
  return (
    <div>
        
      {/* Hero Section */}
      <header className="hero text-center" style={{ background: "url('https://example.com/hotel.jpg') center center/cover no-repeat", height: "100vh", color: "white" }}>
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
          <div>
            <h1 className="display-4 fw-bold">Welcome to Luxury Hotel</h1>
            <p className="lead">Experience unparalleled comfort and luxury at our 5-star hotel.</p>
            <a href="#" className="btn btn-primary btn-lg">Book Now</a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://example.com/spa.jpg" className="card-img-top" alt="Spa" />
                <div className="card-body">
                  <h5 className="card-title">Spa & Wellness</h5>
                  <p className="card-text">Relax and rejuvenate with our world-class spa and wellness services.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://example.com/restaurant.jpg" className="card-img-top" alt="Restaurant" />
                <div className="card-body">
                  <h5 className="card-title">Fine Dining</h5>
                  <p className="card-text">Enjoy gourmet meals prepared by our top chefs in a luxurious setting.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://example.com/pool.jpg" className="card-img-top" alt="Pool" />
                <div className="card-body">
                  <h5 className="card-title">Infinity Pool</h5>
                  <p className="card-text">Take a dip in our stunning infinity pool overlooking the city skyline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Showcase Section */}
      <section id="rooms" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Rooms</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://example.com/room1.jpg" className="card-img-top" alt="Room 1" />
                <div className="card-body">
                  <h5 className="card-title">Deluxe Room</h5>
                  <p className="card-text">Experience comfort and style in our deluxe rooms with a city view.</p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://example.com/room2.jpg" className="card-img-top" alt="Room 2" />
                <div className="card-body">
                  <h5 className="card-title">Executive Suite</h5>
                  <p className="card-text">Stay in luxury with our spacious executive suites featuring modern decor.</p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://example.com/room3.jpg" className="card-img-top" alt="Room 3" />
                <div className="card-body">
                  <h5 className="card-title">Presidential Suite</h5>
                  <p className="card-text">Indulge in our prestigious presidential suite, offering the best in comfort.</p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://example.com/about.jpg" className="img-fluid" alt="Hotel" />
            </div>
            <div className="col-md-6">
              <h2>About Our Hotel</h2>
              <p>Welcome to Luxury Hotel, where comfort meets elegance. Our hotel offers an unforgettable experience
                with world-class amenities, exceptional service, and luxurious accommodations.</p>
              <p>Located in the heart of the city, we are committed to providing our guests with the ultimate
                hospitality experience.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 Luxury Hotel. All rights reserved.</p>
          <p>123 Hotel Ave, New York, NY 10001 | Phone: +1 234 567 890 | Email: info@luxuryhotel.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
