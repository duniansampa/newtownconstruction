import React from "react";

export default function Importants() {
  return (
    <div className="container" id="info-container">
      <div className="col-12">
        <h2 className="title primary-color">Important Details</h2>
        <p className="subtitle secondary-color">
          We offer high quality construction services
        </p>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-5" id="info-banner">
            <img
              src="img/infobanner.jpg"
              alt="Informações"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-7 bg-secondary-color" id="info-content">
            <div className="row">
              <div className="col-12">
                <h2 className="title">Our Services</h2>
              </div>

              <div className="col-12" id="info-numbers">
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <i class="bi bi-check"></i>
                        Interior and Exterior Remodel
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-check"></i>
                        Drywall Repair
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-check"></i>
                        Door & Trim Installation
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-xl-6">
                    <ul className="list-group">
                      <li class="list-group-item">
                        <i class="bi bi-check"></i>
                        Interior and Exterior Painting
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-check"></i>
                        Bathroom & Kitchen Remodel
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-check"></i>
                        And Much More
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
