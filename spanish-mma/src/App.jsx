import './App.css'
import React from "react";
import { Link } from 'react-router-dom';



function App() {

    return (
        <div className='bg-body-pattern bg-scroll min-h-screen'>

            {/* INICIO HEADER */}
            <header id='header' className='h-24 bg-custom-red text-white font-sans
            xs:h-36'>

                <div className='container w-11/12 mx-auto flex bebas
                md:flex-row
                xs:flex-col'>

                    <div id='logo' className='flex-1 xs:mx-auto'>

                        <div className='w-64 mt-1.5 pt-0.5 pb-0.5 bg-custom-gold text-custom-black text-center rounded-md
                        hover:bg-gray-400 hover:text-custom-red tracking-wider cursor-pointer overflow-hidden transition duration-300
                        flex flex-row group'>

                            <span className='block float-left ml-11 mt-5 animation group-hover:scale-125
                            group-hover:animate-from-bellow'>
                                <img src='/octagono.png' />
                            </span>

                            <h3 className='block text-3xl mt-1.5 ml-7 float-right mr-16 transition duration-100
                            group-hover:animate-from-right'>
                                Sp<span className='group-hover:text-custom-gold'>ani</span>sh
                                M<span className='group-hover:text-custom-gold'>M</span>A
                            </h3>
                        </div>

                    </div>

                    <nav className='flex-1 '>
                        <ul className='flex flex-row text-white h-20 items-center text-2xl
                        text-center xs:mr-0 xs:text-center md:justify-end'>
                            <li className='menu-item'>
                                <Link to='#' className='menu-item-a'>Inicio</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='#' className='menu-item-a'>Peleadores</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='#' className='menu-item-a'>Compañías</Link>
                            </li>
                            <li className='menu-item'>
                                <Link to='#' className='menu-item-a'>Eventos</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
            {/*FIN HEADER */}

            {/* INICIO INFORMACIÓN */}
            <section className='container w-11/12 mx-auto'>

                {/* INICIO BANNER */}
                <div id='banner' className='h-52 w-full border-8 border-white mx-auto overflow-hidden shadow m-5
             bg-banner bg-cover bg-no-repeat animate-bg-banner xs:h-20 md:h-28 lg:h-40'>

                </div>
                {/* FIN BANNER */}

                {/* INICIO TARJETAS */}
                <div id='cards' className='flex flex-nowrap justify-between'>

                    <div className='card group'>
                        <span className='card-icon group-hover:text-custom-gold group-hover:text-7xl 
                       group-hover:animate-show-card-icon transform  xs:group-hover:scale-75 group-hover:scale-125
                       md:group-hover:mb-5 '>U</span>

                        <h2 className='card-category group-hover:text-custom-gold xs:group-hover:mt-5
                        group-hover:animate-show-card-category'>
                            PELEADORES
                        </h2>
                        <p className='card-description group-hover:text-custom-gold group-hover:animate-show-card-desc'>
                            Conoce a los guerreros
                        </p>
                    </div>

                    <div className='card group'>
                        <span className='card-icon  group-hover:text-custom-gold transform group-hover:scale-125
                        group-hover:animate-show-card-icon md:group-hover:mb-5
                        xs:group-hover:scale-75'>K</span>

                        <h2 className='card-category group-hover:text-custom-gold xs:group-hover:mt-4
                        group-hover:animate-show-card-category'>
                            COMPAÑÍAS
                        </h2>
                        <p className='card-description group-hover:text-custom-gold group-hover:animate-show-card-desc'>
                            Visita las compañías de España
                        </p>
                    </div>

                    <div className='card group'>
                        <span className='card-icon group-hover:text-custom-gold group-hover:text-7xl
                        group-hover:animate-show-card-icon transform group-hover:scale-125 
                        md:group-hover:mb-5 xs:group-hover:scale-50'>I</span>

                        <h2 className='card-category group-hover:text-custom-gold xs:group-hover:mt-5
                        group-hover:animate-show-card-category'>
                            EVENTOS
                        </h2>
                        <p className='card-description group-hover:text-custom-gold group-hover:animate-show-card-desc'>
                            Descubre los próximos eventos
                        </p>
                    </div>

                    <div className='card group'>
                        <span className='card-icon  group-hover:text-custom-gold group-hover:text-7xl
                        group-hover:animate-show-card-icon transform group-hover:scale-125 md:group-hover:mb-5
                        xs:group-hover:scale-50'>@</span>

                        <h2 className='card-category group-hover:text-custom-gold xs:group-hover:mt-5
                        group-hover:animate-show-card-category'>
                            NOTICIAS
                        </h2>
                        <p className='card-description group-hover:text-custom-gold group-hover:animate-show-card-desc'>
                            Ponte al día de las últimas noticias
                        </p>
                    </div>

                    <div className='card group'>
                        <span className='card-icon group-hover:text-custom-gold group-hover:text-7xl
                        group-hover:animate-show-card-icon transform group-hover:scale-125 md:group-hover:mb-5
                        xs:group-hover:scale-75'>y</span>

                        <h2 className='card-category group-hover:text-custom-gold lg:group-hover:-mb-5
                         group-hover:animate-show-card-category xs:group-hover:mt-5'>
                            EXPERTOS
                        </h2>
                        <p className='card-description group-hover:text-custom-gold 
                        group-hover:animate-show-card-desc lg:group-hover:mt-0'>
                            Sigue a los mejores divulgadores de las MMA
                        </p>
                    </div>
                </div>
                {/* FIN TARJETAS */ }

            </section >
        {/* FIN INFORMACIÓN */ }

        </div >
    )
}

export default App
