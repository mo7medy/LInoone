import React from 'react';
import { Page } from '../../App';
import { HomeIcon, UsersIcon, ChartBarIcon, CogIcon } from '../icons/Icons';

interface SidebarProps {
    navigateTo: (page: Page) => void;
}

const NavItem: React.FC<{ icon: React.ElementType, label: string, active?: boolean, onClick: () => void }> = ({ icon: Icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center w-full px-4 py-2 mt-2 text-sm font-medium transition-colors duration-200 transform rounded-md ${
            active 
            ? 'bg-cyan-500 text-white' 
            : 'text-gray-600 hover:bg-gray-200 hover:text-gray-700'
        }`}
    >
        <Icon className="w-5 h-5" />
        <span className="mx-4">{label}</span>
    </button>
);

const Sidebar: React.FC<SidebarProps> = ({ navigateTo }) => {
    return (
        <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r">
            <h2 onClick={() => navigateTo('home')} className="cursor-pointer text-3xl font-bold text-cyan-500">Linoone</h2>
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <NavItem icon={HomeIcon} label="Dashboard" active onClick={() => navigateTo('admin-dashboard')} />
                    <NavItem icon={UsersIcon} label="Tutors" onClick={() => {}} />
                    <NavItem icon={UsersIcon} label="Students" onClick={() => {}} />
                    <NavItem icon={ChartBarIcon} label="Analytics" onClick={() => {}} />
                    <NavItem icon={CogIcon} label="Settings" onClick={() => {}} />
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
