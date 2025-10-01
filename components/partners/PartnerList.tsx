
import React from 'react';
import { Page } from '../../App';
import { Partner } from '../../data/partners';
import PartnerCard from './PartnerCard';

interface PartnerListProps {
  partners: Partner[];
  navigateTo: (page: Page) => void;
}

const PartnerList: React.FC<PartnerListProps> = ({ partners, navigateTo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {partners.map(partner => (
        <PartnerCard key={partner.id} partner={partner} navigateTo={navigateTo} />
      ))}
    </div>
  );
};

export default PartnerList;
