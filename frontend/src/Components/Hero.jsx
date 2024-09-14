import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="py-4 py-md-5  p-3 mb-5 bg-body-tertiary rounded">
      <div className="container ">
        <div className="row ">
          <div className="col-12">
            <div
              className="container-fluid bsb-hero-6 bsb-overlay border border-dark"
              style={{
                '--bsb-overlay-opacity': '0.3',
                '--bsb-overlay-bg-color': 'var(--bs-light-rgb)',
                backgroundImage: "url(https://blog.iilm.edu/wp-content/uploads/2022/07/WHAT-IS-LAW.jpg)"
              }}
            >
              <div className="row justify-content-md-center align-items-center">
                <div className="col-12 col-md-11 col-xl-10">
                  <h2 className="display-1 text-center text-md-start text-shadow-head fw-bold mb-4">
                    Welcome to JuristJournal
                  </h2>
                  <p className="lead text-center text-md-start  mb-5 d-flex justify-content-sm-center justify-content-md-start">
                    <span className="col-12 col-sm-10 col-md-8 col-xxl-7"
                    style={{fontWeight:'bold',color:'black'}}
                    >
                    Discover the latest trends and publishing news in JuristJournal Partners
                    </span>
                  </p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-md-start">
                    <Link to="/blog" className="btn bsb-btn-2xl btn-light">
                      learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
