import React from 'react';
import { Tutor } from '../../data/tutors';
import { StarIcon, HeartIcon, PlayCircleIcon, MessageIcon } from '../icons/Icons';

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 transition-shadow hover:shadow-xl flex flex-col lg:flex-row gap-6">
      {/* Left Section: Tutor Info */}
      <div className="flex-shrink-0 lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="relative">
          <img src={tutor.image} alt={tutor.name} className="w-32 h-32 rounded-full object-cover" />
          <span className="absolute bottom-1 right-2 block h-5 w-5 rounded-full bg-green-500 border-2 border-white"></span>
        </div>
      </div>

      {/* Middle Section: Details & Bio */}
      <div className="flex-grow lg:w-1/2">
        <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
            <h2 className="text-xl font-bold text-gray-900">{tutor.name}</h2>
            <img src={`https://flagcdn.com/w20/${tutor.countryCode}.png`} alt={tutor.country} />
        </div>
        <div className="flex gap-2 mb-2 flex-wrap justify-center lg:justify-start">
            {tutor.isProfessional && <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Professional</span>}
            {tutor.isSuperTutor && <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Super Tutor</span>}
        </div>
        <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Speaks:</span> {tutor.speaks.join(', ')}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-2">{tutor.bio} <button className="font-semibold text-cyan-600 hover:underline">Learn more</button></p>
        <div className="flex items-center gap-4 text-sm text-gray-500 justify-center lg:justify-start">
            <div className="flex items-center gap-1">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <span className="font-bold text-gray-800">{tutor.rating.toFixed(1)}</span>
                <span>({tutor.reviews} reviews)</span>
            </div>
            <span>•</span>
            <span><span className="font-bold text-gray-800">{tutor.lessons}</span> lessons</span>
        </div>
      </div>
      
      {/* Right Section: Video & Actions */}
      <div className="lg:w-1/4 flex flex-col gap-4">
        <div 
          className="relative rounded-lg overflow-hidden aspect-video bg-cover bg-center cursor-pointer group"
          style={{ backgroundImage: `url(${tutor.videoThumbnail})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
            <PlayCircleIcon className="w-16 h-16 text-white text-opacity-80 transform group-hover:scale-110 transition-transform" />
          </div>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-gray-900">${tutor.price}<span className="text-sm font-normal text-gray-500">/50-min</span></p>
            <button className="text-gray-400 hover:text-red-500"><HeartIcon className="w-6 h-6" /></button>
        </div>
        <div className="flex flex-col gap-2">
            <button className="w-full bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">Book trial lesson</button>
            <button className="w-full bg-white text-cyan-600 font-bold py-2 px-4 rounded-md border border-cyan-500 hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2">
                <MessageIcon className="w-5 h-5" />
                Message
            </button>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
