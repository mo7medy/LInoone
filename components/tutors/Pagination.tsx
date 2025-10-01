import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

const Pagination: React.FC = () => {
  const currentPage = 1;
  const totalPages = 3784;

  return (
    <div className="flex items-center justify-center py-8">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a
          href="#"
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" />
        </a>
        <a
          href="#"
          aria-current="page"
          className="z-10 bg-cyan-50 border-cyan-500 text-cyan-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          1
        </a>
        <a
          href="#"
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          2
        </a>
        <a
          href="#"
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
        >
          3
        </a>
        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
        <a
          href="#"
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
        >
          {totalPages}
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" />
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
