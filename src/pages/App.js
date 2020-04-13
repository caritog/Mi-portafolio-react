import React from 'react'; //Todos los componentes deben tener ésta línea de código
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBienvenidos from '../components/MainBienvenidos';
import MainQuienSoy from '../components/MainQuienSoy';
import MainHabilidades from '../components/MainHabilidades';
import MainProyectos from '../components/MainProyectos';
import MainContacto from '../components/MainContacto';


//import logo from './logo.svg';
//import './App.css';

//React.Fragment <> </>
const App = () =>{
  return (
    <> 
    <Header />
    <MainBienvenidos/>
    <MainQuienSoy />
    <MainHabilidades/>
    <MainProyectos />
    <MainContacto />
    <Footer />
    </>
  )
};

export default App;
