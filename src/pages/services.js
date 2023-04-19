import { useState } from 'react';

export const Services = () => {
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
                  <a href='/services' class='active'>
                    Services
                  </a>
                </li>                
                <li>
                  <a href='/contact'>Contact</a>
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
              <h2>Services</h2>
              <ol>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>Services</li>
              </ol>
            </div>
          </div>
        </main>
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
