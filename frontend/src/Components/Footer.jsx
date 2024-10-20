import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="py-4 py-md-5">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-12">
              <div className="container-fluid border border-dark p-4">
                <div className="row">
                  <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                    <h4 className="widget-title mb-3">Get in Touch</h4>
                    <address className="mb-2">
                      Lanka, Varanasi, Uttar Pradesh, India, 221005
                    </address>
                    <p className="mb-1">
                      <a className="link-dark" href="tel:+918791381469">
                        +91 87913 81469
                      </a>
                    </p>
                    <p>
                      <a className="link-dark" href="mailto:legal.eye.serv@gmail.com">
                        legal.eye.serv@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="col-lg-6 text-center text-lg-start">
                    <h4 className="widget-title mb-3">Opening Hours</h4>
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-center justify-content-lg-between">
                        <span>Mon - Fri:</span><span>9am - 5pm</span>
                      </li>
                      <li className="d-flex justify-content-center justify-content-lg-between">
                        <span>Sat:</span><span>9am - 2pm</span>
                      </li>
                      <li className="d-flex justify-content-center justify-content-lg-between">
                        <span>Sun:</span><span>We're Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-4 pb-md-5">
  <div className="container overflow-hidden">
    <div className="row">
      <div className="col">
        <div className="container-fluid border border-dark">
          <div className="row gy-4 gy-lg-0 p-3 p-md-4 p-xxl-5 align-items-md-center">
            {/* Logo Section */}
            <div className="col-xs-12 col-sm-6 col-lg-4 order-0 order-lg-0">
              <div className="footer-logo-wrapper text-center text-sm-start">
                <a>  <img src="data:image/png;base64,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" alt="BootstrapBrain Logo" width="60" height="57" />
                </a>
                <span>Legal Eye Partners</span>
              </div>
            </div>

            {/* Copyright and Credits */}
            <div className="col-xs-12 col-lg-4 order-2 order-lg-1">
              <div className="colophon-wrapper">
                <div className="footer-copyright-wrapper text-center">
                  &copy; 2024. All Rights Reserved.
                </div>
                <div className="credits text-secondary text-center mt-2 fs-8">
                  Built by <a href="https://www.linkedin.com/in/saurabhkushwaha438/" className="link-secondary text-decoration-none">Saurabh</a> with <span className="text-primary">&#9829;</span>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="col-xs-12 col-sm-6 col-lg-4 order-1 order-lg-2">
              <div className="social-media-wrapper">
                <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-sm-end">
                  <li className="me-3">
                    <a href="https://www.linkedin.com/company/legaleye-partners/" className="link-dark link-opacity-75-hover">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/legaleye27/profilecard/?igsh=dGo5aHowd241c2E3" className="link-dark link-opacity-75-hover">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.198-.51.333-1.09.372-1.942.037-.853.048-1.125.048-3.297 0-2.173-.01-2.445-.048-3.298-.04-.85-.174-1.432-.372-1.941a3.91 3.91 0 0 0-.923-1.417 3.918 3.918 0 0 0-1.416-.923c-.509-.198-1.092-.333-1.943-.372C10.444.01 10.172 0 7.999 0H8zm0 1.457c2.14 0 2.397.008 3.24.046.78.036 1.203.166 1.485.276.374.145.641.318.922.598.28.28.453.547.598.922.11.282.24.704.276 1.484.038.843.046 1.1.046 3.24s-.008 2.397-.046 3.24c-.036.78-.166 1.203-.276 1.484a2.476 2.476 0 0 1-.598.922 2.477 2.477 0 0 1-.922.598c-.282.11-.704.24-1.484.276-.843.038-1.1.046-3.24.046s-2.397-.008-3.24-.046c-.78-.036-1.203-.166-1.485-.276a2.474 2.474 0 0 1-.922-.598 2.473 2.473 0 0 1-.598-.922c-.11-.282-.24-.704-.276-1.484-.038-.843-.046-1.1-.046-3.24s.008-2.397.046-3.24c.036-.78.166-1.203.276-1.485a2.474 2.474 0 0 1 .598-.922 2.474 2.474 0 0 1 .922-.598c.282-.11.704-.24 1.485-.276.843-.038 1.1-.046 3.24-.046zM8 3.895a4.105 4.105 0 1 0 0 8.211 4.105 4.105 0 0 0 0-8.211zm0 6.758a2.653 2.653 0 1 1 0-5.305 2.653 2.653 0 0 1 0 5.305zm4.271-6.916a.957.957 0 1 1-1.914 0 .957.957 0 0 1 1.914 0z" />
                      </svg>
                    </a>
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

    </footer>
  );
}

export default Footer;
