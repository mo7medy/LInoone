import React from 'react';

const faqs = [
  {
    question: "How do online English lessons with Linoone work?",
    answer: "Booking and following a lesson with an online English tutor at Linoone is easy. You can use filters to narrow the search results for your needs and budget range. You can choose based on specialty, price, etc. After booking, your lessons will take place in our video platform."
  },
  {
    question: "How can Linoone help me learn English online?",
    answer: "Our English tutors have experience teaching at every level. They all go through a background check to ensure their credentials are legitimate and that you get the highest quality online English lessons."
  },
  {
    question: "Why learn English with Linoone?",
    answer: "We offer several benefits: Native speakers, a personal approach tailored to you, convenience to fit your schedule, and affordability. Plus, you can trust our tutors are thoroughly vetted."
  },
];

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    return (
        <details className="group border-b border-gray-200 py-4">
            <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-medium text-gray-900">{question}</h3>
                 <svg className="w-6 h-6 text-gray-500 transform transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <p className="mt-2 text-gray-600">{answer}</p>
        </details>
    );
};


const FaqSection: React.FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions (FAQ)</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
