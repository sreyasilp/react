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
            <h1>Paddy View Resort</h1>
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
