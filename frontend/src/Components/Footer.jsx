import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Widgets - Bootstrap Brain Component */}
      <section className="py-4 py-md-5">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-12">
              <div className="container-fluid border border-dark">
                <div className="row">
                  <div className="col-xs-12 col-lg-4">
                    <div className="widget p-3 p-md-4 p-xxl-5">
                      <h4 className="widget-title mb-4">Get in Touch</h4>
                      <address className="mb-4">
                      Lanka, Varanasi, Uttar Pradesh, India, 221005
                      </address>
                      <p className="mb-1">
                        <a
                          className="link-dark link-offset-1 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-100-hover"
                          href="tel:+15057922430"
                        >
                          8871792993
                        </a>
                      </p>
                      <p className="mb-0">
                        <a
                          className="link-dark link-offset-1 link-opacity-75 link-opacity-100-hover link-underline-opacity-0 link-underline-opacity-100-hover"
                          href="mailto:demo@yourdomain.com"
                        >
                         legal.eye.serv@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                

                  <div className="col-xs-12 col-lg-4">
                    <div className="widget p-3 p-md-4 p-xxl-5">
                      <h4 className="widget-title mb-4">Opening Hours</h4>
                      <p className="mb-4">
                        We always aim to provide a welcoming environment to deliver exceptional service.
                      </p>
                      <div>
                        <div className="row mb-1">
                          <div className="col-5 col-xl-4">
                            <span className="fw-bold">Mon - Fri:</span>
                          </div>
                          <div className="col-7 col-xl-8">
                            <span className="text-secondary">9am - 5pm</span>
                          </div>
                        </div>
                        <div className="row mb-1">
                          <div className="col-5 col-xl-4">
                            <span className="fw-bold">Sat:</span>
                          </div>
                          <div className="col-7 col-xl-8">
                            <span className="text-secondary">9am - 2pm</span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5 col-xl-4">
                            <span className="fw-bold">Sun:</span>
                          </div>
                          <div className="col-7 col-xl-8">
                            <span className="text-secondary">We're Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colophon - Bootstrap Brain Component */}
      <div className="pb-4 pb-md-5">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col">
              <div className="container-fluid border border-dark">
                <div className="row gy-4 gy-lg-0 p-3 p-md-4 p-xxl-5 align-items-md-center">
                  <div className="col-xs-12 col-sm-6 col-lg-4 order-0 order-lg-0">
                    <div className="footer-logo-wrapper text-center text-sm-start">
                      <a href="#!">
                        <img
                          src="data:image/png;base64,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"
                          alt="JuristJournal"
                          width="50"
                          height="50"
                        />
                        <span
          style={{ marginLeft: '10px',fontWeight:'bold', verticalAlign: 'middle' ,color:'black' }}
          >Legal Eye Partners</span>
                      </a>
                    </div>
                  </div>

                  <div className="col-xs-12 col-lg-4 order-2 order-lg-1">
                    <div className="colophon-wrapper">
                      <div className="footer-copyright-wrapper text-center">
                        &copy; 2024. All Rights Reserved.
                      </div>
                      <div className="credits text-secondary text-center mt-2 fs-8">
                        Built by{' '}
                        <a
                          href="https://www.linkedin.com/in/saurabhkushwaha438/"
                          className="link-secondary text-decoration-none"
                        >
                          Saurabh
                        </a>{' '}
                        with <span className="text-primary">&#9829;</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 col-lg-4 order-1 order-lg-2">
                    <div className="social-media-wrapper">
                      <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-sm-end">
                        <li className="me-3">
                          <a
                            href="#!"
                            className="link-dark link-opacity-75-hover"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </a>
                        </li>
                        <li className="me-3">
                          <a
                            href="#!"
                            className="link-dark link-opacity-75-hover"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-youtube"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                          </a>
                        </li>
                        <li className="me-3">
                          <a
                            href="#!"
                            className="link-dark link-opacity-75-hover"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </a>
                        </li>
                        <li className="">
                          <a
                            href="#!"
                            className="link-dark link-opacity-75-hover"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
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
};

export default Footer;
