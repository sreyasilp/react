import React, { useState } from 'react';

export const NavHeader = () => {
  const [navClassState, setNavClassState] = useState('');
  const [navHiddenState, setNavHiddenState] = useState(
    'mobile-nav-toggle mobile-nav-show bi bi-list'
  );

  const showMenu = () => {
    setNavClassState('mobile-nav-active');
    setNavHiddenState('mobile-nav-toggle mobile-nav-hide d-none bi bi-x');
  };
  return (
    <div className={navClassState}>
      <header id='header' class='header d-flex align-items-center'>
        <div class='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <a href='/' class='logo d-flex align-items-center'>
            <img src='assets/img/logo.png' alt='' />
            <h1>
              Paddy View Resort<span>.</span>
            </h1>
          </a>

          <i class={navHiddenState} onClick={() => showMenu()}></i>
          <i class='mobile-nav-toggle mobile-nav-hide d-none bi bi-x'></i>
          <nav id='navbar' class='navbar'>
            <ul>
              <li>
                <a href='/' class='active'>
                  Home
                </a>
              </li>
              {/* <li>
                <a href='/about'>About</a>
              </li>
              <li>
                <a href='/services'>Services</a>
              </li>
              <li>
                <a href='/gallery'>Gallery</a>
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
              <li>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <script src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
        <script src='assets/vendor/aos/aos.js'></script>
        <script src='assets/vendor/glightbox/js/glightbox.min.js'></script>
        <script src='assets/vendor/isotope-layout/isotope.pkgd.min.js'></script>
        <script src='assets/vendor/swiper/swiper-bundle.min.js'></script>
        <script src='assets/vendor/purecounter/purecounter_vanilla.js'></script>
        <script src='assets/vendor/php-email-form/validate.js'></script>
      </header>
    </div>
  );
};
