import React from 'react';

const ClientSidePage: React.FC = () => (
  <div className="bg-gradient-to-br from-pink-100 to-purple-200 min-h-screen flex items-center justify-center p-4">
    <div className="max-w-2xl w-full">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden p-8 transform transition-all hover:scale-[1.01] duration-300">
        {/* Header with animated heart */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 pacifico">
            I Love You Baby-Gorilla
          </h1>
          <div className="flex justify-center mt-4">
            <svg className="w-12 h-12 text-pink-500 heart-beat" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
        {/* Gorilla image */}
        <div className="flex justify-center mb-8 floating">
          <img src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png" alt="Cute Gorilla" className="w-32 h-32" />
        </div>
        {/* Love message */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-pink-200">
          <p className="text-gray-800 comfortaa text-lg leading-relaxed mb-4">
            Hi baby, I love you so much. And I know you've been overthinking so much. And that's making you feel tired or insecure. But don't worry, I'm with you. And I will be here with you.
          </p>
          <p className="text-gray-800 comfortaa text-lg leading-relaxed mb-4">
            Supporting you with all the things that's possible. And you know, there are things that you're worried about. Like exams, that's been going on recently. And you have it tomorrow too. So all the best for it.
          </p>
          <p className="text-gray-800 comfortaa text-lg leading-relaxed mb-4">
            I love you so much. Wait, not tomorrow, it's today. I love you so much, and all the best for it. You're good, and I'm so proud of you. No matter what happens, you can count on me.
          </p>
          <p className="text-gray-800 comfortaa text-lg leading-relaxed mb-4">
            Always, forever, and ever. Just do good. And don't worry about anything. Me, and anything. I will be always there with you. But currently you have exams, so that's more important to you. Focus on it, and you can count on me.
          </p>
          <p className="text-gray-800 comfortaa text-lg leading-relaxed mb-4">
            Supporting you in all that is the best possible. You're still the only person that's really great. I'm happy that you're mine, and I love you. And you know, you will do good. So just don't worry about anything else. Focus on your exams. I love you.
          </p>
        </div>
        {/* Footer with hearts */}
        <div className="mt-8 flex justify-center space-x-4">
          <svg className="w-8 h-8 text-pink-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
          </svg>
          <svg className="w-10 h-10 text-red-500 heart-beat" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
          </svg>
          <svg className="w-8 h-8 text-pink-400 animate-pulse delay-75" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
    {/* Inline styles for custom fonts and animations */}
    <style>
      {`
        .pacifico {
          font-family: 'Pacifico', cursive;
        }
        .comfortaa {
          font-family: 'Comfortaa', cursive;
        }
        .heart-beat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}
    </style>
    {/* Google Fonts */}
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Comfortaa:wght@400;700&display=swap" rel="stylesheet" />
  </div>
);

export default ClientSidePage;