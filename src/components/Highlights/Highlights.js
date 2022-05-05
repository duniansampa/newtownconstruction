import React from "react";

export default function Highlights() {
  return (
    <div className="container" id="featured-container">
      <div className="col-12">
        <h2 className="title primary-color">Featured Works</h2>
        <p className="subtitle secondary-color">
          See pictures of places we construct.
        </p>
      </div>
      <div className="col-12" id="featured-images">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <img
              src="img/newtown-1.jpg"
              alt="Newtown 1"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/newtown-2.jpg"
              alt="Newtown 2"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/newtown-3.jpg"
              alt="Newtown 3"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/newtown-4.jpg"
              alt="Newtown 4"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/newtown-5.jpg"
              alt="Newtown 5"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/newtown-6.jpg"
              alt="Newtown 6"
              className="img-fluid"
            />
            <div className="banner-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
