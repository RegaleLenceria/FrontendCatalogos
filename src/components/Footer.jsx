import React from 'react';
import logo from '../assets/logo.png';

const Footer = ({ onOpenTerms }) => {
  return (
    <footer className="bg-surface-container-low mt-section-gap border-t border-surface-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 w-full max-w-container-max mx-auto">
        <div className="font-headline-sm text-headline-sm text-primary mb-8 md:mb-0 flex items-center h-10">
          <img src={logo} alt="Regale Lencería" className="h-full object-contain" />
        </div>
        <div className="flex gap-12 mb-8 md:mb-0">
          <a className="text-secondary hover:text-primary transition-colors font-label-caps text-sm tracking-widest uppercase" href="https://www.regalelenceria.com" target="_blank" rel="noreferrer">Tienda</a>
          <button className="text-secondary hover:text-primary transition-colors font-label-caps text-sm tracking-widest uppercase" onClick={onOpenTerms}>Términos y Condiciones</button>
        </div>
        <div className="text-secondary font-body-md text-sm text-center md:text-right opacity-80">
          © {new Date().getFullYear()} Regale Lencería. Todos los derechos reservados.


        </div>
      </div>
    </footer>
  );
};

export default Footer;
