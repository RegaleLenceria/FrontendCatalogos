import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CatalogGrid from './components/CatalogGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PdfViewerModal from './components/PdfViewerModal';
import TermsModal from './components/TermsModal';

const App = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentCatalogTitle, setCurrentCatalogTitle] = useState('');
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleOpenViewer = (title) => {
    setCurrentCatalogTitle(title);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setCurrentCatalogTitle('');
  };

  return (
    <>
      {/* WhatsApp Floating Action Button */}
      <a 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center" 
        href="https://wa.me/573000000000" 
        target="_blank"
        rel="noreferrer"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.474.875 3.11 1.338 4.779 1.339h.005c5.753 0 10.432-4.677 10.435-10.431.002-2.786-1.082-5.405-3.051-7.376-1.967-1.971-4.585-3.054-7.375-3.055-5.756 0-10.434 4.677-10.437 10.432-.001 1.84.479 3.637 1.39 5.211l-1.055 3.854 3.953-1.037zm11.382-7.835c-.312-.156-1.848-.911-2.136-1.014-.288-.105-.497-.156-.706.156-.21.312-.811 1.014-1.001 1.222-.19.208-.378.234-.69.078-.312-.156-1.32-.486-2.515-1.551-.93-.829-1.557-1.853-1.744-2.165-.187-.312-.02-.481.136-.636.141-.14.312-.364.468-.547.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.547-.078-.156-.706-1.703-.967-2.333-.254-.613-.512-.529-.706-.539-.182-.01-.39-.011-.599-.011-.208 0-.546.078-.832.39-.286.312-1.092 1.066-1.092 2.6 0 1.534 1.118 3.016 1.274 3.224.156.208 2.199 3.358 5.328 4.707.744.321 1.325.512 1.777.656.748.237 1.429.204 1.967.124.599-.089 1.848-.755 2.11-1.485.262-.729.262-1.353.183-1.484-.078-.132-.287-.208-.599-.364z"></path>
        </svg>
      </a>

      <Navbar />
      
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <HeroSection />
        <CatalogGrid onOpenViewer={handleOpenViewer} />
        <ContactSection />
      </main>

      <Footer onOpenTerms={() => setIsTermsOpen(true)} />

      <PdfViewerModal 
        isOpen={isViewerOpen} 
        title={currentCatalogTitle} 
        onClose={handleCloseViewer} 
      />

      <TermsModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
      />
    </>
  );
};

export default App;
