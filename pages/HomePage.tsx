import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import LanguageGrid from '../components/LanguageGrid';
import Progress from '../components/Progress';
import HowItWorks from '../components/HowItWorks';
import GuaranteeBanner from '../components/GuaranteeBanner';
import TutorBusiness from '../components/TutorBusiness';
import Footer from '../components/Footer';
import { Page } from '../App';

interface HomePageProps {
    navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <>
      <Header navigateTo={navigateTo} />
      <main>
        <Hero navigateTo={navigateTo} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stats />
          <LanguageGrid />
        </div>
        <Progress />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HowItWorks />
        </div>
        <GuaranteeBanner />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TutorBusiness />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
