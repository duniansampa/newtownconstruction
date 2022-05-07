import React from "react";

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark-color" id="footer">
      <div className="container">
        <div className="row">
          {/* <!-- FOOTER TOP --> */}
          <div className="col-12" id="footer-top">
            <div className="row justify-content-between">
              <div className="col-4">
                <h2>NewTown Construction</h2>
              </div>
              <div className="col-4" id="social-icons">
                <a
                  href="https://www.facebook.com/ramos.ramos.14418101"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#footer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#footer">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#footer">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- FOOTER DETAILS --> */}
          <div className="col-12" id="footer-details">
            <div className="row">
              <div className="col-12 col-md-3" id="news-container">
                <h4>Stay on top of the news</h4>
                <p className="secondary-color">
                  Sign up to find out first hand
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button className="btn btn-dark">Sign up</button>
                </form>
              </div>
              <div className="col-12 col-md-3" id="contact-container">
                <h4>Forms of contact</h4>
                <p className="secondary-color">206-518.3853</p>
                <p className="secondary-color">bartoloramos89@gmail.com</p>
                <p className="secondary-color">
                  Address: 3928 St Ave Unit 8 Lacey WA 98503
                </p>
              </div>
              <div className="col-12 col-md-3" id="links-container">
                <div className="row">
                  <h4>You may be searching for</h4>
                  <div className="col">
                    <p className="secondary-color">Customizable Services</p>
                    <p className="secondary-color">
                      High-Quality Construction Services
                    </p>
                    <p className="secondary-color">
                      General Contracting Services
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-3" id="payment-container">
                <div className="row">
                  <h4>Payment method</h4>
                  <div className="col">
                    <p className="secondary-color">Visa</p>
                    <p className="secondary-color">Master</p>
                    <p className="secondary-color">Check</p>
                    <p className="secondary-color">Cash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOOTER BOTTOM --> */}
          <div className="col-12" id="footer-bottom">
            <div className="row justify-content-between">
              <div className="col-12 col-md-3">
                <p className="secondary-color">
                  <a
                    href="https://www.adiantex.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    AdianteX{" "}
                  </a>{" "}
                  &copy; 2022
                </p>
              </div>
              <div className="col-12 col-md-3">
                <p className="secondary-color">
                  Made with love <i className="bi bi-heart"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
