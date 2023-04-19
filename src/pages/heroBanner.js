export const HeroBanner = () => {
  return (
    <>
      <section id='hero' className='hero'>
        <div className='info d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 text-center'>
                <h2 data-aos='fade-down'>
                  Welcome to <span>Paddy View Resort</span>
                </h2>
                <p data-aos='fade-up'>
                Experience Nature's Blissful Retreat in Wayanad!
Nestled amidst the paddy fields of Wayanad, Paddy View Resort is a haven of tranquility and serenity, offering guests the perfect escape from the hustle and bustle of everyday life. With luxurious accommodations, breathtaking views.
                </p>
                <a
                  data-aos='fade-up'
                  data-aos-delay={200}
                  href='/contact'
                  className='btn-get-started'
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id='hero-carousel'
          className='carousel slide'
          data-bs-ride='carousel'
          data-bs-interval={2000}
        >
          <div
            className='carousel-item active'
            style={{
              backgroundImage: 'url(assets/img/resort/vila_rich_night.jpg)',
            }}
          />
          <div
            className='carousel-item'
            style={{
              backgroundImage: 'url(assets/img/resort/hut_moonLight2.jpg)',
            }}
          />
          <a
            className='carousel-control-prev'
            href='/'
            role='button'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon bi bi-chevron-left'
              aria-hidden='true'
            />
          </a>
          <a
            className='carousel-control-next'
            href='/'
            role='button'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon bi bi-chevron-right'
              aria-hidden='true'
            />
          </a>
        </div>
      </section>
    </>
  );
};
