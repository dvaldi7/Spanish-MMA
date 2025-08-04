import './App.css'
import React from "react";
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards';



function App() {

    return (
        <div className='bg-body-pattern bg-scroll min-h-screen'>

            <Header />

            {/* INICIO INFORMACIÓN */}
            <section className='container w-11/12 mx-auto'>
                <Banner />

                <Cards />

            </section >
            {/* FIN INFORMACIÓN */}

            {/* INICIO CONTENIDO PRINCIPAL */}
            <main className='container w-11/12 flex flex-row mx-auto mt-5'>
                {/* INICIO BARRA LATERAL */}

                <aside id='lateral' className='order-2 flex-none w-72 min-h-full mt-5'>
                    <h3 className='aside-header'>
                        BUSCAR
                    </h3>
                    <div id='search' className='w-11/12 m-2.5 mx-auto h-7 bg-white border border-gray-200
                    rounded shadow-inner'>
                        <form>
                            <input type='text' className='w-10/12 h-6 border-none pl-1.5 rounded-md
                            bg-transparent text-gray-600 transition duration-300 outline-none focus:outline-none'/>
                            <input type='button' value="L" className='symbol h-6 cursor-pointer text-base
                            bg-transparent border-none text-gray-500 pl-2'/>

                        </form>
                    </div>

                    <h3 className='aside-header'>LOGIN</h3>
                    <div id='login' className='aside-box'>
                        <form>
                            <label htmlFor="email">Usuario </label>
                            <input type='email' id='email' />

                            <label htmlFor='password' >Contraseña </label>
                            <input type='password' id='password' />

                            <input type='submit' value="Entrar" />
                            <input type='reset' value="Limpiar" />

                            <a href='#'>Regístrate aquí</a>
                            <a href='#'>¿Has olvidado tu contraseña?</a>
                        </form>
                    </div>

                    <h3 className='aside-header'>REDES SOCIALES</h3>
                    <div id='social-media' className='aside-box'>

                        <div className='twitter'>
                            <a href='#'>Twitter</a>
                            <p>Twitter</p>
                        </div>

                        <div className='facebook'>
                            <a href='#'>Facebook</a>
                            <p>Facebook</p>
                        </div>

                        <div className='youtube'>
                            <a href='#'>Youtube</a>
                            <p>Youtube</p>
                        </div>
                    </div>

                    <h3 className='aside-header'>PATROCINADORES</h3>
                    <div id='sponsors' className='aside-box'>

                    </div>

                </aside>
                {/* FIN BARRA LATERAL */}

                {/* INICIO ARTÍCULOS */}
                <section className='order-1 flex-grow mr-10 mt-5'>
                    <h2 className='articles-header'>
                        Últimas noticias
                        </h2>

                    <article className='articles-item'>

                        <div className='articles-data '>
                            <span>Fecha: 10 marzo</span>
                            <span>Categoría: pruebas</span>
                        </div>

                        <h4 className='articles-head'>
                            <a href='#'>
                                Título de la noticia
                                </a>
                        </h4>

                        <p className='articles-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu pellentesque enim, vitae
                            consequat enim. Quisque congue dictum vehicula. Mauris placerat augue sed metus egestas,
                            a pulvinar orci lobortis. Quisque semper, justo vel elementum consectetur, augue lectus
                            ullamcorper libero, nec luctus mi velit nec massa.
                        </p>

                    </article>

                    <article className='articles-item'>

                        <div className='articles-data '>
                            <span>Fecha: 10 marzo</span>
                            <span>Categoría: pruebas</span>
                        </div>

                        <h4 className='articles-head'>
                            <a href='#'>
                                Título de la noticia
                                </a>
                        </h4>

                        <p className='articles-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu pellentesque enim, vitae
                            consequat enim. Quisque congue dictum vehicula. Mauris placerat augue sed metus egestas,
                            a pulvinar orci lobortis. Quisque semper, justo vel elementum consectetur, augue lectus
                            ullamcorper libero, nec luctus mi velit nec massa.
                        </p>

                    </article>

                    <article className='articles-item'>

                        <div className='articles-data '>
                            <span>Fecha: 10 marzo</span>
                            <span>Categoría: pruebas</span>
                        </div>

                        <h4 className='articles-head'>
                            <a href='#'>
                                Título de la noticia
                                </a>
                        </h4>

                        <p className='articles-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu pellentesque enim, vitae
                            consequat enim. Quisque congue dictum vehicula. Mauris placerat augue sed metus egestas,
                            a pulvinar orci lobortis. Quisque semper, justo vel elementum consectetur, augue lectus
                            ullamcorper libero, nec luctus mi velit nec massa.
                        </p>

                    </article>

                    <article className='articles-item'>

                        <div className='articles-data '>
                            <span>Fecha: 10 marzo</span>
                            <span>Categoría: pruebas</span>
                        </div>

                        <h4 className='articles-head'>
                            <a href='#'>
                                Título de la noticia
                                </a>
                        </h4>

                        <p className='articles-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu pellentesque enim, vitae
                            consequat enim. Quisque congue dictum vehicula. Mauris placerat augue sed metus egestas,
                            a pulvinar orci lobortis. Quisque semper, justo vel elementum consectetur, augue lectus
                            ullamcorper libero, nec luctus mi velit nec massa.
                        </p>

                    </article>

                    <article className='articles-item'>

                        <div className='articles-data '>
                            <span>Fecha: 10 marzo</span>
                            <span>Categoría: pruebas</span>
                        </div>

                        <h4 className='articles-head'>
                            <a href='#'>
                                Título de la noticia
                                </a>
                        </h4>

                        <p className='articles-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu pellentesque enim, vitae
                            consequat enim. Quisque congue dictum vehicula. Mauris placerat augue sed metus egestas,
                            a pulvinar orci lobortis. Quisque semper, justo vel elementum consectetur, augue lectus
                            ullamcorper libero, nec luctus mi velit nec massa.
                        </p>

                    </article>
                </section>
                {/* FIN ARTÍCULOS */}

            </main>
            {/* FIN CONTENIDO PRINCIPAL */}
        </div >
    )
}

export default App
