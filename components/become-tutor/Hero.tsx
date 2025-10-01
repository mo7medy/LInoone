import React from 'react';
import { Page } from '../../App';

interface HeroProps {
    navigateTo: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
    return (
        <div className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                            Make a living by teaching the largest community of learners worldwide
                        </h1>
                        <div className="mt-12">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-black text-white text-xl font-bold rounded-md flex items-center justify-center">1</div>
                                <div className="ml-4 flex-grow">
                                    <h3 className="text-xl font-bold">Sign up</h3>
                                    <p className="text-gray-600 mt-1">to create your tutor profile</p>
                                </div>
                            </div>
                            <div className="w-px bg-gray-300 h-8 ml-6 my-2"></div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-gray-300 text-gray-500 text-xl font-bold rounded-md flex items-center justify-center">2</div>
                                <div className="ml-4 flex-grow">
                                    <h3 className="text-xl font-bold">Get approved</h3>
                                    <p className="text-gray-600 mt-1">by our team in 5 business days</p>
                                </div>
                            </div>
                            <div className="w-px bg-gray-300 h-8 ml-6 my-2"></div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-gray-300 text-gray-500 text-xl font-bold rounded-md flex items-center justify-center">3</div>
                                <div className="ml-4 flex-grow">
                                    <h3 className="text-xl font-bold">Start earning</h3>
                                    <p className="text-gray-600 mt-1">by teaching students all over the world!</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <button
                                onClick={() => navigateTo('tutor-signup')}
                                className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
                            >
                                Create a tutor profile now
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block relative">
                        <img 
                            className="w-full rounded-lg shadow-xl" 
                            src="https://images.unsplash.com/photo-1544717297-fa95b6ee8643?q=80&w=1887&auto=format&fit=crop" 
                            alt="Happy online tutor" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
