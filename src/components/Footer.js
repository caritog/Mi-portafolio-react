import React from 'react'; //Todos los componentes deben tener ésta línea de código

const Footer = () => (
    <footer className="footer py-2 text-center">
    <div className="container">
      <div>
        <div className="icons-footer text-center">
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
      <p>Copyright © 2020 Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;