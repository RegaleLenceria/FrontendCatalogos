import React from 'react';

const ContactSection = () => {
  return (
    <section className="mt-section-gap fade-in" id="contact-section">
      <div className="text-center mb-16">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Contacto</h2>
        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter bg-surface-container-low rounded-lg overflow-hidden shadow-sm border border-surface-variant/30">
        <div className="h-[450px] w-full">
          <iframe 
            allowFullScreen="" 
            height="100%" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127253.11124675716!2d-74.1317424!3d4.6482837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d3955c3e387fd!2zQm9nb3TDoA!5e0!3m2!1ses!2sco!4v1715600000000!5m2!1ses!2sco" 
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
                <p className="font-body-md">Calle Principal 123, Distrito de Moda<br/>Bogotá, Colombia</p>
              </div>
            </div>
            <div>
              <h4 className="font-label-caps text-primary tracking-widest mb-4">LLÁMANOS</h4>
              <div className="flex items-center gap-4 text-secondary">
                <span className="material-symbols-outlined text-primary">call</span>
                <p className="font-body-md text-lg font-semibold">+57 300 000 0000</p>
              </div>
            </div>
            <div className="pt-4">
              <div className="space-y-8 mt-8">
                <div>
                  <h4 className="font-label-caps text-primary tracking-widest mb-4">HORARIOS DE ATENCIÓN</h4>
                  <ul className="space-y-2 font-body-md text-secondary">
                    <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>Lunes - Viernes:</span> <span>8:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>Sábados:</span> <span>9:00 AM - 2:00 PM</span></li>
                    <li className="flex justify-between text-primary/60"><span>Domingos y Festivos:</span> <span>Cerrado</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-label-caps text-primary tracking-widest mb-4">NUESTRAS ASESORAS</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-surface-bright rounded-lg border border-outline-variant/30 hover:border-primary transition-colors group">
                      <a className="font-body-md font-semibold text-primary hover:text-primary-container transition-colors" href="https://wa.me/573000000000?text=Hola%20Camila,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">Camila Torres</a>
                      <a className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-button text-xs tracking-wider hover:scale-105 transition-transform" href="https://wa.me/573000000000?text=Hola%20Camila,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">
                        <span className="material-symbols-outlined text-sm">chat</span> WHATSAPP
                      </a>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface-bright rounded-lg border border-outline-variant/30 hover:border-primary transition-colors group">
                      <a className="font-body-md font-semibold text-primary hover:text-primary-container transition-colors" href="https://wa.me/573000000001?text=Hola%20Valentina,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">Valentina Ruiz</a>
                      <a className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-button text-xs tracking-wider hover:scale-105 transition-transform" href="https://wa.me/573000000001?text=Hola%20Valentina,%20vengo%20de%20los%20cat%C3%A1logos%20estoy%20interesada%20en.." target="_blank" rel="noreferrer">
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
