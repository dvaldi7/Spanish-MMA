import React from 'react'

export const Aside = () => {
    return (
        <aside id='lateral' className='order-2 flex-none w-72 min-h-full mt-5 xs:w-full xs:m-0'>
            <h3 className='aside-header'>
                BUSCAR
            </h3>
            <div id='search' className='w-11/12 m-2.5 mx-auto h-7 bg-white border border-gray-300
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
                    <label htmlFor="email" className='login-icon'>U</label>
                    <input type='email' id='email' className='login-input' />

                    <label htmlFor='password' className='login-icon text-xl ml-7 mt-6'>w</label>
                    <input type='password' id='password' className='login-input' />

                    <input type='submit' value="Entrar" className='login-btn' />
                    <input type='reset' value="Limpiar" className='login-btn ml-1' />

                    <a href='#' className='login-link'>Regístrate aquí</a>
                    <a href='#' className='login-link'>¿Has olvidado tu contraseña?</a>
                </form>
            </div>

            <h3 className='aside-header'>REDES SOCIALES</h3>
            <div id='social-media' className='aside-box h-48'>

                <div className='group twitter'>
                    <a href='#' className='social-icon'>t</a>
                    <p className='social-overlay
                            group-hover:opacity-100 group-hover:transfor group-hover:translate-x-1'>
                        Twitter
                    </p>
                </div>

                <div className='group facebook'>
                    <a href='#' className='social-icon'>f</a>
                    <p className='social-overlay
                            group-hover:opacity-100 group-hover:transfor group-hover:translate-x-1'>
                        Facebook
                    </p>
                </div>

                <div className='group youtube'>
                    <a href='#' className='social-icon'>y</a>
                    <p className='social-overlay
                            group-hover:opacity-100 group-hover:transfor group-hover:translate-x-1'>
                        Youtube
                    </p>
                </div>
            </div>

            <h3 className='aside-header'>PATROCINADORES</h3>
            <div id='sponsors' className='aside-box'>

            </div>

        </aside>
    )
}
