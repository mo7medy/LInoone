import React from 'react';
import { Page } from '../../App';

interface TutorTestimonialProps {
    navigateTo: (page: Page) => void;
}

const TutorTestimonial: React.FC<TutorTestimonialProps> = ({ navigateTo }) => {
    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
                <blockquote className="text-3xl md:text-4xl font-bold text-gray-900">
                    "Linoone allowed me to make a living without leaving home!"
                </blockquote>
                <p className="mt-6 text-gray-600">Krista A. &middot; English tutor</p>
                <div className="mt-8">
                    <button
                        onClick={() => navigateTo('tutor-signup')}
                        className="px-8 py-3 border border-cyan-500 text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-50 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                        Create a tutor profile now
                    </button>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <img 
                    className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1887&auto=format&fit=crop"
                    alt="Krista A."
                />
            </div>
        </div>
    );
};

export default TutorTestimonial;
