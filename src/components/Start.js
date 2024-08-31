import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from '../components/layout/Carousel';
import { WorksList } from './WorksList';
import {Slider} from '../components/layout/Slider';

export const Start = () => {
  return (
    <div className="home">
      {/*Carousel*/}
      <Slider/>
      {/* main content */}
      <section className='content'>
        <article>
          <h1>
            Soy Nardis Villalobos, estilista emprendedora de la zona de Guápiles,
            me especializo en la confección de <strong>bisutería personalizada</strong>, además de
             tratamientos para el <strong>embellecimiento del cabello.</strong> <Link to="/contact">Contacta conmigo.</Link>
          </h1>
        </article>
      </section>

      {/*last works sections*/}
      <section className="last-works">
        <h2 className="heading">Ultimas creaciones</h2>
        <p>Estas son algunas de mis últimas creaciones</p>
        <WorksList limit="4" />
      </section>

    </div>
  )
}
