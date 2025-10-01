import React from 'react';
import { Page } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/become-tutor/Hero';
import KeyFeatures from '../components/become-tutor/KeyFeatures';
import TeachGlobally from '../components/become-tutor/TeachGlobally';
import TutorTestimonial from '../components/become-tutor/TutorTestimonial';
import Faq from '../components/become-tutor/Faq';
import FinalCTA from '../components/become-tutor/FinalCTA';

interface BecomeTutorPageProps {
    navigateTo: (page: Page) => void;
}

const BecomeTutorPage: React.FC<BecomeTutorPageProps> = ({ navigateTo }) => {
    return (
        <>
            <Header navigateTo={navigateTo} />
            <main>
                <Hero navigateTo={navigateTo} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <KeyFeatures />
                    <TeachGlobally navigateTo={navigateTo} />
                </div>
                <div className="bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                        <TutorTestimonial navigateTo={navigateTo} />
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Faq />
                </div>
                <FinalCTA navigateTo={navigateTo} />
            </main>
            <Footer navigateTo={navigateTo} />
        </>
    );
};

export default BecomeTutorPage;
