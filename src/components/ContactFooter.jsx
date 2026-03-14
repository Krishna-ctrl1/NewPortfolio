import React from 'react';

const ContactFooter = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 px-6 md:px-20 relative z-10 border-t border-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 hover:text-purple-500 transition-colors duration-300">
          Let's Build.
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Currently architecting end-to-end AI pipelines and exploring Quantum ML. Open for full-time roles and high-impact collaborations.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-24">
          <a href="mailto:krishna.gpt607@gmail.com" className="text-2xl border-b-2 border-transparent hover:border-purple-500 transition-all pb-1">
            krishna.gpt607@gmail.com
          </a>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-800 flex-col md:flex-row gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Krishna Gupta. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/krishnagpt" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/Krishna-ctrl1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;