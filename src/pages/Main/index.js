import { AlternateServices } from './altServicesSection';
import { Blog } from './blog';
import { Construction } from './constructionSection';
import { Features } from './featuresSection';
import { Project } from './projectSection';
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
