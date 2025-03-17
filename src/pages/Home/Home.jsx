import React, { lazy } from 'react';

// Lazy load components
const Hero = lazy(() => import('../../components/Hero/Hero'));
const UniqueApproach = lazy(() => import('../../components/UniqueApproach/UniqueApproach'));
const Services = lazy(() => import('../../components/Services/Services'));
const Industries = lazy(() => import('../../components/Industries/Industries'));
const GIFSection = lazy(() => import('../../components/GIFSection/GIFSection'));
const Locations = lazy(() => import('../../components/Locations/Locations'));
const BuisnessFormula = lazy(() => import('../../components/BuisnessFormula/BuisnessFormula'));



function Home() {
  return (
    <div className=''>
      {/* comment */}
      <Hero />
      <UniqueApproach />
      {/* testing only */}
      <Services />
      <BuisnessFormula />

      <Industries />
      <GIFSection />
      <Locations />
    </div>
  );
}

export default Home;
