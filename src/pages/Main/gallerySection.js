export const Project = () => {
  return (
    <section id='projects' className='projects'>
      <div className='container' data-aos='fade-up'>
        <div className='section-header'>
          <h2>Gallery</h2>
          <p>
            Explore our gallery and get a glimpse of the stunning natural
            beauty, world-class amenities, and warm hospitality that await you
            at Paddy View Resort.
          </p>
        </div>
        <div
          className='portfolio-isotope'
          data-portfolio-filter='*'
          data-portfolio-layout='masonry'
          data-portfolio-sort='original-order'
        >
          <ul
            className='portfolio-flters'
            data-aos='fade-up'
            data-aos-delay={100}
          >
            <li data-filter='*' className='filter-active'>
              All
            </li>
            <li data-filter='.filter-remodeling'>Day</li>
            <li data-filter='.filter-construction'>Night</li>
            <li data-filter='.filter-design'>Bedroom</li>
          </ul>
          <div
            className='row gy-4 portfolio-container'
            data-aos='fade-up'
            data-aos-delay={200}
          >
            <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/costly_villa_day.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Day 1</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-construction'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/main_villa_day.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Day 2</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item --

    </div> End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/villa4_day.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Day 3</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/vila_rich_night.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Night 1</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-construction'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/main_villa_night.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Night 2</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/villa2_night.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Night 3</h4>
                </div>
              </div>
            </div>

            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/restaurant_night.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Night 4</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/office_ night.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Night 5</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/restaurant_inside2.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Night 6</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/hut_night1.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Hut 1</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/hut4_night.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Hut 2</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/hut_moonLight2.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Hut 3</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/bed_2.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Bedroom 1</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-construction'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/bed_3.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Bedroom 2</h4>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/furniture2.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Bedroom 3</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/tv_wall1.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Bedroom 3</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/tv_wall2.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Bedroom 4</h4>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/play_area_night.jpg'
                  className='img-fluid'
                  alt='best all inclusive resorts in Wayanad'
                />
                <div className='portfolio-info'>
                  <h4>Play Area</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
