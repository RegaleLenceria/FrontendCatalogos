import React from 'react';
import CatalogCard from './CatalogCard';

const catalogs = [
  {
    title: 'Leo Hombre',
    description: 'Boxers, Deportiva, Pijamas, Shorts',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABDei1dSwuLDn7OFTPtQkDboedQW5yfys1Mwpoqreu0K7z5WuMBT8kU4gvRJK0oHjIO-LERpX0GSYBEIj6J8gSG1CSMqlTf4nWgUcjKeT-FQU4GjZRcnf_g9MocAwATmn5Yhah6GIwV25o83RANXp6XuiZ3GNAEggfRqsh0qBtyuc2lcYbmVvbRdUcmIp7duSisvlicr1RfTnMEGnw4oF9meerMpjk18tXKe6M_LfLCd7SRMKsLquV',
  },
  {
    title: 'Leonisa Brasier',
    description: 'Innovación & Soporte',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLXbANGcLwoYmgWjoMDa4zqE0ubFkwVLslqVqD-tz2rYqoniErznmWE_QqbFpFU-Wd-a3IT94wJU-w8WaxoXIFHFRqOl-JiOFx_xI2qK6D6OQOsOYK3nLJixgsa-ClUkNy7-aHdrXFGHnlqKq1yWf9bRX0Hx1UdrTdSy1c7khvmCo6CneLqbgT9dETZj6dAaQO9h9KHPUxkdoHrzljK17keAqAYZAATyfWRS4ojACX-XyK0zelGviW',
  },
  {
    title: 'Chamela',
    description: 'Deportiva, Trajes de Baño, Interior',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk6F2o0S4NNUqAUTRcgzP-Z7D6tUHrV4rhzkItuwKi-pbEdaL-nnm1wVzUVP9MkQ3Kykavzz3DACR_qKDeVbK3vJzpiqT1zZqHMY1GWwroVk_gzKgvQDzm0S34HaKm1Nweomt3QjqQBPaGBb8eDQXKbUG4RHlpkL65WR__qkzk1lDDZGYU18KsH0rrUkop-v7Xkmpetp91wdc7cI9UbNNRiL4LobXq7eC-wMP3AK2wErjsI2fR1Lwh',
  }
];

const CatalogGrid = ({ onOpenViewer }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-gutter">
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
