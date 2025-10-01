import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TutorSearchFilters from '../components/tutors/TutorSearchFilters';
import TutorList from '../components/tutors/TutorList';
import Pagination from '../components/tutors/Pagination';
import FaqSection from '../components/tutors/FaqSection';
import { tutors } from '../data/tutors';
import { Page } from '../App';

interface FindTutorsPageProps {
    navigateTo: (page: Page) => void;
}

const FindTutorsPage: React.FC<FindTutorsPageProps> = ({ navigateTo }) => {
  return (
    <>
      <Header navigateTo={navigateTo} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TutorSearchFilters />
        <TutorList tutors={tutors} />
        <Pagination />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
};

export default FindTutorsPage;
