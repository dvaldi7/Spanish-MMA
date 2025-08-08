import React from 'react'

export const Cards = () => {
    return (
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

           {/* <div className='card group'>
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
            */}
        </div>
    )
}
