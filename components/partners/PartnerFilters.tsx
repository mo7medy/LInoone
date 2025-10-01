
import React from 'react';
import { ChevronDownIcon, SearchIcon } from '../icons/Icons';

const FilterDropdown: React.FC<{ label: string; options: string[] }> = ({ label, options }) => (
  <div className="relative">
    <select className="appearance-none w-full bg-white border border-gray-300 rounded-md pl-4 pr-10 py-3 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500">
      <option>{label}</option>
      {options.map(opt => <option key={opt}>{opt}</option>)}
    </select>
    <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
  </div>
);

const PartnerFilters: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FilterDropdown label="I speak..." options={['English', 'Spanish', 'French', 'German']} />
        <FilterDropdown label="I want to learn..." options={['Japanese', 'German', 'English', 'Italian']} />
        <FilterDropdown label="Sort by" options={['Recently active', 'Best match']} />
        <button className="w-full bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2">
            <SearchIcon className="w-5 h-5" />
            Find Partners
        </button>
      </div>
    </div>
  );
};

export default PartnerFilters;
