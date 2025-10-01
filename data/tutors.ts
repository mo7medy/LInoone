export interface Tutor {
  id: number;
  name: string;
  country: string;
  countryCode: string;
  image: string;
  videoThumbnail: string;
  rating: number;
  reviews: number;
  price: number;
  lessons: number;
  students: number;
  isSuperTutor: boolean;
  isProfessional: boolean;
  speaks: string[];
  bio: string;
}

export const tutors: Tutor[] = [
  {
    id: 1,
    name: 'Laura K.',
    country: 'United Kingdom',
    countryCode: 'gb',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1887&auto=format&fit=crop',
    videoThumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop',
    rating: 5,
    reviews: 1,
    price: 30,
    lessons: 50,
    students: 13,
    isSuperTutor: false,
    isProfessional: true,
    speaks: ['English (Native)', 'Slovak (Proficient)'],
    bio: "I'm from the Czech Republic and currently living in San Francisco. I love helping others speak English with confidence.",
  },
  {
    id: 2,
    name: 'Amalya M.',
    country: 'United States',
    countryCode: 'us',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    videoThumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop',
    rating: 5,
    reviews: 4,
    price: 28,
    lessons: 1224,
    students: 8,
    isSuperTutor: true,
    isProfessional: true,
    speaks: ['English (Native)', 'Russian (Proficient)'],
    bio: 'TESOL Certified tutor with over 20 years of teaching experience — Hello! I love helping students achieve their goals.',
  },
  {
    id: 3,
    name: 'Dragan S.',
    country: 'Serbia',
    countryCode: 'rs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    videoThumbnail: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    reviews: 7,
    price: 25,
    lessons: 844,
    students: 14,
    isSuperTutor: true,
    isProfessional: false,
    speaks: ['English (Native)', 'Serbian (Native)'],
    bio: 'Engaging lessons with a certified tutor with years of experience - I’ve spent most of my life in Cyprus and traveling around.',
  },
    {
    id: 4,
    name: 'Medin O.',
    country: 'Bosnia and Herzegovina',
    countryCode: 'ba',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop',
    videoThumbnail: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    reviews: 48,
    price: 35,
    lessons: 1315,
    students: 17,
    isSuperTutor: false,
    isProfessional: true,
    speaks: ['English (C2)', 'Bosnian (Native)'],
    bio: "Want to have a fun time learning English or Bosnian with a tutor that has 13 years of experience? Book me, and let's have some fun!",
  },
  {
    id: 5,
    name: 'Mariam D.',
    country: 'Armenia',
    countryCode: 'am',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    videoThumbnail: 'https://images.unsplash.com/photo-1542103749-8ef59b94f475?q=80&w=2070&auto=format&fit=crop',
    rating: 5,
    reviews: 15,
    price: 33,
    lessons: 1404,
    students: 13,
    isSuperTutor: false,
    isProfessional: true,
    speaks: ['English (C2)', 'Armenian (Native)'],
    bio: "Certified TEFL/TESOL Tutor with 10 Years of Experience Helping Students Succeed — Hello and welcome! I'm Mariam.",
  },
];
