import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Our Hotel Rooms</h1>
      <p className="text-center mb-5">
        Discover our wide range of rooms tailored to meet the needs of every type of guest. From luxury suites to cozy single rooms, we have something for everyone.
      </p>

      <div className="row">
        {/* Single Room */}
        <div className="col-md-4">
          <div className="card mb-4">
            {/* <img
              src="https://www.xotels.com/wp-content/uploads/2022/07/Hotel-Room-Types-Classification-Chart-XOTELS.webp"
              alt="Single Room"
              className="card-img-top"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Single Room</h5>
              <p className="card-text">
                A single room is designed for one person, equipped with a single bed. It’s perfect for solo travelers who want comfort and privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Double Room */}
        <div className="col-md-4">
          <div className="card mb-4">
            {/* <img
              src="https://www.xotels.com/wp-content/uploads/2022/07/Hotel-Room-Types-Classification-Chart-XOTELS.webp"
              alt="Double Room"
              className="card-img-top"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Double Room</h5>
              <p className="card-text">
                A double room comes with a double bed, ideal for couples or two individuals looking to share a room without compromising on comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Suite */}
        <div className="col-md-4">
          <div className="card mb-4">
            {/* <img
              src="https://www.xotels.com/wp-content/uploads/2022/07/Hotel-Room-Types-Classification-Chart-XOTELS.webp"
              alt="Suite"
              className="card-img-top"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Suite</h5>
              <p className="card-text">
                A suite offers the ultimate luxury experience with a separate living area, premium amenities, and additional space for relaxation and entertainment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Twin Room */}
        <div className="col-md-4">
          <div className="card mb-4">
            {/* <img
              src="https://www.xotels.com/wp-content/uploads/2022/07/Hotel-Room-Types-Classification-Chart-XOTELS.webp"
              alt="Twin Room"
              className="card-img-top"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Twin Room</h5>
              <p className="card-text">
                A twin room features two separate beds, making it ideal for two guests who prefer to sleep separately, without sacrificing comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Deluxe Room */}
        <div className="col-md-4">
          <div className="card mb-4">
            {/* <img
              src="https://www.xotels.com/wp-content/uploads/2022/07/Hotel-Room-Types-Classification-Chart-XOTELS.webp"
              alt="Deluxe Room"
              className="card-img-top"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Deluxe Room</h5>
              <p className="card-text">
                The deluxe room offers a more spacious environment, complete with premium furnishings and additional comfort for a more luxurious stay.
              </p>
            </div>
          </div>
        </div>

        {/* Family Room */}
        <div className="col-md-4">
          <div className="card mb-4">
            {/* <img
              src="https://www.xotels.com/wp-content/uploads/2022/07/Hotel-Room-Types-Classification-Chart-XOTELS.webp"
              alt="Family Room"
              className="card-img-top"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Family Room</h5>
              <p className="card-text">
                The family room is designed for families, offering larger space and multiple bedding options to accommodate children and adults comfortably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
