import React from 'react';

//extends significa haga una herencia de todo lo que tenga React.Componente
class MainBienvenidos extends React.Component {

    render() {
        return (
            <section className="bienvenidos">
                <div className="container">
                    <div className="texto-bienvenido text-center px-3 py-3">
                    
                        <p  className="text-center h3 mt-4 mb-4">¡Bienvenidos a mi portafolio!</p>
                        <img className="profile-photo img-fluid mx-auto" src={require('../images/foto_perfil.jpg')} alt="Mi foto de perfil" width="140" />
                        <h1 className="text-center display-5 mb-2">CAROLINA GARCÍA CABALLERO</h1>
                        <h5 className="text-center">Desarrolladora Web FrontEnd</h5>
                        <div>
                            <div className="icons-contact text-center">
                                <a href="https://www.linkedin.com/in/caritogarcia/">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a href="https://github.com/caritog">
                                    <i className="fa fa-github"></i>
                                </a>
                                <a href="carito940905@gmail.com">
                                    <i className="fa fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default MainBienvenidos;