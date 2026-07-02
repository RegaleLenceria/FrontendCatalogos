import React, { useState, useEffect, useRef } from 'react';

const PdfViewerModal = ({ isOpen, title, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentZoom, setCurrentZoom] = useState(1);
  const totalPages = 24;
  const maxZoom = 2.5;

  const viewerStageRef = useRef(null);
  const zoomContainerRef = useRef(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentPage(1);
      resetZoom();
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage]);

  const resetZoom = () => {
    setCurrentZoom(1);
    if (zoomContainerRef.current) {
      zoomContainerRef.current.style.transformOrigin = 'center center';
    }
    if (viewerStageRef.current) {
      viewerStageRef.current.scrollLeft = 0;
      viewerStageRef.current.scrollTop = 0;
    }
  };

  const handleDoubleClick = (e) => {
    if (currentZoom > 1) {
      resetZoom();
    } else {
      const rect = viewerStageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / currentZoom;
      const y = (e.clientY - rect.top) / currentZoom;
      
      setCurrentZoom(maxZoom);
      if (zoomContainerRef.current) {
        zoomContainerRef.current.style.transformOrigin = `${x}px ${y}px`;
      }
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(p => p + 1);
      resetZoom();
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(p => p - 1);
      resetZoom();
    }
  };

  const handleMouseDown = (e) => {
    if (currentZoom <= 1) return;
    setIsDragging(true);
    setDragStart({
      x: e.pageX - viewerStageRef.current.offsetLeft,
      y: e.pageY - viewerStageRef.current.offsetTop,
      scrollLeft: viewerStageRef.current.scrollLeft,
      scrollTop: viewerStageRef.current.scrollTop
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - viewerStageRef.current.offsetLeft;
    const y = e.pageY - viewerStageRef.current.offsetTop;
    const walkX = (x - dragStart.x) * 1.5;
    const walkY = (y - dragStart.y) * 1.5;
    viewerStageRef.current.scrollLeft = dragStart.scrollLeft - walkX;
    viewerStageRef.current.scrollTop = dragStart.scrollTop - walkY;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 overflow-hidden" id="pdf-modal">
      <div className="pdf-viewer-overlay absolute inset-0" onClick={onClose}></div>
      <div className="relative w-[95vw] h-[95vh] bg-surface-container-lowest shadow-2xl rounded-2xl overflow-hidden flex flex-col z-10 border border-primary/10">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center px-10 py-6 border-b border-surface-variant bg-surface-bright">
          <h4 className="font-display-lg text-3xl text-primary">{title}</h4>
          <div className="flex items-center gap-6">
            <div className="text-secondary font-label-caps text-sm tracking-tighter">PAGE {currentPage} / {totalPages}</div>
            <button className="text-secondary hover:text-primary transition-colors p-2" onClick={onClose}>
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
          </div>
        </div>

        {/* Stage with Double Click Zoom */}
        <div 
          className={`flex-grow bg-surface-container-low flex items-center justify-center overflow-auto p-12 relative group ${currentZoom > 1 ? 'zoom-active' : ''}`} 
          id="viewer-stage" 
          ref={viewerStageRef}
          onDoubleClick={handleDoubleClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          <div 
            id="zoom-container" 
            ref={zoomContainerRef} 
            style={{ 
              transform: `scale(${currentZoom})`, 
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transformOrigin: '0 0'
            }}
          >
            <div className="page-container relative flex transition-all duration-500" style={{ width: '1000px', height: '700px' }}>
              <div className="w-full h-full bg-white shadow-2xl relative flex overflow-hidden">
                <img 
                  alt="Catalog Content" 
                  className="w-full h-full object-contain select-none" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFX6mcKvi5gNbskXxuKcgQQ9lryMYCtWUQFKEBkdHj-PDoT43BGloV83m3v4hMqrzQTmvcETr4HAB5QIzB7fDaPvpc0PTI_jOKDGNZaFA_yAXgkGsMRJ-ZyoK5jzyRgSeQOn5kzSr2A_LQtm9kiv2KFKZTDSJ17vsyytY17HPsnVfD8JQ5h4snNVA8zSPKcTooLeAoQ8SDxvN-BjHytD6d4LX8CFTxc-JkTfMzvMldUNn_1DQvDZbF" 
                />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button className="absolute left-10 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface text-primary p-6 rounded-full shadow-lg transition-all group z-30" onClick={prevPage}>
            <span className="material-symbols-outlined text-4xl group-hover:-translate-x-1 transition-transform">arrow_back_ios_new</span>
          </button>
          <button className="absolute right-10 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface text-primary p-6 rounded-full shadow-lg transition-all group z-30" onClick={nextPage}>
            <span className="material-symbols-outlined text-4xl group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
          </button>
        </div>

        {/* Footer Tip */}
        <div className="px-10 py-4 bg-surface-bright text-center border-t border-surface-variant">
          <p className="font-label-caps text-[10px] text-secondary tracking-[0.2em] opacity-60 uppercase">Doble clic para zoom • Usa flechas para navegar</p>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
