import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('catalogos');
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setActiveTab('contacto');
        } else {
          setActiveTab('catalogos');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeIndex = activeTab === 'catalogos' ? 0 : 1;
    const currentElement = tabsRef.current[activeIndex];
    
    if (currentElement) {
      setUnderlineStyle({
        width: `${currentElement.offsetWidth}px`,
        transform: `translateX(${currentElement.offsetLeft}px)`,
        transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
      });
    }
  }, [activeTab]);

  return (
    <nav className="bg-surface sticky top-0 z-40 transition-all duration-300 border-b border-surface-variant/30">
      <div className="flex justify-between items-center px-margin-desktop py-stack-md w-full max-w-container-max mx-auto">
        <div className="font-headline-sm text-headline-sm tracking-widest text-primary flex items-center h-12">
          <img src={logo} alt="Regale Lencería" className="h-full object-contain" />
        </div>
        <div className="flex items-center gap-12 relative">
          <a 
            ref={el => tabsRef.current[0] = el}
            className={`pb-1 font-label-caps text-label-caps tracking-widest transition-colors duration-300 ${activeTab === 'catalogos' ? 'text-primary' : 'text-secondary hover:text-primary'}`} 
            href="#"
            onClick={() => setActiveTab('catalogos')}
          >
            CATÁLOGOS
          </a>
          <a 
            ref={el => tabsRef.current[1] = el}
            className={`pb-1 font-label-caps text-label-caps tracking-widest transition-colors duration-300 ${activeTab === 'contacto' ? 'text-primary' : 'text-secondary hover:text-primary'}`} 
            href="#contact-section"
            onClick={() => setActiveTab('contacto')}
          >
            CONTACTO
          </a>
          <div 
            className="absolute bottom-0 h-0.5 bg-primary"
            style={underlineStyle}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
