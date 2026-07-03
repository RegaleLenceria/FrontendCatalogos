import React, { useState, useEffect } from 'react';
import CatalogCard from './CatalogCard';

const CatalogGrid = ({ onOpenViewer }) => {
  const [catalogs, setCatalogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/catalogs`);
        if (!response.ok) throw new Error('Error al cargar catálogos');
        const data = await response.json();
        setCatalogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCatalogs();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Cargando catálogos...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-24 gap-x-4 md:gap-x-gutter">
      {catalogs.map((catalog, index) => (
        <CatalogCard 
          key={catalog.id || index} 
          title={catalog.title} 
          description={catalog.description} 
          image={catalog.imageUrl || catalog.image} 
          onClick={() => onOpenViewer(catalog)} 
        />
      ))}
    </div>
  );
};

export default CatalogGrid;
