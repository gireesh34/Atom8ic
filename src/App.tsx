import React, { useState } from 'react';
import { ChevronDown, Github, Linkedin, Menu, X } from 'lucide-react';
import { Scene3D } from './components/Scene3D';
import { CloudCog } from 'lucide-react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Atom8ic unique?",
      answer: "Our revolutionary blended wing design combines efficiency with cutting-edge AI technology."
    },
    {
      question: "How does the autonomous system work?",
      answer: "Advanced AI algorithms power our autonomous navigation system, ensuring precise and safe delivery."
    },
    {
      question: "What's the maximum payload capacity?",
      answer: "The Atom8ic drone can carry up to 5kg while maintaining optimal flight efficiency."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
        <CloudCog className="h-8 w-8 text-amber-500" />
          <span className="hover:text-blue-400 gold-menu text-2xl font-bold">Atom8ic</span>
         </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="hover:text-blue-400 gold-menu ">Features</a>
                <a href="#model" className="hover:text-yellow-400 gold-menu ">3D-Model</a>
                <a href="#specs" className="hover:text-yellow-400 gold-menu">Specs</a>
                <a href="#faq" className="hover:text-yellow-400 gold-menu ">FAQ</a>
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <a href="#features" className="block px-2 py-2 gold-menu">Features</a>
              <a href="#model" className="block px-3 py-2 gold-menu">3D Model</a>
              <a href="#specs" className="block px-3 py-2 hover:text-yellow-400 gold-menu">Specs</a>
              <a href="#faq" className="block px-3 py-2 hover:text-yellow-400 gold-menu">FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <img 
        src="src/assets/bg.jpg" 
        alt="Background" 
        className="w-full h-full object-cover" 
        />
        {/*
        <img 
        src="https://via.placeholder.com/150"
        alt="Drone Sticker" 
        className="absolute w-32 h-32 object-contain animate-bounce" 
        style={{ top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }} 
        />
        */}
        </div>
        
        <div className="relative z-10 text-center px-4">
            <h1 className="wrapper">
            <div className="bg">Atom8ic</div>
            <div className="fg">Atom8ic</div>
            </h1>
          {/*<h1 className="text-8xl md:text-8xl font-bold mb-8 text-center gold-font">Atom8ic</h1>*/}
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
        The World's Most Advanced Delivery Drone
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-all">
        Learn More
          </button>
        </div>
      </section>
      
              

      

      {/* Features Section */}
      <section id="features" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-4xl text-center mb-16 gold-font">Revolutionary Features</h2>
            
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Blended Wing Design</h3>
              <p className="text-gray-300">Advanced aerodynamics for maximum efficiency and stability</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">AI Navigation</h3>
              <p className="text-gray-300">Autonomous flight with advanced obstacle avoidance</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Smart Delivery</h3>
              <p className="text-gray-300">Precision landing and automated package handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section id="model" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gold-font">Experience Atom8ic</h2>
          <Scene3D />
        </div>
      </section>

      {/* Specs Section */}
      <section id="specs" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gold-font">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Performance</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex justify-between">
                    <span>Maximum Speed</span>
                    <span>120 km/h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Range</span>
                    <span>50 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Flight Time</span>
                    <span>45 minutes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Dimensions</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex justify-between">
                    <span>Wingspan</span>
                    <span>2.4 meters</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Length</span>
                    <span>1.8 meters</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Height</span>
                    <span>0.6 meters</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Payload</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex justify-between">
                    <span>Maximum Capacity</span>
                    <span>5 kg</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cargo Volume</span>
                    <span>30 L</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Technology</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex justify-between">
                    <span>Navigation</span>
                    <span>AI + GPS + LiDAR</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Communication</span>
                    <span>5G + Satellite</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Battery Type</span>
                    <span>Solid State</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gold-font">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-800 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Atom8ic. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Github />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;