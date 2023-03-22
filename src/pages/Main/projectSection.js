export const Project = () => {
  return (
    <section id='projects' className='projects'>
      <div className='container' data-aos='fade-up'>
        <div className='section-header'>
          <h2>Gallery</h2>
          <p>
            Consequatur libero assumenda est voluptatem est quidem illum et
            officia imilique qui vel architecto accusamus fugit aut qui
            distinctio
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
            <li data-filter='.filter-remodeling'>Interior</li>
            <li data-filter='.filter-construction'>Exterior</li>
            {/* <li data-filter=".filter-repairs">Repairs</li> */}
            <li data-filter='.filter-design'>Bedroom</li>
          </ul>
          {/* End Projects Filters */}
          <div
            className='row gy-4 portfolio-container'
            data-aos='fade-up'
            data-aos-delay={200}
          >
            <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/hut1_day.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Interior 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-construction'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/hut3_night.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Exterior 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/construction-1.jpg" title="Construction 1" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item --

    <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
      <div class="portfolio-content h-100">
        <img src="assets/img/projects/repairs-1.jpg" class="img-fluid" alt="">
        <div class="portfolio-info">
          <h4>Repairs 1</h4>
          <p>Lorem ipsum, dolor sit amet consectetur</p>
          <-- <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
            {/* </div>
      </div>
    </div> End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/hut4_day.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Bedroom 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/design-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/hut4_night.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Interior 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/remodeling-2.jpg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-construction'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/main_villa_day.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Exterior 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/construction-2.jpg" title="Construction 2" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            {/* <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
      <div class="portfolio-content h-100">
        <img src="assets/img/projects/repairs-2.jpg" class="img-fluid" alt="">
        <div class="portfolio-info">
          <h4>Repairs 2</h4>
          <p>Lorem ipsum, dolor sit amet consectetur</p>
          <-- <a href="assets/img/projects/repairs-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
            {/* </div>
      </div>
    </div>End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/main_villa_day.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Bedroom 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/design-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-remodeling'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/main_villa_day.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Interior 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/remodeling-3.jpg" title="Remodeling 3" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-construction'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/main_villa_day.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Exterior 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/construction-3.jpg" title="Construction 3" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item */}
            {/* <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
      <div class="portfolio-content h-100">
        <img src="assets/img/projects/repairs-3.jpg" class="img-fluid" alt="">
        <div class="portfolio-info">
          <h4>Repairs 3</h4>
          <p>Lorem ipsum, dolor sit amet consectetur</p>
          <-- <a href="assets/img/projects/repairs-3.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
            {/* </div>
      </div>
    </div> */}
            {/* End Projects Item */}
            <div className='col-lg-4 col-md-6 portfolio-item filter-design'>
              <div className='portfolio-content h-100'>
                <img
                  src='assets/img/resort/main_villa_day.jpg'
                  className='img-fluid'
                  alt=''
                />
                <div className='portfolio-info'>
                  <h4>Bedroom 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  {/* <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                </div>
              </div>
            </div>
            {/* End Projects Item */}
          </div>
          {/* End Projects Container */}
        </div>
      </div>
    </section>
  );
};
