import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import FindTutorsPage from './pages/FindTutorsPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import CookieBanner from './components/CookieBanner';

export type Page = 'home' | 'tutors';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-white font-sans">
      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'tutors' && <FindTutorsPage navigateTo={navigateTo} />}
      <ScrollToTopButton />
      <CookieBanner />
    </div>
  );
};

export default App;
