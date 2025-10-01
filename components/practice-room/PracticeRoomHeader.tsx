import React from 'react';
import { Page } from '../../App';
import { ArrowLeftIcon, VideoCameraIcon, PhoneIcon } from '../icons/Icons';

interface PracticeRoomHeaderProps {
    partnerName: string;
    partnerImage: string;
    navigateTo: (page: Page) => void;
    onStartCall: () => void;
}

const PracticeRoomHeader: React.FC<PracticeRoomHeaderProps> = ({ partnerName, partnerImage, navigateTo, onStartCall }) => {
    return (
        <header className="flex-shrink-0 bg-teal-700 text-white shadow-md z-10">
            <div className="flex items-center justify-between h-16 px-4">
                <div className="flex items-center space-x-3">
                    <button onClick={() => navigateTo('find-partner')} className="p-1 rounded-full hover:bg-teal-600">
                        <ArrowLeftIcon className="w-6 h-6" />
                    </button>
                    <img src={partnerImage} alt={partnerName} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <h1 className="text-lg font-semibold">{partnerName}</h1>
                        <p className="text-xs text-teal-100">online</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-teal-600">
                        <VideoCameraIcon className="w-6 h-6" />
                    </button>
                    <button onClick={onStartCall} className="p-2 rounded-full hover:bg-teal-600">
                        <PhoneIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default PracticeRoomHeader;