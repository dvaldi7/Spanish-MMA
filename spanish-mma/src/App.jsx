import './App.css'
import React from "react";
import { Link } from 'react-router-dom';



function App() {

    return (
        <div className='bg-body-pattern bg-scroll min-h-screen'>

            {/* HEADER */}
            <header id='header' className='h-24 bg-custom-red text-white font-sans'>
                <div className='container mx-auto flex flex-row bebas'>


                    <div id='logo' className='flex-1'>

                        <div className='w-64 mt-1.5 pt-0.5 pb-0.5 bg-custom-gold text-custom-black text-center rounded-md
                        hover:bg-gray-400 tracking-wider cursor-pointer overflow-hidden transition duration-300
                        flex flex-row'>

                            <span className='block float-left ml-11 mt-5'>
                                <img src='/octagono.png' />
                            </span>

                            <h3 className='block text-3xl mt-1.5 ml-7 float-right mr-16 transition duration-100'>
                                Spanish MMA
                            </h3>
                        </div>

                    </div>

                    <nav className='flex-1 '>
                        <ul className='flex flex-row text-white h-20 items-center justify-end text-2xl
                        text-center'>
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


        </div>
    )
}

export default App
