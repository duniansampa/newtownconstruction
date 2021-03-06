import React from "react";

export default function Carousel() {
  return (
    <div className="container" id="slider-container">
      <div id="slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/nt-banner-1.jpg"
              className="d-block w-100"
              alt="Banner 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/nt-banner-2.jpg"
              className="d-block w-100"
              alt="Banner 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/nt-banner-3.jpg"
              className="d-block w-100"
              alt="Banner 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/nt-banner-4.jpg"
              className="d-block w-100"
              alt="Banner 4"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="prev"
        >
          <i className="bi bi-chevron-compact-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="next"
        >
          <i className="bi bi-chevron-compact-right"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="col-12 col-md-10 offset-md-1" id="mini-banners">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i class="bi bi-box-seam primary-color"></i>
              <div className="card-body">
                <h5 className="card-title primary-color">
                  Residential Building
                </h5>
                <img
                  src="img/nt-sub-banner-1.jpeg"
                  className="d-block w-100"
                  alt="Sub Banner 1"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i className="bi bi-bricks primary-color"></i>
              <div className="card-body">
                <h5 className="card-title primary-color">
                  Commercial Building
                </h5>
                <img
                  src="img/nt-sub-banner-2.jpeg"
                  className="d-block w-100"
                  alt="Sub Banner 2"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <i className="bi bi-building primary-color"></i>
              <div className="card-body primary-color">
                <h5 className="card-title primary-color">
                  Specialized Construction
                </h5>
                <img
                  src="img/nt-sub-banner-3.jpeg"
                  className="d-block w-100"
                  alt="Sub Banner 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
