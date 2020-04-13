import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fas } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'


class MainHabilidades extends React.Component {

    render() {
        return (
            <div>
                 <section id="habilidades" className="habilidades px-2 text-center">
                    <div className="container">
                        <h2 className="title-habilidades mt-4 h3 mb-4 pt-3 pb-3">HABILIDADES</h2>

                        <div className=" row mb-2">
                            <div className="icons-habilidades text-center col-md-4">
                                <h6 className="title-hab mt-4 mb-4 p-2">Lenguajes de programación y maquetación</h6>
                                <i className="fa fa-java"></i>
                                <i><FontAwesomeIcon icon={faHtml5} /></i>
                                <i><FontAwesomeIcon icon={faCss3Alt} /></i>    
                                <i><FontAwesomeIcon icon={faJs} /></i>
                            </div>

                            <div className="icons-habilidades text-center col-md-4">
                                <h6 className="title-hab mt-4 mb-4 p-2">Gestores de Bases de Datos</h6>
                                <img src={require("../images/mysql.png")} width="70" height="70" />   
                            </div>

                            <div className="icons-habilidades text-center col-md-4">
                                <h6 className="title-hab mt-4 mb-4 p-2">Frameworks y Librerías</h6>
                                <i><FontAwesomeIcon icon={faBootstrap} /></i>
                                <i><FontAwesomeIcon icon={faReact} /></i>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

export default MainHabilidades;
