import React, { useState, useEffect } from 'react';
import { ChevronDown, Database, BarChart3, Cloud, Cpu } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 transform ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Name & Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-thin text-gray-900 mb-4 tracking-tight">
            Thrivikrama Rao
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6">
            Data Engineer
          </h2>
        </div>

        {/* Tagline */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Transforming raw data into strategic insights with 
            <span className="text-blue-600 font-medium"> 4+ years</span> of experience 
            across Retail, Healthcare, and Finance domains
          </p>
        </div>

        {/* Tech Icons */}
        <div className="flex justify-center space-x-8 mb-16">
          {[
            { icon: Database, label: 'Data Pipelines' },
            { icon: BarChart3, label: 'Analytics' },
            { icon: Cloud, label: 'Cloud Platforms' },
            { icon: Cpu, label: 'ML & AI' }
          ].map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center transition-all duration-700 delay-${index * 200} transform ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300">
                <item.icon className="w-8 h-8 text-gray-700" />
              </div>
              <span className="text-sm text-gray-600 font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Glass Morphism Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent backdrop-blur-sm"></div>
    </section>
  );
};

export default Hero;