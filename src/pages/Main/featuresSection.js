export const Features = () => {
  return (
    <section id='features' className='features section-bg'>
      <div className='container' data-aos='fade-up'>
        <ul className='nav nav-tabs row  g-2 d-flex'>
          <li className='nav-item col-3'>
            <a
              className='nav-link active show'
              data-bs-toggle='tab'
              data-bs-target='#tab-1'
            >
              <h4>Hut</h4>
            </a>
          </li>
          {/* End tab nav item */}
          <li className='nav-item col-3'>
            <a
              className='nav-link'
              data-bs-toggle='tab'
              data-bs-target='#tab-2'
            >
              <h4>Campfire</h4>
            </a>
            {/* End tab nav item */}
          </li>
          <li className='nav-item col-3'>
            <a
              className='nav-link'
              data-bs-toggle='tab'
              data-bs-target='#tab-3'
            >
              <h4>Restaurant</h4>
            </a>
          </li>
          {/* End tab nav item */}
          <li className='nav-item col-3'>
            <a
              className='nav-link'
              data-bs-toggle='tab'
              data-bs-target='#tab-4'
            >
              <h4>Swimming Pool</h4>
            </a>
          </li>
          {/* End tab nav item */}
        </ul>
        <div className='tab-content'>
          <div className='tab-pane active show' id='tab-1'>
            <div className='row'>
              <div
                className='col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <h3>The Retreat - Find Peace and Serenity in Wayanad's Lush Surroundings</h3>
                <p className='fst-italic'>
                Our cozy huts offer a unique opportunity to experience the cool mountain breeze and occasional fog of Wayanad, while providing breathtaking views of the surrounding hills and valleys that are sure to leave you spellbound.
                </p>
                <ul>
                  <li>
                    <i className='bi bi-check2-all' /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
              <div
                className='col-lg-6 order-1 order-lg-2 text-center'
                data-aos='fade-up'
                data-aos-delay={200}
              >
                <img
                  src='assets/img/resort/hut_moonLight2.jpg'
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          {/* End tab content item */}
          <div className='tab-pane' id='tab-2'>
            <div className='row'>
              <div className='col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center'>
                <h3>Neque exercitationem debitis</h3>
                <p className='fst-italic'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className='bi bi-check2-all' /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Provident mollitia neque
                    rerum asperiores dolores quos qui a. Ipsum neque dolor
                    voluptate nisi sed.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 text-center'>
                <img 
                  src='assets/img/resort/campfire1.jpg'
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          {/* End tab content item */}
          <div className='tab-pane' id='tab-3'>
            <div className='row'>
              <div className='col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center'>
                <h3>Voluptatibus commodi accusamu</h3>
                <ul>
                  <li>
                    <i className='bi bi-check2-all' /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Provident mollitia neque
                    rerum asperiores dolores quos qui a. Ipsum neque dolor
                    voluptate nisi sed.
                  </li>
                </ul>
                <p className='fst-italic'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 text-center'>
                <img
                  src='assets/img/resort/restaurant_night.jpg'
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          {/* End tab content item */}
          <div className='tab-pane' id='tab-4'>
            <div className='row'>
              <div className='col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center'>
                <h3>Omnis fugiat ea explicabo sunt</h3>
                <p className='fst-italic'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className='bi bi-check2-all' /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 text-center'>
                <img
                  src='assets/img/resort/pool_front.jpg'
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          {/* End tab content item */}
        </div>
      </div>
    </section>
  );
};
