import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import { sendWhatsAppMessage } from "../components/js/whatsapp";

export const Contact = () => {

  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // this method validates that the email address is real:
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // this method ansures phone field has only numbers and that it is 8 digits longer.
  const validatePhone = (phone) => {
    const regex = /^\d{8}$/;  // Regular expression to check if the phone number contains exactly 8 digits
    return regex.test(phone);
  };

  // This function checks for individual field validity when the user changes input. 
  // It updates the errors state accordingly.
  const validateField = (name, value) => {
    let error = '';

    if (!value.trim()) {
      if (name === 'name') error = 'El nombre es obligatorio.';
      if (name === 'email') error = 'El correo es obligatorio.';
      if (name === 'phone') error = 'El teléfono o celular es obligatorio.';
      if (name === 'message') error = 'El mensaje es obligatorio.';
    }

    if (name === 'email' && value.trim() && !validateEmail(value)) {
      error = 'El correo no es válido.';
    }

    if (name === 'phone' && value.trim() && !validatePhone(value)) {
      error = 'El teléfono debe tener 8 dígitos y contener solo números.';
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }));
  };

  //This function validates all fields when the form is submitted.
  const validateForm = () => {
    const currentErrors = {};

    if (!formData.name.trim()) {
      currentErrors.name = 'El nombre es obligatorio.';
    }

    if (!formData.email.trim()) {
      currentErrors.email = 'El correo es obligatorio.';
    } else if (!validateEmail(formData.email)) {
      currentErrors.email = 'El correo no es válido.';
    }

    if (!formData.phone.trim()) {
      currentErrors.phone = 'El teléfono o celular es obligatorio.';
    } else if (!validatePhone(formData.phone)) {
      currentErrors.phone = 'El teléfono debe tener 8 dígitos y contener solo números.';
    }

    if (!formData.message.trim()) {
      currentErrors.message = 'El mensaje es obligatorio.';
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  //This function updates the respective form field value in the state and validates the 
  // field in real-time, dynamically clearing any error messages if the input becomes valid.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate the field as the user types
    validateField(name, value);
  };

  // this functions allows the user to send an email using EmailJS server
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm(
        'service_landing_08081996',
        'template_landing',
        form.current,
        '-dYmYBoSFI2_q3qBQ'
      )
        .then((result) => {
          console.log('Email successfully sent!', result.text);
        }, (error) => {
          console.error('Error sending email:', error.text);
        });
      // Clear the form fields after successful submission by resetting the state
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
      alert("El correo ha sido enviado satisfactoriamente :) \nespera nuestra pronta respuesta")
    } else {
      let formError = "";
      if (errors.name) {
        formError += errors.name.toString() + "\n";
      }
      if (errors.email) {
        formError += errors.email.toString() + "\n";
      }
      if (errors.phone) {
        formError += errors.phone.toString() + "\n";
      }
      if (errors.message) {
        formError += errors.message.toString();
      }
      alert("Hacen falta datos en el formulario de contacto o son incorrectos :/ \n" + formError);
    }
  };

  const sendText = () => {
    const message = `Hola, estoy interesado en saber mas acerca de tus servicios`;
    sendWhatsAppMessage(message);
  };

  return (
    <div className="page">
      <h1>Contacto</h1>
      <section className='contact'>
        <article>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>Nombre<span>*</span></label>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label>Correo<span>*</span></label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Telefono o celular<span>*</span></label>
            <input
              type="text"
              placeholder="Telefono / celular"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <label>Mensaje de consulta<span>*</span></label>
            <textarea
              placeholder="Motivo o consulta"
              name="message" required
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}

            <input type="submit" value="Enviar" />
          </form>
        </article>

        <article>
          <h2>Mediante este formulario puedes enviar un correo con tus consultas, o bien,
            puedes escribir al <button onClick={sendText} type='button'>Whatsapp</button>
            o enviar un DM a través del perfil de <a href="https://www.instagram.com/nardis_accesorios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>, será un placer atenderte.</h2>
          <img src="../img/message.png" alt="mssg-icon" />
        </article>
      </section>

    </div>
  )
}
