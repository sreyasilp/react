import { AlternateServices } from './altServicesSection';
import { Blog } from './blog';
import { Construction } from './facilitiesSection';
import { Features } from './featuresSection';
import { Project } from './gallerySection';
import { Services } from './servicesSection';

export const Main = () => {
  return (
    <main id='main'>
      <Construction />
      <Services />
      <AlternateServices />
      <Project />
      <Features />
      {/* <Blog /> */}
    </main>
  );
};
