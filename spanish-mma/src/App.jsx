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
            <main>

                <aside id='lateral'>
                    <h3>BUSCAR</h3>
                    <div id='search'>
                        <form>
                            <input type='text' />
                            <input type='button' value="Buscar" />

                        </form>
                    </div>

                    <h3>LOGIN</h3>
                    <div id='login'>
                        <form>
                            <label for="email">Usuario </label>
                            <input type='email' id='email' />

                            <label for='password' >Contraseña </label>
                            <input type='password' id='password' />

                            <input type='submit' value="Entrar" />
                            <input type='reset' value="Limpiar" />

                            <a href='#'>Regístrate aquí</a>
                            <a href='#'>¿Has olvidado tu contraseña?</a>
                        </form>
                    </div>

                    <h3>REDES SOCIALES</h3>
                    <div id='social-media'>

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

                    <h3>PATROCINADORES</h3>
                    <div id='sponsors'>

                    </div>

                </aside>

                <section>

                </section>

            </main>
            {/* FIN CONTENIDO PRINCIPAL */}
        </div >
    )
}

export default App
