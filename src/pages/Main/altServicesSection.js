export const AlternateServices = () => {
  return (
    <section id='alt-services' className='alt-services'>
      <div className='container' data-aos='fade-up'>
        <div className='row justify-content-around gy-4'>
          <div
            className='col-lg-6 img-bg'
            style={{
              backgroundImage: 'url(assets/img/resort/paddy_view_board.jpg',
            }}
            data-aos='zoom-in'
            data-aos-delay={100}
          />
          <div className='col-lg-5 d-flex flex-column justify-content-center'>
            <h3>Nature's Luxury at Affordable Prices</h3>
            <p>
              Immerse yourself in the natural beauty of Wayanad while enjoying the ultimate in luxury and comfort at our resort, all at affordable prices.
            </p>
            <div
              className='d-flex position-relative'
              data-aos='fade-up'
              data-aos-delay={100}
            >
              <i className='flex-shrink-0' />
              <div>
                <h4>
                  {/* <a href className='stretched-link'> */}
                  Affordability
                  {/* </a> */}
                </h4>
                <p>
                Our resort offers luxurious amenities and accommodations at affordable prices, ensuring that every guest can enjoy the experience.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className='d-flex position-relative'
              data-aos='fade-up'
              data-aos-delay={200}
            >
              <i className=' flex-shrink-0' />
              <div>
                <h4>
                  {/* <a href className='stretched-link'> */}
                  Luxury
                  {/* </a> */}
                </h4>
                <p>
                Each of our accommodations, from rooms to villas, is designed to provide the ultimate in comfort and sophistication, with exquisite decor and attentive service to make your stay truly unforgettable.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className='d-flex position-relative'
              data-aos='fade-up'
              data-aos-delay={300}
            >
              <i className=' flex-shrink-0' />
              <div>
                <h4>
                  {/* <a href className='stretched-link'> */}
                  Ambience
                  {/* </a> */}
                </h4>
                <p>
                Our resort is designed to create a relaxed and peaceful atmosphere, with lush greenery, serene water features, and beautiful decor that blends seamlessly with the natural surroundings.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div
              className='d-flex position-relative'
              data-aos='fade-up'
              data-aos-delay={400}
            >
              <i className='flex-shrink-0' />
              <div>
                <h4>
                  {/* <a href className='stretched-link'> */}
                  Nature
                  {/* </a> */}
                </h4>
                <p>
                Our resort is situated amidst stunning natural beauty, with breathtaking views of the surrounding hills, forests, and paddy fields, offering a truly unforgettable experience for nature lovers.
                </p>
              </div>
            </div>
            {/* End Icon Box */}
          </div>
        </div>
      </div>
    </section>
  );
};
