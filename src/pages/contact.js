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
                UpConstruction<span>.</span>
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
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/services'>Services</a>
                </li>

                <li>
                  <a href='/blog'>Blog</a>
                </li>
                <li class='dropdown'>
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
                </li>
                <li>
                  <a href='/contact' class='active'>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id='main'>
          <div
            class='breadcrumbs d-flex align-items-center'
            style={{ backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')" }}
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
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>

                <div class='col-lg-3 col-md-6'>
                  <div class='info-item d-flex flex-column justify-content-center align-items-center'>
                    <i class='bi bi-envelope'></i>
                    <h3>Email Us</h3>
                    <p>contact@example.com</p>
                  </div>
                </div>

                <div class='col-lg-3 col-md-6'>
                  <div class='info-item  d-flex flex-column justify-content-center align-items-center'>
                    <i class='bi bi-telephone'></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
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

        <footer id='footer' class='footer'>
          <div class='footer-content position-relative'>
            <div class='container'>
              <div class='row'>
                <div class='col-lg-4 col-md-6'>
                  <div class='footer-info'>
                    <h3>UpConstruction</h3>
                    <p>
                      A108 Adam Street <br />
                      NY 535022, USA
                      <br />
                      <br />
                      <strong>Phone:</strong> +1 5589 55488 55
                      <br />
                      <strong>Email:</strong> info@example.com
                      <br />
                    </p>
                    <div class='social-links d-flex mt-3'>
                      <a
                        href='/'
                        class='d-flex align-items-center justify-content-center'
                      >
                        <i class='bi bi-twitter'></i>
                      </a>
                      <a
                        href='/'
                        class='d-flex align-items-center justify-content-center'
                      >
                        <i class='bi bi-facebook'></i>
                      </a>
                      <a
                        href='/'
                        class='d-flex align-items-center justify-content-center'
                      >
                        <i class='bi bi-instagram'></i>
                      </a>
                      <a
                        href='/'
                        class='d-flex align-items-center justify-content-center'
                      >
                        <i class='bi bi-linkedin'></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class='col-lg-2 col-md-3 footer-links'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href='/'>Home</a>
                    </li>
                    <li>
                      <a href='/about'>About us</a>
                    </li>
                    <li>
                      <a href='/services'>Services</a>
                    </li>
                    <li>
                      <a href='/terms'>Terms of service</a>
                    </li>
                    <li>
                      <a href='/privacy'>Privacy policy</a>
                    </li>
                  </ul>
                </div>

                <div class='col-lg-2 col-md-3 footer-links'>
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <a href='/'>Web Design</a>
                    </li>
                    <li>
                      <a href='/'>Web Development</a>
                    </li>
                    <li>
                      <a href='/'>Product Management</a>
                    </li>
                    <li>
                      <a href='/'>Marketing</a>
                    </li>
                    <li>
                      <a href='/'>Graphic Design</a>
                    </li>
                  </ul>
                </div>

                <div class='col-lg-2 col-md-3 footer-links'>
                  <h4>Hic solutasetp</h4>
                  <ul>
                    <li>
                      <a href='/'>Molestiae accusamus iure</a>
                    </li>
                    <li>
                      <a href='/'>Excepturi dignissimos</a>
                    </li>
                    <li>
                      <a href='/'>Suscipit distinctio</a>
                    </li>
                    <li>
                      <a href='/'>Dilecta</a>
                    </li>
                    <li>
                      <a href='/'>Sit quas consectetur</a>
                    </li>
                  </ul>
                </div>

                <div class='col-lg-2 col-md-3 footer-links'>
                  <h4>Nobis illum</h4>
                  <ul>
                    <li>
                      <a href='/'>Ipsam</a>
                    </li>
                    <li>
                      <a href='/'>Laudantium dolorum</a>
                    </li>
                    <li>
                      <a href='/'>Dinera</a>
                    </li>
                    <li>
                      <a href='/'>Trodelas</a>
                    </li>
                    <li>
                      <a href='/'>Flexo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class='footer-legal text-center position-relative'>
            <div class='container'>
              <div class='copyright'>
                &copy; Copyright{' '}
                <strong>
                  <span>UpConstruction</span>
                </strong>
                . All Rights Reserved
              </div>
              <div class='credits'></div>
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
