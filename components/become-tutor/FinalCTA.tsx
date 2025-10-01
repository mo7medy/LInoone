import React from 'react';
import { Page } from '../../App';

interface FinalCTAProps {
    navigateTo: (page: Page) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ navigateTo }) => {
    return (
        <div className="py-16 md:py-24">
             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-cyan-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                <span className="block">Get paid to teach online</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-cyan-100">
                                Connect with thousands of learners around the world and teach from your living room.
                            </p>
                            <button
                                onClick={() => navigateTo('tutor-signup')}
                                className="mt-8 bg-black border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base font-medium text-white hover:bg-gray-800 transition-transform transform hover:scale-105"
                            >
                                Create a tutor profile now
                            </button>
                        </div>
                    </div>
                    <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <img 
                            className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                            alt="Person teaching online" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalCTA;
