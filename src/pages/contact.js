import { useState } from 'react';

export const ContactUs = () => {
  const [navClassState, setNavClassState] = useState('');

  const showMenu = () => {
    setNavClassState('mobile-nav-active');
  };
  return (
    <>
      <div className={navClassState}>
        <header id='header' class='header d-flex align-items-center'>
          <div class='container-fluid container-xl d-flex align-items-center justify-content-between'>
            <a href='/' class='logo d-flex align-items-center'>
              {/* <!-- Uncomment the line below if you also wish to use an image logo -->
      <!-- <img src="assets/img/logo.png" alt=""> --> */}
              <h1>
                Paddy View Resort
              </h1>
            </a>

            <i
              class='mobile-nav-toggle mobile-nav-show bi bi-list'
              onClick={() => showMenu()}
            ></i>
            <i class='mobile-nav-toggle mobile-nav-hide d-none bi bi-x'></i>
            <nav id='navbar' class='navbar'>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                {/* <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/services'>Services</a>
                </li>

                <li>
                  <a href='/blog'>Blog</a>
                </li> */}
                {/* <li class='dropdown'>
                  <a href='/'>
                    <span>Dropdown</span>{' '}
                    <i class='bi bi-chevron-down dropdown-indicator'></i>
                  </a>
                  <ul>
                    <li>
                      <a href='/'>Dropdown 1</a>
                    </li>
                    <li class='dropdown'>
                      <a href='/'>
                        <span>Deep Dropdown</span>{' '}
                        <i class='bi bi-chevron-down dropdown-indicator'></i>
                      </a>
                      <ul>
                        <li>
                          <a href='/'>Deep Dropdown 1</a>
                        </li>
                        <li>
                          <a href='/'>Deep Dropdown 2</a>
                        </li>
                        <li>
                          <a href='/'>Deep Dropdown 3</a>
                        </li>
                        <li>
                          <a href='/'>Deep Dropdown 4</a>
                        </li>
                        <li>
                          <a href='/'>Deep Dropdown 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='/'>Dropdown 2</a>
                    </li>
                    <li>
                      <a href='/'>Dropdown 3</a>
                    </li>
                    <li>
                      <a href='/'>Dropdown 4</a>
                    </li>
                  </ul>
                </li> */}
                {/* <li>
                  <a href='/contact' class='active'>
                    Contact
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </header>

        <main id='main'>
          <div
            class='breadcrumbs d-flex align-items-center'
            style={{ backgroundImage: "url('assets/img/resort/hut_moonLight2.jpg')" }}
          >
            <div
              class='container position-relative d-flex flex-column align-items-center'
              data-aos='fade'
            >
              <h2>Contact</h2>
              <ol>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>Contact</li>
              </ol>
            </div>
          </div>

          <section id='contact' class='contact'>
            <div class='container' data-aos='fade-up' data-aos-delay='100'>
              <div class='row gy-4'>
                <div class='col-lg-6'>
                  <div class='info-item  d-flex flex-column justify-content-center align-items-center'>
                    <i class='bi bi-map'></i>
                    <h3>Our Address</h3>
                    <p> Vattuvady, Moolankavu,Thoduvatty Road,Sulthan Bathery, Wayanad
                    KL 673592, In</p>
                  </div>
                </div>

                <div class='col-lg-3 col-md-6'>
                  <div class='info-item d-flex flex-column justify-content-center align-items-center'>
                    <i class='bi bi-envelope'></i>
                    <h3>Phone 1</h3>
                    <p>+919961555587</p>
                  </div>
                </div>

                <div class='col-lg-3 col-md-6'>
                  <div class='info-item  d-flex flex-column justify-content-center align-items-center'>
                    <i class='bi bi-telephone'></i>
                    <h3>Phone 2</h3>
                    <p>+919961555586</p>
                  </div>
                </div>
              </div>

              <div class='row gy-4 mt-1'>
                <div class='col-lg-6 '>
                  <iframe
                    title='new'
                    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
                    frameBorder='0'
                    style={{ border: 0, width: '100%', height: '384px' }}
                    allowFullScreen
                  ></iframe>
                </div>

                <div class='col-lg-6'>
                  <form
                    action='forms/contact.php'
                    method='post'
                    class='php-email-form'
                  >
                    <div class='row gy-4'>
                      <div class='col-lg-6 form-group'>
                        <input
                          type='text'
                          name='name'
                          class='form-control'
                          id='name'
                          placeholder='Your Name'
                          required
                        />
                      </div>
                      <div class='col-lg-6 form-group'>
                        <input
                          type='email'
                          class='form-control'
                          name='email'
                          id='email'
                          placeholder='Your Email'
                          required
                        />
                      </div>
                    </div>
                    <div class='form-group'>
                      <input
                        type='text'
                        class='form-control'
                        name='subject'
                        id='subject'
                        placeholder='Subject'
                        required
                      />
                    </div>
                    <div class='form-group'>
                      <textarea
                        class='form-control'
                        name='message'
                        rows='5'
                        placeholder='Message'
                        required
                      ></textarea>
                    </div>
                    <div class='my-3'>
                      <div class='loading'>Loading</div>
                      <div class='error-message'></div>
                      <div class='sent-message'>
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div class='text-center'>
                      <button type='submit'>Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

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
        <a
          href='/'
          class='scroll-top d-flex align-items-center justify-content-center'
        >
          <i class='bi bi-arrow-up-short'></i>
        </a>
      </div>{' '}
    </>
  );
};
