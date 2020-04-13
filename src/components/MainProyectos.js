import React from 'react';

class MainProyectos extends React.Component {

    render() {
        return (
            <div>
                
                <section id="proyectos" className="proyectos py-3 text-center">
                    <div className="container">
                        <h2 className="title-proyectos mt-4 h3 mb-5 pt-3 pb-3">MIS PROYECTOS</h2>

                        <div className="row">

                            <div className="texto-imagen col-md-4">
                                <a href="https://caritog.github.io/Tribute-page/">
                                    <img src={require("../images/Tribute-page.png")} alt="Mi página tributo" width="290" className="img-fluid" />
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="https://caritog.github.io/SurveyPage/">
                                    <img src={require("../images/SurveyPage.png")} alt="Mi formulario" width="290" className="img-fluid" />
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="https://caritog.github.io/LandingPage/">
                                    <img src={require("../images/landing-page.png")} alt="Mi página de negocio" width="290" className="img-fluid" />
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="https://caritog.github.io/TechnicalDocumentationPage/">
                                    <img src={require("../images/TechnicalDocumentationPage.png")} alt="Mi página de documentación técnica" width="290"
                                        className="img-fluid" />
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="https://dubis78.github.io/Reto-1/formulario.html">
                                    <img src={require("../images/reto1grupal.png")} alt="Primer reto grupal" width="290" className="img-fluid" />
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="https://caritog.github.io/Clon-Wikipedia/">
                                    <img src={require("../images/wiki-clon.png")} alt="Clon de Wikipedia" width="290" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MainProyectos;