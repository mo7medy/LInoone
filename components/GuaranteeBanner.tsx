import React from 'react';

const GuaranteeBanner: React.FC = () => {
  return (
    <div className="bg-cyan-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          <span className="block">Lessons you'll love. Guaranteed.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-cyan-100">
          Try another tutor for free if you're not satisfied.
        </p>
      </div>
    </div>
  );
};

export default GuaranteeBanner;