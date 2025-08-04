import './App.css'
import React from "react";
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards';
import { Aside } from './components/Aside';
import { Articles } from './components/Articles';



function App() {

    return (
        <div className='bg-body-pattern bg-scroll min-h-screen'>
            <Header />

            {/* INFORMACIÓN */}
            <section className='container w-11/12 mx-auto'>
                <Banner />

                <Cards />
            </section >
    
            {/* CONTENIDO PRINCIPAL */}
            <main className='container w-11/12 flex flex-row mx-auto mt-5 xs:flex-col md_flex-row'>
                {/*BARRA LATERAL */}
                <Aside />

                {/*ARTÍCULOS */}
                <Articles />
            </main>

            {/* FOOTER */}
        </div >
    )
}

export default App
