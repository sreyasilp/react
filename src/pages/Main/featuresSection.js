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
              <h4>Pool</h4>
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
                <h3>
                  Paddy Vista - Cozy Huts with Spectacular Views in Wayanad.
                </h3>
                <p className='fst-italic'>
                  Our cozy huts offer a unique opportunity to experience the
                  cool mountain breeze and occasional fog of Wayanad, while
                  providing breathtaking views of the surrounding paddy fields
                  that are sure to leave you spellbound.
                </p>
                <ul>
                  <li>
                    <i className='bi bi-check2-all' /> Our cozy huts offer
                    stunning panoramic views of Wayanad's lush landscapes.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Stay close to nature and
                    unwind in the tranquil ambiance of our charming huts.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Enjoy the beauty of
                    Wayanad even at night, as our huts offer the opportunity to
                    bask in the moonlight.
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
                  alt='Top 10 resorts in Wayanad'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          {/* End tab content item */}
          <div className='tab-pane' id='tab-2'>
            <div className='row'>
              <div className='col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center'>
                <h3>
                  Night Under the Stars - Enjoy a Cozy Campfire in Wayanad's
                  Natural Beauty
                </h3>
                <p className='fst-italic'>
                  Gather around the cozy campfire at Paddy View Resort, where
                  you can relax, connect with friends and family, and take in
                  the natural beauty of Wayanad.
                </p>
                <ul>
                  <li>
                    <i className='bi bi-check2-all' /> Our campfire is the
                    perfect place to make memories with loved ones, telling
                    stories and sharing laughs as you cozy up by the fire
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Immerse yourself in
                    Wayanad's serene atmosphere, as you gather around the
                    campfire and take in the stunning night sky and peaceful
                    surroundings.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> The campfire offers a
                    tranquil ambiance, where you can sit back and unwind after a
                    day of exploring Wayanad's natural beauty, savoring the
                    warmth and comfort of the fire.
                  </li>
                </ul>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 text-center'>
                <img
                  src='assets/img/resort/campfire1.jpg'
                  alt='Top 10 resorts in Wayanad'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          {/* End tab content item */}
          <div className='tab-pane' id='tab-3'>
            <div className='row'>
              <div className='col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center'>
                <h3>
                  Paddy View Restaurant - Exquisite Flavors and Stunning Views
                  of Wayanad
                </h3>
                <ul>
                  <li>
                    <i className='bi bi-check2-all' /> Our restaurant is known
                    for its exceptional culinary offerings, featuring a range of
                    local and international cuisines that showcase the authentic
                    flavors of Wayanad.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Our restaurant offers
                    stunning views of Wayanad's lush greenery and serene
                    landscapes, providing a picturesque backdrop for a memorable
                    dining experience.
                  </li>
                </ul>
                <p className='fst-italic'>
                  Indulge in the exquisite flavors of Wayanad at our restaurant,
                  where we offer a delectable range of local and international
                  cuisines to satisfy your taste buds.
                </p>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 text-center'>
                <img
                  src='assets/img/resort/restaurant_night.jpg'
                  alt='Top 10 resorts in Wayanad'
                  className='img-fluid'
                />
              </div>
            </div>
          </div>
          {/* End tab content item */}
          <div className='tab-pane' id='tab-4'>
            <div className='row'>
              <div className='col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center'>
                <h3>
                  Paddy View Oasis - Relax and Rejuvenate in Our Wayanad
                  Swimming Pool
                </h3>
                <p className='fst-italic'>
                  Take a dip in our refreshing swimming pool at Paddy View
                  Resort, where you can unwind, cool off and soak up the
                  stunning views of Wayanad.
                </p>
                <ul>
                  <li>
                    <i className='bi bi-check2-all' /> Our swimming pool offers
                    the perfect place to relax and cool off after a day of
                    exploring Wayanad's natural beauty.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Immerse yourself in the
                    stunning natural landscapes of Wayanad, as you take a dip in
                    our pool and take in the breathtaking views of the paddy
                    fields and lush greenery.
                  </li>
                  <li>
                    <i className='bi bi-check2-all' /> Our pool offers a range
                    of fun activities to ensure an enjoyable and memorable
                    experience for everyone.
                  </li>
                </ul>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 text-center'>
                <img
                  src='assets/img/resort/pool_wide_new.jpg'
                  alt='Top 10 resorts in Wayanad'
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
