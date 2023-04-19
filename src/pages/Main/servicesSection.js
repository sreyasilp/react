export const Services = () => {
  return (
    <section id='services' className='services section-bg'>
      <div className='container' data-aos='fade-up'>
        <div className='section-header'>
          <h2>Services</h2>
          <p>
            At Paddy View Resort, we pride ourselves on providing exceptional services that cater to all your needs and ensure a comfortable and memorable stay.
          </p>
        </div>
        <div className='row gy-4'>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-delay={100}
          >
            <div className='service-item  position-relative'>
              <div className='icon'>
                <i className='fa-solid fa-mountain-city   ' />
              </div>
              <h3>Accommodations</h3>
              <p>
                Our resort offers a variety of luxurious and affordable accommodations to suit your preferences, from cozy huts to spacious villas with stunning views of the paddy fields.
              </p>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-delay={200}
          >
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='fa-solid fa-arrow-up-from-ground-water' />
              </div>
              <h3>Dining</h3>
              <p>
                Our restaurant serves a variety of delicious and healthy dishes made with fresh, local ingredients, catering to all dietary needs and preferences.
              </p>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-delay={300}
          >
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='fa-solid fa-compass-drafting' />
              </div>
              <h3>Activities</h3>
              <p>
                We offer a range of exciting activities to explore the natural beauty and cultural heritage of Wayanad, including birdwatching, village tours, and more.
              </p>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-delay={400}
          >
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='fa-solid fa-trowel-bricks' />
              </div>
              <h3>Relaxation</h3>
              <p>
                Our resort provides unique way to experience the beauty of Wayanad's natural surroundings to unwind, relax, and immerse yourself in the serene ambiance of nature.
              </p>
            </div>
          </div>

          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-delay={500}
          >
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='fa-solid fa-helmet-safety' />
              </div>
              <h3>Entertainment</h3>
              <p>
                Our campfire and play area offer a fun and engaging environment for families and friends to bond and enjoy quality time together.
              </p>
            </div>
          </div>
          <div
            className='col-lg-4 col-md-6'
            data-aos='fade-up'
            data-aos-delay={600}
          >
            <div className='service-item position-relative'>
              <div className='icon'>
                <i className='fa-solid fa-arrow-up-from-ground-water' />
              </div>
              <h3>Hospitality</h3>
              <p>
                Our friendly and knowledgeable staff are dedicated to ensuring that you have a comfortable and memorable stay with us, providing excellent service and assistance throughout your visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
