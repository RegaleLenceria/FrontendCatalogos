import React from 'react';

const ContactSection = () => {
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
                <p className="font-body-md">Segundo Anillo & Fidel Oliva<br/>Santa Cruz de la Sierra</p>
              </div>
            </div>
            <div>
              <h4 className="font-label-caps text-primary tracking-widest mb-4">LLÁMANOS</h4>
              <div className="flex items-center gap-4 text-secondary">
                <span className="material-symbols-outlined text-primary">call</span>
                <a href="tel:+59175026806" className="font-body-md text-lg font-semibold hover:text-primary transition-colors">+591 75026806</a>
              </div>
            </div>
            <div className="pt-4">
              <div className="space-y-8 mt-8">
                <div>
                  <h4 className="font-label-caps text-primary tracking-widest mb-4">HORARIOS DE ATENCIÓN</h4>
                  <ul className="space-y-2 font-body-md text-secondary">
                    <li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>Lunes a Viernes:</span> <span  className="text-right">10:00 - 18:30<br/><span className="text-xs opacity-70 font-label-caps tracking-widest">(horario continuo)</span></span></li>
                    <li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>Sábados:</span> <span className="text-right">9:00 - 13:00<br/><span className="text-xs opacity-70 font-label-caps tracking-widest">(horario continuo)</span></span></li>
                    <li className="flex justify-between text-primary/60 pt-1"><span>Domingo:</span> <span>Cerrado</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-caps text-primary tracking-widest mb-4">NUESTRAS ASESORAS</h4>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div className="flex flex-col items-start justify-center p-4 bg-surface-bright rounded-2xl border border-outline-variant/30 hover:border-primary transition-colors group gap-3">
                      <a className="font-body-md font-semibold text-primary hover:text-primary-container transition-colors" href="https://wa.me/59178555506?text=Hola%20Carla,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">Carla</a>
                      <a className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-button text-xs tracking-wider hover:scale-105 transition-transform w-full xl:w-auto" href="https://wa.me/59178555506?text=Hola%20Carla,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-sm">chat</span> WHATSAPP
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-center p-4 bg-surface-bright rounded-2xl border border-outline-variant/30 hover:border-primary transition-colors group gap-3">
                      <a className="font-body-md font-semibold text-primary hover:text-primary-container transition-colors" href="https://wa.me/59169639272?text=Hola%20Andrea,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">Andrea</a>
                      <a className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-button text-xs tracking-wider hover:scale-105 transition-transform w-full xl:w-auto" href="https://wa.me/59169639272?text=Hola%20Andrea,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-sm">chat</span> WHATSAPP
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-center p-4 bg-surface-bright rounded-2xl border border-outline-variant/30 hover:border-primary transition-colors group gap-3">
                      <a className="font-body-md font-semibold text-primary hover:text-primary-container transition-colors" href="https://wa.me/59176563151?text=Hola%20Maria%20Eugenia,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">Maria Eugenia</a>
                      <a className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-button text-xs tracking-wider hover:scale-105 transition-transform w-full xl:w-auto" href="https://wa.me/59176563151?text=Hola%20Maria%20Eugenia,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-sm">chat</span> WHATSAPP
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-center p-4 bg-surface-bright rounded-2xl border border-outline-variant/30 hover:border-primary transition-colors group gap-3">
                      <a className="font-body-md font-semibold text-primary hover:text-primary-container transition-colors" href="https://wa.me/59175026806?text=Hola%20Jacquelin,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">Jacquelin</a>
                      <a className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-button text-xs tracking-wider hover:scale-105 transition-transform w-full xl:w-auto" href="https://wa.me/59175026806?text=Hola%20Jacquelin,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-sm">chat</span> WHATSAPP
                      </a>
                    </div>
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
