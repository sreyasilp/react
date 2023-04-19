import { AlternateServices } from './altServicesSection';
// import { Blog } from './blog';
import { Construction } from './facilitiesSection';
import { Features } from './featuresSection';
import { Project } from './gallerySection';
import { Services } from './servicesSection';
import { Videos } from './videoSection';
// import { VideoIframe } from  './youtubeIframe'

export const Main = () => {
  // const videoId = "txSpq5ftkFo";
  // const videoTitle = "Videos";
  return (
    <main id='main'>
      <Videos />
      {/* <VideoIframe videoId={videoId} videoTitle={videoTitle} /> */}
      <Construction />
      <Services />
      <AlternateServices />
      <Features />
      <Project />
      {/* <Blog /> */}
      
    </main>
  );
};
