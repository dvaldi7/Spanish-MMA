import React from 'react'
import reactlogo from '/react.svg';
import tailwindlogo from '/tailwind.svg';
import vitelogo from '/vite.svg';

export const Footer = () => {
    return (
        <div className='container mx-auto flex flex-row w-11/12
                xs:flex-col md:flex-col lg:flex-row'>

            <div id='menu-footer' className='footer-box'>
                <h5 className='footer-header'>MENÚ</h5>
                <ul className='footer-menu'>
                    <li><a href='#'>INICIO</a></li>
                    <li><a href='#'>PELEADORES</a></li>
                    <li><a href='#'>COMPAÑÍAS</a></li>
                    <li><a href='#'>EVENTOS</a></li>
                </ul>
            </div>

            <div id='location' className='footer-box'>
                <h5 className='footer-header'>¿DÓNDE ESTÁMOS?</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25032.704073160377!2d-0.48491939498278086!3d38.34694500101428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd62377fea52398b%3A0xab6bc6545009c986!2sCalas%20de%20Alicante!5e0!3m2!1ses!2ses!4v1754399471846!5m2!1ses!2ses"
                    width="600" height="450" loading="lazy" className='w-full h-72 mt-3
                            border-4 border-y-custom-red border-x-custom-gold rounded-md shadow-md'></iframe>
            </div>

            <div id='info' className='footer-box'>
                <h5 className='footer-header'>Desarrollado con</h5>
                <p className='mb-5 text-center flex'>
                    <img className='footer-logo' src={reactlogo}></img>
                    <img className='footer-logo' src={vitelogo}></img>
                    <img className='footer-logo' src={tailwindlogo}></img>
                </p>

                <h5 className='footer-header mt-20'>AUTOR</h5>
                <p className='mt-10 text-custom-gold'>&copy; Davaldev 2025</p>

            </div>

        </div>
    )
}
