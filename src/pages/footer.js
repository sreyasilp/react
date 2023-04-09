export const Footer = () => {
  return (
    <>
      <footer id='footer' className='footer'>
        <div className='footer-content position-relative'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='footer-info'>
                  <h3>Paddy View Resort</h3>
                  <p>
                    Vattuvady, Moolankavu,Thoduvatty Road,Sulthan Bathery, Wayanad <br />
                    KL 673592, In
                    <br />
                    <br />
                    <strong>Phone 1:</strong> +919961555587
                    <br />
                    <strong>Phone 2:</strong> +919961555586
                    <br />
                  </p>
                  <div className='social-links d-flex mt-3'>
                    <a
                      href='/home'
                      className='d-flex align-items-center justify-content-center'
                    >
                      <i className='bi bi-twitter' />
                    </a>
                    <a
                      href='/home'
                      className='d-flex align-items-center justify-content-center'
                    >
                      <i className='bi bi-facebook' />
                    </a>
                    <a
                      href='/home'
                      className='d-flex align-items-center justify-content-center'
                    >
                      <i className='bi bi-instagram' />
                    </a>
                    <a
                      href='/home'
                      className='d-flex align-items-center justify-content-center'
                    >
                      <i className='bi bi-linkedin' />
                    </a>
                  </div>
                </div>
              </div>
              {/* End footer info column*/}
              <div className='col-lg-8 col-md-3 footer-links'>
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href='/home'>Home</a>
                  </li>
                  <li>
                    <a href='/contact'>Contact Us</a>
                  </li>
                  <li>
                    <a href='/home'>Services</a>
                  </li>
                  <li>
                    <a href='/home'>Terms of service</a>
                  </li>
                  <li>
                    <a href='/home'>Privacy policy</a>
                  </li>
                </ul>
              </div>
              {/* End footer links column*/}
              {/* <div className='col-lg-2 col-md-3 footer-links'>
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <a href='/home'>Ipsam</a>
                  </li>
                  <li>
                    <a href='/home'>Laudantium dolorum</a>
                  </li>
                  <li>
                    <a href='/home'>Dinera</a>
                  </li>
                  <li>
                    <a href='/home'>Trodelas</a>
                  </li>
                  <li>
                    <a href='/home'>Flexo</a>
                  </li>
                </ul>
              </div> */}
              {/* End footer links column*/}
              {/* <div className='col-lg-2 col-md-3 footer-links'>
                <h4>Hic solutasetp</h4>
                <ul>
                  <li>
                    <a href='/home'>Molestiae accusamus iure</a>
                  </li>
                  <li>
                    <a href='/home'>Excepturi dignissimos</a>
                  </li>
                  <li>
                    <a href='/home'>Suscipit distinctio</a>
                  </li>
                  <li>
                    <a href='/home'>Dilecta</a>
                  </li>
                  <li>
                    <a href='/home'>Sit quas consectetur</a>
                  </li>
                </ul>
              </div> */}
              {/* End footer links column*/}
              {/* <div className='col-lg-2 col-md-3 footer-links'>
                <h4>Nobis illum</h4>
                <ul>
                  <li>
                    <a href='/home'>Ipsam</a>
                  </li>
                  <li>
                    <a href='/home'>Laudantium dolorum</a>
                  </li>
                  <li>
                    <a href='/home'>Dinera</a>
                  </li>
                  <li>
                    <a href='/home'>Trodelas</a>
                  </li>
                  <li>
                    <a href='/home'>Flexo</a>
                  </li>
                </ul>
              </div> */}
              {/* End footer links column*/}
            </div>
          </div>
        </div>
        <div className='footer-legal text-center position-relative'>
          <div className='container'>
            <div className='copyright'>
              © Copyright{' '}
              <strong>
                <span>Paddy View Resort</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className='credits'>
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/ */}
              {/* Designed by <a href='/home'>ZigaTechnologies</a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
