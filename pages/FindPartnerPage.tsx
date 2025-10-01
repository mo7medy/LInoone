
import React from 'react';
import { Page } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PartnerFilters from '../components/partners/PartnerFilters';
import PartnerList from '../components/partners/PartnerList';
import { partners } from '../data/partners';

interface FindPartnerPageProps {
    navigateTo: (page: Page) => void;
}

const FindPartnerPage: React.FC<FindPartnerPageProps> = ({ navigateTo }) => {
    return (
        <>
            <Header navigateTo={navigateTo} />
            <main className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900">Find a Practice Partner</h1>
                        <p className="mt-2 text-lg text-gray-600">Connect with other language learners for free and practice together.</p>
                    </div>

                    <div className="mt-10">
                        <PartnerFilters />
                    </div>

                    <div className="mt-8">
                        <PartnerList partners={partners} navigateTo={navigateTo} />
                    </div>
                </div>
            </main>
            <Footer navigateTo={navigateTo} />
        </>
    );
};

export default FindPartnerPage;
