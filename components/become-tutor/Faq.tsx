import React from 'react';

const faqs = [
  { question: "What kind of tutors does Linoone look for?", answer: "We are looking for passionate, knowledgeable, and patient tutors who are experts in their subjects. A teaching certificate or experience is a plus, but not always required." },
  { question: "What subject can I teach?", answer: "You can teach over 100 subjects on Linoone, from languages and school subjects to hobbies and art. If you're an expert in something, chances are you can teach it here." },
  { question: "How do I become an online tutor at Linoone?", answer: "Simply click 'Create a tutor profile', fill out your profile, record a short video introduction, and set your availability. Our team will review your application and get back to you." },
  { question: "How can I get my profile approved quickly?", answer: "To get approved quickly, make sure your profile is complete, your video is clear and friendly, and you have provided all necessary information about your qualifications and experience." },
  { question: "Why should I teach on Linoone?", answer: "Linoone offers you the flexibility to set your own schedule and rates, access to millions of students worldwide, a secure payment system, and a supportive community of fellow tutors." },
  { question: "What computer equipment do I need to teach on Linoone?", answer: "You'll need a computer with a stable internet connection, a webcam, and a microphone. Our built-in video platform makes it easy to connect with students." },
  { question: "Is it free to create a tutor profile on Linoone?", answer: "Yes, creating a tutor profile is completely free. We only take a commission from the lessons you teach." },
  { question: "How much can I earn on Linoone?", answer: "Your earnings depend on your hourly rate and the number of hours you teach. Top tutors on Linoone earn very competitive incomes." },
];

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <details className="group border-b border-gray-200 py-6">
        <summary className="flex items-center justify-between cursor-pointer list-none">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-cyan-600">{question}</h3>
            <svg className="w-6 h-6 text-gray-500 transform transition-transform duration-300 group-open:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </summary>
        <p className="mt-4 text-gray-600">{answer}</p>
    </details>
);

const Faq: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center">Frequently asked questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
       <p className="text-center mt-10 text-gray-600">
          Have more questions? <a href="#" className="text-cyan-600 font-semibold hover:underline">Check our Help center</a> or <a href="#" className="text-cyan-600 font-semibold hover:underline">contact our support team</a>
      </p>
    </div>
  );
};

export default Faq;
