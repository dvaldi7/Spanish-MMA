import './App.css'
import React from "react";
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards';



function App() {

    return (
        <div className='bg-body-pattern bg-scroll min-h-screen'>

            {/* INICIO HEADER */}
            <Header />
            {/*FIN HEADER */}

            {/* INICIO INFORMACIÓN */}
            <section className='container w-11/12 mx-auto'>

                {/* INICIO BANNER */}
               <Banner />
                {/* FIN BANNER */}

                {/* INICIO TARJETAS */}
                <Cards />
                {/* FIN TARJETAS */}

            </section >
            {/* FIN INFORMACIÓN */}

            {/* INICIO CONTENIDO PRINCIPAL */}

            {/* FIN CONTENIDO PRINCIPAL */}
        </div >
    )
}

export default App
