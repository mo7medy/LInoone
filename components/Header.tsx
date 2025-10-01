import React, { useState } from 'react';
import { GlobeIcon, ChevronDownIcon, HelpCircleIcon } from './icons/Icons';
import { Page } from '../App';

interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
    {children}
  </button>
);

interface HeaderProps {
    navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button onClick={() => navigateTo('home')} className="flex-shrink-0 text-2xl font-bold text-cyan-500">
              Linoone
            </button>
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink onClick={() => navigateTo('tutors')}>Find tutors</NavLink>
              <NavLink onClick={() => navigateTo('find-partner')}>Practice Partners</NavLink>
              <NavLink onClick={() => navigateTo('become-tutor')}>Become a tutor</NavLink>
              <NavLink onClick={() => {}}>Proven Progress</NavLink>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <GlobeIcon className="w-5 h-5 mr-1" />
              <span>English, USD</span>
              <ChevronDownIcon className="w-4 h-4 ml-1" />
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">
                <HelpCircleIcon className="w-6 h-6" />
            </a>
            <button
              onClick={() => navigateTo('login')}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Log In
            </button>
             <button
              onClick={() => navigateTo('student-signup')}
              className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 transition-colors"
            >
              Sign up
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => {navigateTo('tutors'); setIsMenuOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Find tutors</button>
            <button onClick={() => {navigateTo('find-partner'); setIsMenuOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Practice Partners</button>
            <button onClick={() => {navigateTo('become-tutor'); setIsMenuOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Become a tutor</button>
            <button onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Proven Progress</button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-2">
                <button onClick={() => {navigateTo('login'); setIsMenuOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Log In</button>
                <button onClick={() => {navigateTo('student-signup'); setIsMenuOpen(false);}} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-cyan-500 hover:bg-cyan-600">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;