import React from 'react';
import { ArrowRightIcon } from './icons/Icons';

const TutorBusiness: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Become a tutor */}
        <div className="bg-teal-400 rounded-lg p-8 md:p-12 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Become a tutor</h2>
          <p className="mb-6">Earn money sharing your expert knowledge with students. Sign up to start tutoring online with Linoone.</p>
          <ul className="space-y-2 mb-8 list-disc list-inside text-lg">
            <li>Find new students</li>
            <li>Grow your business</li>
            <li>Get paid securely</li>
          </ul>
          <div className="mt-auto">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-100">
              Become a tutor <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Corporate training */}
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate language training for business</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Linoone corporate training is designed for teams and businesses offering personalized language learning with online tutors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Book a demo
            </a>
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Refer your company
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-4">
              <img src="https://picsum.photos/150/200?random=6" alt="Luggage" className="rounded-lg shadow-md" />
              <img src="https://picsum.photos/150/200?random=7" alt="Luggage" className="rounded-lg shadow-md" />
              <img src="https://picsum.photos/150/200?random=8" alt="Luggage" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorBusiness;