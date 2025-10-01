
import React from 'react';
import { StarIcon } from './icons/Icons';

interface Stat {
  value: string;
  label: string;
  sublabel?: React.ReactNode;
}

const stats: Stat[] = [
  { value: '100,000+', label: 'Experienced tutors' },
  { value: '300,000+', label: '5-star tutor reviews' },
  { value: '120+', label: 'Subjects taught' },
  { value: '180+', label: 'Tutor nationalities' },
  { 
    value: '4.8', 
    label: 'on the App Store',
    sublabel: (
        <div className="flex justify-center md:justify-start text-yellow-400">
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5" />
            <StarIcon className="w-5 h-5 text-gray-300" />
        </div>
    )
  },
];

const Stats: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</p>
            {stat.sublabel && <div className="mt-1">{stat.sublabel}</div>}
            <p className="mt-1 text-sm md:text-base text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
