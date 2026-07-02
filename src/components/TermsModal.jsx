import React, { useEffect } from 'react';

const TermsModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 overflow-hidden fade-in">
      <div className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-[95vw] max-w-3xl max-h-[90vh] bg-surface-bright shadow-2xl rounded-2xl flex flex-col z-10 border border-primary/10 slide-up overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-6 border-b border-surface-variant bg-surface">
          <h4 className="font-display-sm text-2xl text-primary">Términos y Condiciones</h4>
          <button className="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant/20" onClick={onClose}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-grow text-secondary font-body-md text-base leading-relaxed space-y-6">
          <p>
            Bienvenido a <strong>Regale Lencería</strong>, una plataforma de compra online rápida, 
            segura y accesible, donde podrás adquirir productos de ropa interior, 
            fajas, deportivos y balnearios; de manera simple y personalizada.
          </p>

          <div>
            <h5 className="font-headline-sm text-lg text-primary mb-3">Cómo comprar</h5>
            <p className="mb-2">Comprar en nuestra web es muy fácil:</p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Elige tus productos favoritos.</li>
              <li>Selecciona talla, color y cantidad.</li>
              <li>Añade los productos a tu carrito.</li>
              <li>Finaliza tu pedido, el cual será dirigido automáticamente a nuestro canal de atención por WhatsApp.</li>
              <li>Realiza el pago de tu compra mediante código QR.</li>
              <li>Confirma tu pedido con nuestro equipo.</li>
            </ol>
            <p className="mt-4">
              Una vez realizada la compra, recibirás tu nota de venta y, en caso de 
              solicitarla, también tu factura manual.
            </p>
          </div>

          <div>
            <h5 className="font-headline-sm text-lg text-primary mb-3">Disponibilidad de productos</h5>
            <p>
              La disponibilidad de nuestros productos se actualiza constantemente. En 
              caso de falta de stock luego de realizar tu pedido, nos comunicaremos 
              contigo lo antes posible para ofrecerte una solución.
            </p>
          </div>

          <div>
            <h5 className="font-headline-sm text-lg text-primary mb-3">Precios</h5>
            <p>
              Todos los precios publicados incluyen impuestos de ley (IVA) y están 
              expresados en dólares americanos (USD), calculados al tipo de cambio 
              oficial de Bs. 6,96.<br/>
              Los precios pueden actualizarse sin previo aviso.
            </p>
          </div>

          <div>
            <h5 className="font-headline-sm text-lg text-primary mb-3">Envíos</h5>
            <p className="mb-2">
              El costo de envío se calcula automáticamente durante el proceso de 
              compra según la ubicación de entrega.
            </p>
            <p className="mb-2 font-medium text-primary/80">Condiciones actuales de envío:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Envío gratuito hasta el 4to anillo en compras mínimas de $30.</li>
              <li>Entregas dentro de la ciudad el mismo día, según disponibilidad y horario del pedido.</li>
              <li>Realizamos envíos a toda Bolivia mediante la empresa de transporte o flota de preferencia del cliente.</li>
              <li>Los tiempos de entrega a otros departamentos pueden variar según destino y transportadora seleccionada.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-headline-sm text-lg text-primary mb-3">Método de pago</h5>
            <p>
              Actualmente trabajamos únicamente con pagos mediante QR. <br/>
              Por seguridad, Regale Lencería no almacena información bancaria de 
              sus clientes.
            </p>
          </div>

          <div>
            <h5 className="font-headline-sm text-lg text-primary mb-3">Cambios y devoluciones</h5>
            <p className="mb-2">
              Los cambios o devoluciones podrán realizarse dentro de los 3 días hábiles 
              posteriores a la compra.
            </p>
            <p className="mb-2">
              Para proceder con el cambio o devolución, la prenda deberá 
              encontrarse en perfectas condiciones, sin uso, sin daños y con sus 
              etiquetas originales.
            </p>
            <p>
              Regale Lencería se reserva el derecho de rechazar cambios o 
              devoluciones de prendas que no cumplan con estas condiciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
