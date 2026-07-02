import React from 'react';

const CatalogCard = ({ title, description, image, onClick }) => {
  return (
    <div className="catalog-card flex flex-col group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-[3/4] overflow-hidden mb-stack-md rounded-lg shadow-sm group-hover:shadow-xl transition-all duration-500">
        <img 
          alt={`${title} Collection`} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          src={image} 
        />
        <div className="hover-overlay absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <span className="bg-surface text-primary px-4 py-2 md:px-10 md:py-4 font-button text-xs md:text-base tracking-widest rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center">
            ABRIR
          </span>
        </div>
      </div>
      <h3 className="font-headline-sm text-lg md:text-headline-sm text-primary mb-1 md:mb-2 leading-tight">{title}</h3>
      <p className="font-label-caps text-[10px] md:text-label-caps text-secondary opacity-70 uppercase mb-2 md:mb-4 leading-snug">{description}</p>
      <button className="w-fit text-primary border-b-2 border-primary/20 pb-1 font-button text-[10px] md:text-sm hover:border-primary transition-all tracking-wider text-left">
        VER CATÁLOGO
      </button>
    </div>
  );
};

export default CatalogCard;
