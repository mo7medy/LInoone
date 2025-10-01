
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import FindTutorsPage from './pages/FindTutorsPage';
import BecomeTutorPage from './pages/BecomeTutorPage';
import TutorSignupPage from './pages/TutorSignupPage';
import CreateTutorProfilePage from './pages/CreateTutorProfilePage';
import StudentSignupPage from './pages/StudentSignupPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import FindPartnerPage from './pages/FindPartnerPage';
// Fix: Correctly import PracticeRoomPage
import PracticeRoomPage from './pages/PracticeRoomPage';
import LoginPage from './pages/LoginPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import CookieBanner from './components/CookieBanner';

export type Page = 'home' | 'tutors' | 'become-tutor' | 'tutor-signup' | 'tutor-profile-setup' | 'student-signup' | 'admin-dashboard' | 'find-partner' | 'practice-room' | 'login';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const isDashboard = currentPage === 'admin-dashboard';
  const isPracticeRoom = currentPage === 'practice-room';

  const shouldShowDefaultChrome = !isDashboard && !isPracticeRoom;

  return (
    <div className={`bg-white font-sans ${isDashboard || isPracticeRoom ? 'bg-gray-100' : ''}`}>
      {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
      {currentPage === 'tutors' && <FindTutorsPage navigateTo={navigateTo} />}
      {currentPage === 'become-tutor' && <BecomeTutorPage navigateTo={navigateTo} />}
      {currentPage === 'tutor-signup' && <TutorSignupPage navigateTo={navigateTo} />}
      {currentPage === 'tutor-profile-setup' && <CreateTutorProfilePage navigateTo={navigateTo} />}
      {currentPage === 'student-signup' && <StudentSignupPage navigateTo={navigateTo} />}
      {currentPage === 'admin-dashboard' && <AdminDashboardPage navigateTo={navigateTo} />}
      {currentPage === 'find-partner' && <FindPartnerPage navigateTo={navigateTo} />}
      {currentPage === 'practice-room' && <PracticeRoomPage navigateTo={navigateTo} />}
      {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}

      
      {shouldShowDefaultChrome && <ScrollToTopButton />}
      {shouldShowDefaultChrome && <CookieBanner />}
    </div>
  );
};

export default App;