
import React from 'react';
import { Page } from '../../App';
import { Partner } from '../../data/partners';
import { ArrowRightIcon } from '../icons/Icons';

interface PartnerCardProps {
  partner: Partner;
  navigateTo: (page: Page) => void;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, navigateTo }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-5">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 relative">
            <img className="h-16 w-16 rounded-full object-cover" src={partner.image} alt={partner.name} />
            {partner.online && <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white"></span>}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-bold text-gray-900 truncate">{partner.name}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Native:</span> {partner.nativeLanguage}
            </p>
             <p className="text-sm text-gray-500">
              <span className="font-medium">Learning:</span> {partner.learningLanguage}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600 h-16">{partner.goal}</p>
      </div>
       <div className="mt-auto px-5 py-3 bg-gray-50 border-t">
         <button 
          onClick={() => navigateTo('practice-room')}
          className="w-full flex items-center justify-center text-sm font-semibold text-cyan-600 hover:text-cyan-800"
        >
          Practice Now <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
       </div>
    </div>
  );
};

export default PartnerCard;
