
import React, { useState } from 'react';
import { 
    BigBenIcon, SpanishIcon, GermanIcon, ItalianIcon, FrenchIcon, ChineseIcon, 
    ArabicIcon, JapaneseIcon, PortugueseIcon, RussianIcon, KoreanIcon, DutchIcon, 
    ChevronRightIcon, PlusIcon 
} from './icons/Icons';

interface Language {
  name: string;
  tutors: string;
  Icon: React.ElementType;
}

const languages: Language[] = [
  { name: 'English tutors', tutors: '33,595 teachers', Icon: BigBenIcon },
  { name: 'Spanish tutors', tutors: '10,052 teachers', Icon: SpanishIcon },
  { name: 'French tutors', tutors: '3,699 teachers', Icon: FrenchIcon },
  { name: 'German tutors', tutors: '1,506 teachers', Icon: GermanIcon },
  { name: 'Italian tutors', tutors: '2,520 teachers', Icon: ItalianIcon },
  { name: 'Chinese tutors', tutors: '5,216 teachers', Icon: ChineseIcon },
  { name: 'Arabic tutors', tutors: '3,646 teachers', Icon: ArabicIcon },
  { name: 'Japanese tutors', tutors: '2,899 teachers', Icon: JapaneseIcon },
  { name: 'Portuguese tutors', tutors: '1,633 teachers', Icon: PortugueseIcon },
  { name: 'Russian tutors', tutors: '4,123 teachers', Icon: RussianIcon },
  { name: 'Korean tutors', tutors: '1,987 teachers', Icon: KoreanIcon },
  { name: 'Dutch tutors', tutors: '876 teachers', Icon: DutchIcon },
];

const LanguageCard: React.FC<Language> = ({ name, tutors, Icon }) => (
  <a href="#" className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="w-8 h-8 mr-4 text-gray-600" />
    <div className="flex-grow">
      <p className="font-semibold text-gray-800">{name}</p>
      <p className="text-sm text-gray-500">{tutors}</p>
    </div>
    <ChevronRightIcon className="w-6 h-6 text-gray-400" />
  </a>
);

const LanguageGrid: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleLanguages = showAll ? languages : languages.slice(0, 8);

  return (
    <div className="pb-12 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleLanguages.map((lang, index) => (
          <LanguageCard key={index} {...lang} />
        ))}
      </div>
      {!showAll && (
        <div className="mt-8 text-center">
          <button 
            onClick={() => setShowAll(true)}
            className="flex items-center mx-auto px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageGrid;
