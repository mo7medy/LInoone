import React from 'react';
import { Tutor } from '../../data/tutors';
import TutorCard from './TutorCard';

interface TutorListProps {
  tutors: Tutor[];
}

const TutorList: React.FC<TutorListProps> = ({ tutors }) => {
  return (
    <div className="space-y-6">
      {tutors.map(tutor => (
        <TutorCard key={tutor.id} tutor={tutor} />
      ))}
    </div>
  );
};

export default TutorList;
