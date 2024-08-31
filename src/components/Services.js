import React from 'react'
import { sendWhatsAppMessage } from './js/whatsapp';

export const Services = () => {

  const sendText = () => {
    const message = `Hola, estoy interesado en saber mas acerca de tus servicios`;
    sendWhatsAppMessage(message);
  };
  
  return (
    <div className="page">
      <h1>Servicios</h1>
      <section className="services">
        <article className="service">
          <h2 className="heading">Confección de bisuteria personalizada</h2>
          <p>Creo desde cero el diseño de accesorios para confeccionarlos con tus colores y materiales preferidos.</p>
          <ul>
            <li>Solicitud y recepcion de pedido: <span>Para realizar tu pedido puedes utilizar el chat de <button onClick={sendText} type='button'>Whatsapp</button> o enviar un DM a traves del perfil de <a href="https://www.instagram.com/nardis_accesorios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram.</a></span></li>
            <li>Confección: <span>Diseño y creación desde cero de tu pedido con los materiales solicitados.</span></li>
            <li>Pago y entrega: <span>La entrega se realiza de 3 a 5 dias habiles luego de haber realizado tu pedido, en cuanto este listo te lo hare saber para coordinar el pago y el envio.</span> </li>
          </ul>
        </article>

        <article className="service">
          <h2 className="heading">Aplicación de tratamientos para el cuidado y embellecimiento del cabello</h2>
          <p>Poseo una gran variedad de productos, y tratamientos para el cuidado del cabello mediante el servicio de estilista.</p>

          <ul>
            <li>Agenda de cita: <span>Para agendar tu cita solo debes enviar un mensaje al chat de <button onClick={sendText} type='button'>Whatsapp</button> o un DM en el perfil de <a href="https://www.instagram.com/nardis_accesorios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram.</a> para consultar disponibilidad y reservar tu espacio.</span></li>
            <li>Aplicación de tratamiento o de corte de cabello: <span>Para la realizacion del corte o de la aplicacion del tratamiento te enviaré mi ubicación o en determinado caso se podría realizar a domicilio.</span></li>
          </ul>

        </article>
      </section>
    </div>
  )
}
