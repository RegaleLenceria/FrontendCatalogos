import React, { useState, useEffect } from 'react';

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/contact-info`);
        if (!response.ok) throw new Error('Error al cargar info de contacto');
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContactInfo();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Cargando contacto...</div>;
  }

  // Si no hay datos, mostramos algo por defecto (o nada)
  if (!contactInfo) return null;

  return (
    <section className="mt-section-gap fade-in" id="contact-section">
      <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Contacto</h2>
        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter bg-surface-container-low rounded-lg overflow-hidden shadow-sm border border-surface-variant/30">
        <div className="h-[500px] lg:h-auto lg:min-h-[600px] w-full">
          <iframe 
            allowFullScreen="" 
            height="100%" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.024739110725!2d-63.1941767!3d-17.7905344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e81a535a7a05%3A0x7315277f8c447eab!2sRegale%20Lencer%C3%ADa!5e0!3m2!1ses-419!2sbo!4v1783028266738!5m2!1ses-419!2sbo" 
            style={{ border: 0 }} 
            width="100%">
          </iframe>
        </div>
        <div className="p-12 flex flex-col justify-center">
          <div className="space-y-8">
            <div>
              <h4 className="font-label-caps text-primary tracking-widest mb-4">ESTAMOS AQUÍ</h4>
              <div className="flex items-start gap-4 text-secondary">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <p className="font-body-md">{contactInfo.address?.split(',').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
              </div>
            </div>
            <div>
              <h4 className="font-label-caps text-primary tracking-widest mb-4">LLÁMANOS</h4>
              <div className="flex items-center gap-4 text-secondary">
                <span className="material-symbols-outlined text-primary">call</span>
                <a href={`tel:${contactInfo.phone?.replace(/ /g, '')}`} className="font-body-md text-lg font-semibold hover:text-primary transition-colors">{contactInfo.phone}</a>
              </div>
            </div>
            <div className="pt-4">
              <div className="space-y-8 mt-8">
                <div>
                  <h4 className="font-label-caps text-primary tracking-widest mb-4">HORARIOS DE ATENCIÓN</h4>
                  <ul className="space-y-2 font-body-md text-secondary">
                    <li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>Lunes a Viernes:</span> <span  className="text-right">{contactInfo.schedule_weekdays?.split('(')[0]}<br/><span className="text-xs opacity-70 font-label-caps tracking-widest">({contactInfo.schedule_weekdays?.split('(')[1] || ''}</span></span></li>
                    <li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>Sábados:</span> <span className="text-right">{contactInfo.schedule_saturdays?.split('(')[0]}<br/><span className="text-xs opacity-70 font-label-caps tracking-widest">({contactInfo.schedule_saturdays?.split('(')[1] || ''}</span></span></li>
                    <li className="flex justify-between text-primary/60 pt-1"><span>Domingo:</span> <span>{contactInfo.schedule_sundays}</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-caps text-primary tracking-widest mb-4">NUESTRAS ASESORAS</h4>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {contactInfo.advisors?.map((advisor, index) => (
                      <div key={index} className="flex flex-col items-start justify-center p-4 bg-surface-bright rounded-2xl border border-outline-variant/30 hover:border-primary transition-colors group gap-3">
                        <a className="font-body-md font-semibold text-primary hover:text-primary-container transition-colors" href={`https://wa.me/${advisor.phone}?text=${encodeURIComponent(advisor.message)}`} target="_blank" rel="noreferrer">{advisor.name}</a>
                        <a className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-button text-xs tracking-wider hover:scale-105 transition-transform w-full xl:w-auto" href={`https://wa.me/${advisor.phone}?text=${encodeURIComponent(advisor.message)}`} target="_blank" rel="noreferrer">
                          <span className="material-symbols-outlined text-sm">chat</span> WHATSAPP
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
