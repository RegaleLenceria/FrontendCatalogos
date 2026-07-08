import React, { useEffect } from 'react';

const PdfViewerModal = ({ isOpen, catalog, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen || !catalog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 overflow-hidden" id="pdf-modal">
      <div className="pdf-viewer-overlay absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-[95vw] h-[95vh] bg-surface-container-lowest shadow-2xl rounded-2xl overflow-hidden flex flex-col z-10 border border-primary/10">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center px-10 py-6 border-b border-surface-variant bg-surface-bright">
          <h4 className="font-display-lg text-3xl text-primary truncate max-w-[70%]">{catalog.title}</h4>
          <div className="flex items-center gap-4">
            {/* Botón extra para abrir en nueva pestaña (Soluciona el problema de iOS) */}
            <a 
              href={catalog.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm"
              title="Abrir en nueva pestaña"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              <span className="hidden sm:inline">Abrir PDF</span>
            </a>
            
            <button className="text-secondary hover:text-primary transition-colors p-2 bg-surface-variant/50 rounded-full" onClick={onClose}>
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
        </div>

        {/* PDF Iframe */}
        <div className="flex-grow bg-surface-container-low w-full h-full relative overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
          {/* Para iOS, object suele funcionar mejor que iframe, o Google Docs Viewer */}
          <object 
            data={catalog.pdfUrl} 
            type="application/pdf" 
            className="w-full h-full border-0 min-h-[80vh]"
          >
            <iframe 
              src={`https://docs.google.com/gview?url=${encodeURIComponent(catalog.pdfUrl)}&embedded=true`}
              className="w-full h-full border-0 min-h-[80vh]" 
              title={catalog.title}
            />
          </object>
        </div>

      </div>
    </div>
  );
};

export default PdfViewerModal;
