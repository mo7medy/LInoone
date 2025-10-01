import React from 'react';
import { SearchIcon } from '../icons/Icons';

const AdminHeader: React.FC = () => {
    return (
        <header className="flex items-center justify-between h-16 px-6 py-4 bg-white border-b">
            <div className="flex items-center">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <SearchIcon className="w-5 h-5 text-gray-400" />
                    </span>
                    <input
                        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:bg-white focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-cyan-500"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <img
                        className="object-cover w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=200"
                        alt="Admin Avatar"
                    />
                    <h3 className="mx-2 text-sm font-medium text-gray-700">Admin User</h3>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
