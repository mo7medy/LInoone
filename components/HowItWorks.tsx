import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Find your tutor.',
    description: "We'll connect you with a tutor who motivates, challenges, and supports you — from first lesson to fluency.",
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    number: 2,
    title: 'Start learning.',
    description: 'Your tutor will tailor every lesson to your learning goals, so progress feels personal from the very beginning.',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    number: 3,
    title: 'Make progress every week.',
    description: 'Choose how many lessons you want to take and build lasting confidence, one conversation at a time.',
    image: 'https://picsum.photos/400/300?random=5'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">How Linoone works:</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="border border-gray-200 rounded-lg p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-bold text-lg mr-4">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">{step.description}</p>
            <img src={step.image} alt={step.title} className="rounded-md object-cover w-full h-48" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;