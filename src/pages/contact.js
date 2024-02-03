import { useState } from 'react';
import { Footer } from './footer';
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
                    <i class='bi bi-telephone'></i>
                    <h3>Phone 1</h3>
                    <p>+919961555587</p>
                  </div>
                </div>

                <div class='col-lg-3 col-md-6'>
                  <div class='info-item  d-flex flex-column justify-content-center align-items-center'>
                    <i class='bi bi-telephone'></i>
                    <h3>Phone 2</h3>
                    <p>+919846849935</p>
                  </div>
                </div>
              </div>
              <div class='row gy-4 mt-1'>
                <div class='col-lg-6 '>
                  <iframe
                    title='new'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4735937589826!2d76.28694171483039!3d11.660810791725119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6076bca318e6b%3A0x716a5d08140cfd6f!2sPaddyview%20resort!5e0!3m2!1sen!2sin!4v1681008120358!5m2!1sen!2sin'
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
            </div> <strong>
                <span>Paddy View Resort</span>
              </strong>
          </section>
        </main>
        <Footer />
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
