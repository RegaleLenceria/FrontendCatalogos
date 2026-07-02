import React from 'react';
import CatalogCard from './CatalogCard';

const catalogs = [
  {
    title: 'Leo Hombre',
    description: 'Boxers, deportiva, pijamas y shorts',
    image: 'https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Leonisa Brasier',
    description: 'Colección de brasieres',
    image: 'https://images.unsplash.com/photo-1606903258673-99c62391ea28?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Chamela',
    description: 'Deportiva, trajes de baño e interior',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Deportiva Leonisa',
    description: 'Ropa deportiva para mujer',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Fajas Leonisa',
    description: 'Control y modelación',
    image: 'https://images.unsplash.com/photo-1508216124765-1d0c5a176884?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Fájate',
    description: 'Fajas post-operación hombre y mujer',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Leonisa Kids',
    description: 'Ropa interior para niñas y niños',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Panty Leonisa',
    description: 'Ropa interior para mujer',
    image: 'https://images.unsplash.com/photo-1610488669460-7a0e28f73fbc?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Touché',
    description: 'Pareos, vestidos y trajes de baño',
    image: 'https://images.unsplash.com/photo-1542289659-1946393bcf85?auto=format&fit=crop&w=800&q=80',
  }
];

const CatalogGrid = ({ onOpenViewer }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-24 gap-x-4 md:gap-x-gutter">
      {catalogs.map((catalog, index) => (
        <CatalogCard 
          key={index} 
          title={catalog.title} 
          description={catalog.description} 
          image={catalog.image} 
          onClick={() => onOpenViewer(catalog.title)} 
        />
      ))}
    </div>
  );
};

export default CatalogGrid;
