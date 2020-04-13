import React from 'react';

class MainQuienSoy extends React.Component {

    render() {
        return (
            <div>
                <section className="quien-soy py-2 px-2 text-center">
                    <div className="container">
                        <h3 id="acerca-de-mi" className="mt-4 mb-4">ACERCA DE MI</h3>
                        <p className="parrafo mb-4">
                        Soy tecnóloga en Desarrollo en Software egresada del Pascual Bravo y actualmente
                        me estoy formando en Desarrollo Web FrontEnd en Academia Geek y así encaminarme hacia el campo laboral.
                        En mis tiempos libres disfruto de compartir mis seres queridos, escuchar música, pintar cerámica, buscar
                        experiencias de viaje y jugar League of Legends.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default MainQuienSoy;