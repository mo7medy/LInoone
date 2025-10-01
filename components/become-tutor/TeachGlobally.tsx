import React from 'react';
import { Page } from '../../App';

interface TeachGloballyProps {
    navigateTo: (page: Page) => void;
}

const benefits = [
    "Steady stream of new students",
    "Smart calendar",
    "Interactive classroom",
    "Convenient payment methods",
    "Professional development webinars",
    "Supportive tutor community"
];

const TeachGlobally: React.FC<TeachGloballyProps> = ({ navigateTo }) => {
    return (
        <div className="py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Teach students from over 180 countries</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Linoone tutors teach 800,000+ students globally. Join us and you'll have everything you need to teach successfully.
                    </p>
                    <ul className="mt-8 space-y-4">
                        {benefits.map(benefit => (
                            <li key={benefit} className="flex items-center">
                                <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-700">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10">
                        <button
                             onClick={() => navigateTo('tutor-signup')}
                             className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
                        >
                            Create a tutor profile now
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        className="rounded-lg shadow-xl w-full"
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                        alt="Online tutoring session"
                    />
                </div>
            </div>
        </div>
    );
};

export default TeachGlobally;
