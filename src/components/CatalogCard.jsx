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
          <span className="bg-surface text-primary px-10 py-4 font-button text-base tracking-widest rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            ABRIR CATÁLOGO
          </span>
        </div>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{title}</h3>
      <p className="font-label-caps text-label-caps text-secondary opacity-70 uppercase mb-4">{description}</p>
      <button className="w-fit text-primary border-b-2 border-primary/20 pb-1 font-button text-sm hover:border-primary transition-all tracking-wider">
        VER CATÁLOGO COMPLETO
      </button>
    </div>
  );
};

export default CatalogCard;
