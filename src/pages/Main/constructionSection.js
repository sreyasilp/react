export const Construction = () => {
  return (
    <section id='constructions' className='constructions'>
      <div className='container' data-aos='fade-up'>
        <div className='section-header'>
          <h2>Facilities</h2>
          <p>
            Our resort offers a range of amenities that cater to both adults and children, including a swimming pool, play area for kids, a restaurant serving local and international cuisine, and cozy huts with stunning views of the surrounding hills and valleys.
          </p>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-6' data-aos='fade-up' data-aos-delay={100}>
            <div className='card-item'>
              <div className='row'>
                <div className='col-xl-5'>
                  <div
                    className='card-bg'
                    style={{
                      backgroundImage: 'url(assets/img/resort/restaurant_st_night.jpg)',
                    }}
                  />
                </div>
                <div className='col-xl-7 d-flex align-items-center'>
                  <div className='card-body'>
                    <h4 className='card-title'>
                      The Paddy View Kitchen - Where Local Ingredients Meet Global Flavors
                    </h4>
                    <p>
                      Our restaurant offers a delicious and diverse menu featuring locally sourced ingredients, where guests can savor a variety of authentic regional dishes as well as international favorites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card Item */}
          <div className='col-lg-6' data-aos='fade-up' data-aos-delay={200}>
            <div className='card-item'>
              <div className='row'>
                <div className='col-xl-5'>
                  <div
                    className='card-bg'
                    style={{
                      backgroundImage: 'url(assets/img/resort/campfire2.jpg)',
                    }}
                  />
                </div>
                <div className='col-xl-7 d-flex align-items-center'>
                  <div className='card-body'>
                    <h4 className='card-title'>
                      Bonfire Bliss - Cozy up with Loved Ones and Embrace the Serenity of Nature
                    </h4>
                    <p>
                      Our guests can enjoy cozy evenings around the campfire, with the mesmerizing view of the starry sky and the warmth of the fire creating the perfect ambiance for storytelling, music, and simply enjoying the serenity of nature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card Item */}
          <div className='col-lg-6' data-aos='fade-up' data-aos-delay={300}>
            <div className='card-item'>
              <div className='row'>
                <div className='col-xl-5'>
                  <div
                    className='card-bg'
                    style={{
                      backgroundImage: 'url(assets/img/resort/outside_cheetu_area.jpg)',
                    }}
                  />
                </div>
                <div className='col-xl-7 d-flex align-items-center'>
                  <div className='card-body'>
                    <h4 className='card-title'>
                      Nature's Nook - Escape to Your Own Private Haven in Wayanad
                    </h4>
                    <p>
                      Our cozy outdoor huts offer a unique way to experience the beauty of Wayanad's natural surroundings, providing a comfortable and intimate space to unwind, relax, and immerse yourself in the serene ambiance of our resort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card Item */}
          <div className='col-lg-6' data-aos='fade-up' data-aos-delay={400}>
            <div className='card-item'>
              <div className='row'>
                <div className='col-xl-5'>
                  <div
                    className='card-bg'
                    style={{
                      backgroundImage: 'url(assets/img/resort/pool_wide1.jpg)',
                    }}
                  />
                </div>
                <div className='col-xl-7 d-flex align-items-center'>
                  <div className='card-body'>
                    <h4 className='card-title'>
                      Infinity Waters - Soak up the Panoramic Views of Wayanad's Rolling Hills
                    </h4>
                    <p>
                      Nestled amidst lush paddy fields and verdant trees, our infinity swimming pool offers a refreshing escape from the tropical heat, while providing stunning panoramic views of the breathtaking natural beauty of Wayanad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Card Item */}
        </div>
      </div>
    </section>
  );
};
