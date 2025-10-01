
export interface Partner {
  id: number;
  name: string;
  image: string;
  nativeLanguage: string;
  learningLanguage: string;
  goal: string;
  online: boolean;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: 'Kenji T.',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop',
    nativeLanguage: 'Japanese',
    learningLanguage: 'English',
    goal: 'I want to practice conversational English for my upcoming trip to the US!',
    online: true,
  },
  {
    id: 2,
    name: 'Isabella R.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop',
    nativeLanguage: 'Spanish',
    learningLanguage: 'French',
    goal: 'Looking for a friendly partner to practice my French pronunciation. I can help with Spanish!',
    online: true,
  },
  {
    id: 3,
    name: 'David L.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    nativeLanguage: 'English',
    learningLanguage: 'German',
    goal: 'Beginner in German, trying to build my vocabulary and basic conversation skills.',
    online: false,
  },
  {
    id: 4,
    name: 'Sofia P.',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee8643?q=80&w=1887&auto=format&fit=crop',
    nativeLanguage: 'Portuguese',
    learningLanguage: 'English',
    goal: 'I need to improve my business English for work. Happy to help with Portuguese in return.',
    online: true,
  },
   {
    id: 5,
    name: 'Chen W.',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop',
    nativeLanguage: 'Chinese',
    learningLanguage: 'Spanish',
    goal: 'Intermediate Spanish speaker. I want to become more fluent and natural.',
    online: false,
  },
   {
    id: 6,
    name: 'Fatima A.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop',
    nativeLanguage: 'Arabic',
    learningLanguage: 'English',
    goal: 'I love movies! Let\'s talk about our favorite films in English.',
    online: true,
  },
];
