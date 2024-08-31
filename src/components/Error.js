import React from 'react';
import {Link} from 'react-router-dom';

export const Error = () => {
    return (
        <div>
            <h1>ERROR 404</h1>
            <p>Pagina no encontrada</p>

            <Link to="/start">Regresar al Inicio</Link> {/* this Link object is almost the same as NavLink, allowing to navigate to other pages o components without reloading */}
        </div>
    )
}
