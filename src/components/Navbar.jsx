import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('catalogos');
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div className="flex justify-between items-center px-6 md:px-margin-desktop py-4 md:py-stack-md w-full max-w-container-max mx-auto relative">
        <div className="flex items-center h-16 md:h-16 z-50">
          <img src={logo} alt="Regale Lencería" className="h-full object-contain" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12 relative">
          <a 
            ref={el => tabsRef.current[0] = el}
            className={`pb-1 font-label-caps text-sm tracking-widest transition-colors duration-300 ${activeTab === 'catalogos' ? 'text-primary font-bold' : 'text-secondary hover:text-primary'}`} 
            href="#"
            onClick={() => setActiveTab('catalogos')}
          >
            CATÁLOGOS
          </a>
          <a 
            ref={el => tabsRef.current[1] = el}
            className={`pb-1 font-label-caps text-sm tracking-widest transition-colors duration-300 ${activeTab === 'contacto' ? 'text-primary font-bold' : 'text-secondary hover:text-primary'}`} 
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

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary p-2 focus:outline-none">
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-surface-variant/30 shadow-lg flex flex-col items-center py-8 gap-8 fade-in">
          <a 
            className={`font-label-caps text-sm tracking-widest transition-colors ${activeTab === 'catalogos' ? 'text-primary font-bold' : 'text-secondary'}`} 
            href="#"
            onClick={() => { setActiveTab('catalogos'); setIsMenuOpen(false); }}
          >
            CATÁLOGOS
          </a>
          <a 
            className={`font-label-caps text-sm tracking-widest transition-colors ${activeTab === 'contacto' ? 'text-primary font-bold' : 'text-secondary'}`} 
            href="#contact-section"
            onClick={() => { setActiveTab('contacto'); setIsMenuOpen(false); }}
          >
            CONTACTO
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
