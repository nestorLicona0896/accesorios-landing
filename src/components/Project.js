import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { works } from "../data/works";
import {sendWhatsAppMessage} from "../components/js/whatsapp";

export const Project = () => {

    const [project, setProjectState] = useState({}); // this state allows to set the work object if it exists
    const params = useParams(); // this params hook helps to recieve data via url, in this case the work id

    const sendText = () => {
        const message = `Hola, estoy interesado en este producto:\n\n` +
                        `Nombre: ${project.name}\n` +
                        `Descripción: ${project.description}\n` +
                        `Precio: ${project.price}\n` +
                        `Imagen: ${window.location.origin}/img/catalog/${project.id}.png`;
        // Encode the message properly
        console.log(message);
        sendWhatsAppMessage(message);
    };

    // this method execute only once the work page is loaded with useEffect
    // it allows to filter each work based on the id that is recieved via url
    // using params hook and the display it on the asigned section
    useEffect(() => {
        let project;
        project = works.filter(work => work.id === params.id);
        setProjectState(project[0]); // the object returned by the callback function is an array so in order to asign it to the state it must be refered on index 0.
    }, []);

    return (

        <div className="page">
            <h1>{project.name}</h1>
            <section className='work'>
                <div className="mask">
                    <img src={`${window.location.origin}/img/catalog/${project.id}.png`} alt="item"></img>
                </div>
                <article>
                    <h2> {project.description}</h2>
                    <h4>Categoría: {project.categories}</h4>
                    <h3>Precio: {project.price}</h3>
                    <button onClick={sendText}>Realizar pedido</button>
                </article>
            </section>
        </div>
    )
}
