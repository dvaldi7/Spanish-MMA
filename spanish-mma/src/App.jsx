import './App.css'
import React from "react";
import { Link } from 'react-router-dom';



function App() {

  return (
        <div className='bg-body-pattern bg-scroll min-h-screen'>

            {/* HEADER */}
            <header id='header' className='bg-red-600 text-white h-20'>
                <div className='container mx-auto flex flex-row'>

                    <div id='logo' className='flex-1'>
                        <h3 className='text-custom-gold'>Spanish MMA</h3>
                        <span className='symbol'>U</span>
                    </div>

                    <nav className='flex-1'>
                        <li>
                            <Link to='#'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='#'>Peleadores</Link>
                        </li>
                        <li>
                            <Link to='#'>Eventos</Link>
                        </li>
                        <li>
                            <Link to='#'>Contacto</Link>
                        </li>
                    </nav>

                </div>
            </header>


        </div>
    )
}

export default App
