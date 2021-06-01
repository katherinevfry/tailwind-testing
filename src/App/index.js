import React from 'react';
import 'tailwindcss/tailwind.css';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">
          Katy Fry
        </div>
        <p className="text-gray-700 text-base">This is some stuff about me. How cool</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 animate-bounce">#cool</span>
      </div>
      </div>
    </div>
  );
}

export default App;
