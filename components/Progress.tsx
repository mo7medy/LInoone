import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

const testimonials = [
  {
    quote: "97% of learners say practicing with a real person is very important to their progress.",
    source: "From the 2025 Linoone Efficiency Study",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    quote: "After just 3 months, I could hold a conversation in Spanish. My tutor is fantastic!",
    source: "Maria S., Linoone Student",
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    quote: "The flexibility to schedule lessons anytime has been a game-changer for my busy life.",
    source: "John D., Business Professional",
    image: "https://picsum.photos/600/400?random=12"
  }
];

const Progress: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
    
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Progress starts with the right tutor</h2>
          <p className="mt-4 text-lg text-gray-500">2M+ learners. Over 100,000 tutors. Progress that’s personal (and proven).</p>
        </div>
        <div className="mt-12 relative">
            <div className="overflow-hidden relative rounded-lg">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                <div className="md:w-1/2">
                                    <img src={item.image} alt="Student" className="rounded-lg shadow-xl aspect-[4/3] object-cover" />
                                </div>
                                <div className="md:w-1/2 text-center md:text-left">
                                    <p className="text-2xl md:text-3xl font-semibold text-gray-800">"{item.quote}"</p>
                                    <p className="mt-4 text-gray-500">{item.source}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          <button onClick={prevSlide} className="absolute top-1/2 left-0 md:-left-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 md:-right-6 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition ${currentIndex === index ? 'bg-cyan-500' : 'bg-gray-300'}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;