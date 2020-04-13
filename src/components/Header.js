import React from 'react'; //Todos los componentes deben tener ésta línea de código


const Header = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-0 bg-dark border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal text-white">Carolina García C.</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-white" href="#acerca-de-mi">Acerca de mi</a>
                <a className="p-2 text-white" href="#habilidades">Habilidades</a>
                <a className="p-2 text-white" href="#proyectos">Proyectos</a>
                <a className="p-2 text-white" href="#contacto">Contacto</a>
            </nav>
        </div>
    )
};

export default Header;