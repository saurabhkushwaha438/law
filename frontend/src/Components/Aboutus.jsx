import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <h3 className="fs-5 mb-2 text-secondary text-uppercase">About Us</h3>
            <h2 className="display-5 mb-4">
            Legal Eye Partners has been dedicated to publishing high-quality text that inspire readers of all ages. We have a team of experienced editors, designers, and marketing professionals who work together to bring our authors' stories to life.
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0">
          <div className="col-12 col-lg-6">
            <div className="card bg-light p-3 m-0">
              <div className="row gy-3 gy-md-0 align-items-md-center">
                <div className="col-md-5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrm-FZ9e4X4h51q7eia3Iu1DCtVMpjiTD_Q&s"
                    className="img-fluid rounded-start"
                    alt="Why Choose Us?"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body p-0">
                    <h2 className="card-title h4 mb-3">Our Mission</h2>
                    <p className="card-text lead">
                    At Legal Eye Partners, our mission is to provide a platform for talented writers to share their intellect with the world. We are committed to helping authors achieve their dreams of becoming published writers.
                    And show their Online  presence and also thier contribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card bg-light p-3 m-0">
              <div className="row gy-3 gy-md-0 align-items-md-center">
                <div className="col-md-5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4GdPUaw_2bOjdhWuPlaMtWLLreD7ECJMYQ&s"
                    className="img-fluid rounded-start"
                    alt="Visionary Team"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body p-0">
                    <h2 className="card-title h4 mb-3">Our Team</h2>
                    <p className="card-text lead">
                    Our team is made up of passionate and creative professionals who are dedicated to the publishing and education industry. From our editors to our marketing specialists, everyone at Legal Eye Partners is committed to ensuring that our authors' books are a success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
