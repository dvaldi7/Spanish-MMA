import './App.css'
import React from "react";
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards';
import { Aside } from './components/Aside';
import { Articles } from './components/Articles';
import reactlogo from '/react.svg';
import tailwindlogo from '/tailwind.svg';



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
            <footer id='footer' className='w-full h-auto bg-black text-white overflow-hidden'>

                <div className='container mx-auto flex flex-row w-11/12'>

                    <div id='menu-footer' className='footer-box'>
                        <h5 className='footer-header'>MENÚ</h5>
                        <ul>
                            <li><a href='#'>INICIO</a></li>
                            <li><a href='#'>BLOG</a></li>
                            <li><a href='#'>FORMACIÓN</a></li>
                            <li><a href='#'>CONTACTO</a></li>
                        </ul>
                    </div>

                    <div id='location' className='footer-box'>
                        <h5 className='footer-header'>¿DÓNDE ESTÁMOS?</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25032.704073160377!2d-0.48491939498278086!3d38.34694500101428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62377fea52398b%3A0xab6bc6545009c986!2sCalas%20de%20Alicante!5e0!3m2!1ses!2ses!4v1754399471846!5m2!1ses!2ses"
                            width="600" height="450" loading="lazy"></iframe>
                    </div>

                    <div id='info' className='footer-box'>
                        <h5 className='footer-header'>Desarrollado con</h5>
                        <p>
                            <img src={reactlogo}></img>
                            <img src={tailwindlogo}></img>
                        </p>

                        <h5 className='footer-header'>AUTOR</h5>
                        <p>&copy; Davaldev 2025</p>

                    </div>

                </div>

            </footer>
        </div >
    )
}

export default App
