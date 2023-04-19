export const Videos = () => {
  return (
    <section id='constructions' className='constructions'>
      <div className='container' data-aos='fade-up'>
        <div className='section-header'>
          <h2>Videos</h2>
          <p>
          Take a look at this video to know more about Paddy View Resort
          </p>
        </div>
        <div className='row gy-12'>
          <div className='col-lg-12' data-aos='fade-up' data-aos-delay={100}>
            <div className='card-item'>
              <div className='row'>
                <div className='col-xl-12 align-items-center'>
                  <div className='card-body'>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/txSpq5ftkFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
