import { VideoIframe } from  './youtubeIframe'
export const Videos = () => {
  const videoId = "txSpq5ftkFo";
  const videoTitle = "Videos";
  return (
    <section id='constructions' className='constructions'>
      <div className='container' data-aos='fade-up'>
        <div className='section-header'>
          <h2>Video</h2>
          <p>
          Take a look at this video to know more about Paddy View Resort
          </p>
        </div>
        <div className='row gy-12'>
          <div className='col-lg-12' data-aos='fade-up' data-aos-delay={100}>
            <div className='card-item'>
              <div className='row'>
                <div className='col-xl-12 align-items-center'>
                  {/* <div className='card-body'> */}
                    <VideoIframe videoId={videoId} videoTitle={videoTitle} />
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
