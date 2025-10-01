import React from 'react';
import { ArrowRightIcon } from './icons/Icons';
import { Page } from '../App';

interface HeroProps {
    navigateTo: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  return (
    <div className="bg-cyan-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Learn faster</span>
                <span className="block">with your best</span>
                <span className="block text-white">language tutor.</span>
              </h1>
              <p className="mt-3 text-base text-cyan-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Connect with certified tutors for personalized lessons. Achieve fluency and confidence from anywhere in the world.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => navigateTo('tutors')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
                  >
                    Find your tutor <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full relative">
            <img className="absolute bottom-0 right-20 h-4/5 w-auto rounded-lg shadow-2xl transform rotate-3" src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop" alt="Tutor 1" />
            <img className="absolute bottom-0 right-4 h-3/4 w-auto rounded-lg shadow-2xl transform -rotate-2" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" alt="Tutor 2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
