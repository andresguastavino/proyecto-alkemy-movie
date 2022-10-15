import React from 'react'
import { MovieCastCarrousel } from './MovieCastCarrousel/MovieCastCarrousel'
import { MovieData } from './MovieData/MovieData'
import { MovieSelect } from './MovieSelect/MovieSelect'

import './styles.css'

export const MovieCard = () => {
  return (
    <section>
      <MovieSelect />
      <div className='movie-card'>
        <div className='movie-image'>
          <div className='background-gradient'></div>
          <img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/36tKvA2NJRd2XUhM88YeZ8ZeeiA.jpg' />
        </div>
        <div className='movie-info'>
          <h1>Ley y Orden: Unidad de Víctimas Especiales (1999)</h1>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMy_5C31z3uaFd4m_iiJKV3V8JfzqLXMy2A&usqp=CAU' />
            <p>Puntuación del usuario</p>
          </div>
        </div>
        <div className='movie-rate'>
          <div className='movie-rate__duration'>
            <p className='movie-age'>TV-14</p>
            <p>
              <span></span> 43m
            </p>
          </div>
          <p className='movie-rate__category'>Crimen, Drama, Misterio</p>
        </div>
        <article className='movie-description'>
          <p className='movie-description__intro'>Standing for victims</p>
          <p className='movie-description__title'>Vista general</p>
          <p className='movie-description__description'>
            ‘Ley y Orden: Unidad de Víctimas Especiales’ es una serie de
            televisión estadounidense grabada en Nueva York donde es también
            principalmente producida. Con el estilo de la original ‘Ley y Orden’
            los episodios son usualmente &quot;sacados de los titulares&quot; o
            basados libremente en verdaderos asesinatos que han recibido la
            atención de los medios.
          </p>
          <p className='movie-description__author'>Dick Wolf</p>
          <p className='movie-description__creator'>Creador</p>
        </article>
      </div>
      <article className='movie-carrousel'>
        <h2>Reparto de la serie</h2>
        <MovieCastCarrousel />
      </article>
      <h3 className='casting-link'>Reparto y equipo completo (Link)</h3>
      <h3 className='actual-season'>Temporada actual (Link)</h3>
      <article className='season-card'>
        <div>
          <h2>Temporada 24</h2>
          <h5>2022 | 8 episodios</h5>
          <p>
            La temporada 24 de Ley y Orden: Unidad de Víctimas Especiales se
            estrenó el 22 de septiembre de 2022.
          </p>
        </div>
      </article>
      <h3 className='all-seasons'>Ver todas las temporadas (Link)</h3>
      <div className='social-networks'>
        <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/social/facebook-71155d1cd369c47ce8456477833a92c324fa01e6d628cb6ece19cedea3c1c480.svg' />
        <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg' />
        <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg' />
        <img src='https://www.themoviedb.org/assets/2/v4/logos/justwatch-small-grey-b589701cfd61de942e17ae33c34a7c939a1218595df3d8744c16a5612f0fd6f7.svg' />
        <img src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-351-link-5f643a86c2515cb06ea08ebc798941824f76bbcea4ed571222a81f271b30c7f3.svg' />
      </div>
      <MovieData />
      <div className='movie-tags'>
        <h3>Palabras clave</h3>
        <div>
          <p>detective</p>
          <p>sex scandal</p>
          <p>sexual violence</p>
          <p>domestic abuse</p>
          <p>criminal</p>
          <p>sex trade</p>
          <p>interrogation</p>
          <p>courtroom</p>
          <p>sex slavery</p>
        </div>
      </div>
    </section>
  )
}
