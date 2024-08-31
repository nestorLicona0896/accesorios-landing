import React from 'react'
import { Link } from 'react-router-dom';

export const About = () => {
  
  return (

    <div className="page">
      <h1>Acerda de mi</h1>
      <section className="about">
        <h2 className="title">
          A través de mi emprendimiento ofrezco servicios de belleza y
          personalización de accesorios de bisutería. <Link to="/contact">Contacta conmigo.</Link>
        </h2>

        <article className="material">
          <h2 className="heading">Materiales disponibles</h2>
          <p>
            Utilizo una variedad de materiales de alta calidad para confeccionar cada pieza
            con dedicación y atención al detalle. A continuación, te comento un poco más sobre
            algunos de los elementos que empleo para crear tus accesorios:
          </p>

          <ul>
            <li>Imitaciones de perlas: <span> Las imitaciones de las perlas reales son,
              generalmente, en plástico o cristal. Permiten hacer
              creaciones elegantes y clásicas por lo que son practicamente indispensable a
              la hora de crear un accesorio.</span>
            </li>

            <li>Cuentas de Plástico: <span>También conocidas como abalorios, mostacillas
              o chaquiras, son el corazón de muchos diseños de bisutería. Disponibles en
              diversos colores y formas para decorar pulseras, collares y más. Aunque las más comunes son
              de plástico, también ofrecemos opciones en madera, vidrio y metal.</span>
              
            </li>

            <li>Separadores Metálicos:<span> Estos elementos con diseños detallados
              añaden un toque especial a tus creaciones. Aunque no son imprescindibles, ofrecen
              una alternativa elegante a las cuentas de plástico o madera.</span>
              
            </li>

            <li>Broches y Cierres: <span>Para asegurar que tus accesorios queden perfectos, cuento
              con una amplia variedad de broches y cierres. Aunque un simple nudo puede bastar en
              algunos diseños, estos accesorios aportan estilo y funcionalidad.</span>
            </li>

            <li>Cadenas: <span>Un básico en cualquier kit de bisutería. Disponibles en distintos
              tamaños, grosores y colores, las cadenas se venden por rollos o metros, permitiéndote
              crear diseños únicos y personalizados.</span>
            </li>
          </ul>
        </article>

        <article className="material">
          <h2 className="heading">Tratmientos en cabello</h2>
          <p>Poseo una gran variedad de productos de alta calidad y tratamientos especializados
            para revitalizar y cuidar tu cabello.</p>
          <div className='service-layout'>

            <ul>

              <li>Tratamiento Hidratante: <span>Este tratamiento devuelve la humedad natural
                al cabello seco y dañado. Usamos mascarillas hidratantes ricas en aceites naturales
                y vitaminas. El procedimiento incluye la aplicación del producto seguido de calor
                moderado para una penetración profunda, dejando tu cabello suave y saludable.</span>
              </li>
              <li>Botox Capilar: <span>Ideal para cabellos debilitados y con frizz. Utilizo
                una fórmula rica en proteínas y aminoácidos que repara y rejuvenece la fibra
                capilar. El tratamiento incluye la aplicación del botox capilar y sellado con
                plancha para obtener un cabello más fuerte, brillante y sin frizz.</span>
              </li>
              <li>Keratina Orgánica: <span> Perfecta para alisar el cabello y reducir el
                encrespamiento de forma natural. Se aplica una keratina orgánica que suaviza la
                fibra capilar sin productos químicos agresivos. El proceso involucra la aplicación
                de la keratina, seguido de un secado y planchado para obtener un acabado liso y sedoso.</span>
              </li>
              <li>Nanoplastia Brasileña: <span>Es un tratamiento avanzado de alisado que nutre y
                alisa el cabello al mismo tiempo. Usamos productos ricos en colágeno y aminoácidos
                que penetran en la cutícula del cabello. Tras la aplicación, se sella con calor,
                logrando un cabello más liso, brillante y libre de frizz. </span>
              </li>

            </ul>
          </div>
        </article>

      </section>
    </div>
  )
}
