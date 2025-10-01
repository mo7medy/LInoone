import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
        // Delay showing banner slightly
        setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl p-4 animate-fade-in-up">
      <div className="flex flex-col">
        <p className="text-sm text-gray-700">
          Linoone uses cookies according to the settings of your browser. Detailed information can be found in the{' '}
          <a href="#" className="font-medium text-cyan-600 underline hover:text-cyan-500">
            Cookie Policy
          </a>.
        </p>
        <button
          onClick={handleAccept}
          className="mt-4 w-full bg-cyan-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Got it
        </button>
      </div>
       <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;