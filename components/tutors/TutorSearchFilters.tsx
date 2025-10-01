import React from 'react';
import { ChevronDownIcon, SearchIcon } from '../icons/Icons';

const FilterDropdown: React.FC<{ label: string; options: string[] }> = ({ label, options }) => (
  <div className="relative">
    <select className="appearance-none w-full bg-white border border-gray-300 rounded-md pl-4 pr-10 py-2 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500">
      <option>{label}</option>
      {options.map(opt => <option key={opt}>{opt}</option>)}
    </select>
    <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
  </div>
);

const TutorSearchFilters: React.FC = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">37,840 English teachers available</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <FilterDropdown label="Price per lesson" options={['$1-10', '$11-20', '$21-30', '$31+']} />
        <FilterDropdown label="Country of birth" options={['USA', 'UK', 'Canada', 'Australia']} />
        <FilterDropdown label="I'm available" options={['Mornings', 'Afternoons', 'Evenings']} />
        <FilterDropdown label="Sort by: Our top picks" options={['Popularity', 'Price: low to high', 'Price: high to low']} />
      </div>
       <div className="relative">
        <input 
          type="text" 
          placeholder="Search by name or keyword" 
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
        />
        <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
  );
};

export default TutorSearchFilters;
