import { AlternateServices } from './altServicesSection';
import { Construction } from './facilitiesSection';
import { Features } from './featuresSection';
import { Project } from './gallerySection';
import { Services } from './servicesSection';
import { Videos } from './videoSection';

export const Main = () => {
  return (
    <main id='main'>
      <Videos />
      <Construction />
      <Services />
      <AlternateServices />
      <Features />
      <Project />      
    </main>
  );
};
