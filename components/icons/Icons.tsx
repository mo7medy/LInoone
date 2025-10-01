
import React from 'react';

type IconProps = {
  className?: string;
};

export const GlobeIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const HelpCircleIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
);

export const HeartIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

export const PlayCircleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="white" />
    </svg>
);

export const MessageIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);


// Language Icons
export const BigBenIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8l-4 4"/><path d="M12 8l4 4"/><path d="M16 4h-8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z"/><path d="M12 11h.01"/></svg>;
export const SpanishIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v16h16"/><path d="M4 12h16"/><path d="M12 4v16"/></svg>;
export const GermanIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6v12h12"/><path d="M6 12h12"/></svg>;
export const ItalianIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2h8v20H8z"/><path d="M2 2h6v20H2z"/><path d="M16 2h6v20h-6z"/></svg>;
export const FrenchIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L8 22h8L12 2z"/><path d="M4 22h16"/></svg>;
export const ChineseIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V10M6 14h12M12 10a4 4 0 100-8 4 4 0 000 8z"/><path d="M20 18h-8v-4h8v4z"/></svg>;
export const ArabicIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V2h16v20"/><path d="M14 12c-2 0-4-1-4-3s2-3 4-3c2 0 4 1 4 3s-2 3-4 3z"/><path d="M12 12v6"/></svg>;
export const JapaneseIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>;
export const PortugueseIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9v6h20V9z"/><path d="M2 3h20v6H2z"/><circle cx="12" cy="12" r="3"/></svg>;
export const RussianIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16m-8-8v16m4-14h-8"/></svg>;
export const KoreanIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a5 5 0 00-5 5c0 4 5 7 5 7s5-3 5-7a5 5 0 00-5-5z"/></svg>;
export const DutchIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20v6H2zm0 8h20v6H2z"/></svg>;


// Social Icons
export const FacebookIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1 0-1.5.5-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>;
export const InstagramIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.7 2 8.3 2.02 7.1 2.07c-1.2.05-2.1.27-2.9.58-.8.3-1.5.7-2.2 1.4s-1.1 1.4-1.4 2.2c-.3.8-.53 1.7-.58 2.9C2.02 8.7 2 9.1 2 12s.02 3.3.07 4.5c.05 1.2.27 2.1.58 2.9.3.8.7 1.5 1.4 2.2s1.4 1.1 2.2 1.4c.8.3 1.7.53 2.9.58 1.2.05 1.6.07 4.9.07s3.7-.02 4.9-.07c1.2-.05 2.1-.27 2.9-.58.8-.3 1.5-.7 2.2-1.4s1.1-1.4 1.4-2.2c.3-.8.53-1.7.58-2.9.05-1.2.07-1.6.07-4.9s-.02-3.7-.07-4.9c-.05-1.2-.27-2.1-.58-2.9-.3-.8-.7-1.5-1.4-2.2s-1.4-1.1-2.2-1.4c-.8-.3-1.7-.53-2.9-.58C15.7 2.02 15.3 2 12 2zm0 1.8c3.2 0 3.6 0 4.8.07 1.1.05 1.8.25 2.2.4.5.2.9.5 1.3.9s.7.8.9 1.3c.15.4.35 1.1.4 2.2.07 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.05 1.1-.25 1.8-.4 2.2-.2.5-.5.9-.9 1.3s-.8.7-1.3.9c-.4.15-1.1.35-2.2.4-1.2.07-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.1-.05-1.8-.25-2.2-.4-.5-.2-.9-.5-1.3-.9s-.7-.8-.9-1.3c-.15-.4-.35-1.1-.4-2.2C4.02 15.6 4.02 15.2 4.02 12s0-3.6.07-4.8c.05-1.1.25-1.8.4-2.2.2-.5.5-.9.9-1.3s.8-.7 1.3-.9c.4-.15 1.1-.35 2.2-.4C8.4 3.82 8.8 3.8 12 3.8zm0 3.35c-2.7 0-4.85 2.15-4.85 4.85S9.3 16.85 12 16.85s4.85-2.15 4.85-4.85S14.7 7.15 12 7.15zm0 8.1c-1.8 0-3.25-1.45-3.25-3.25S10.2 8.75 12 8.75s3.25 1.45 3.25 3.25-1.45 3.25-3.25 3.25zm6.3-8.8c-.7 0-1.25-.55-1.25-1.25s.55-1.25 1.25-1.25 1.25.55 1.25 1.25-.55 1.25-1.25 1.25z"/></svg>;
export const YoutubeIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 7.19c-.23-.86-.9-1.52-1.76-1.76C18.25 5 12 5 12 5s-6.25 0-7.82.43c-.86.24-1.53.9-1.76 1.76C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.9 1.52 1.76 1.76C5.75 19 12 19 12 19s6.25 0 7.82-.43c.86-.24 1.53-.9 1.76-1.76C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.5 15.5V8.5l6 3.5-6 3.5z"/></svg>;
export const LinkedinIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-11 5H5v10h3V8zm-1.5-2.25A1.75 1.75 0 104.75 4 1.75 1.75 0 006.5 5.75zM17 8h-2c-1.66 0-3 1.34-3 3v7h3v-5c0-.55.45-1 1-1s1 .45 1 1v5h3v-6c0-2.76-2.24-5-5-5z"/></svg>;
export const TiktokIcon: React.FC<IconProps> = (props) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22.25 8.72h-3.47v6.8c0 3.1-2.5 5.6-5.6 5.6s-5.6-2.5-5.6-5.6V1.75h3.47v10.5c0 1.18.97 2.13 2.13 2.13s2.13-.95 2.13-2.13V1.75h3.47v6.97z"/></svg>;
