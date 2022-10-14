import React, { useState } from 'react'
import Card from '../card/Card'
import Search from '../search/Search'
import {
  useGetMoviesByFilterQuery,
  useGetMoviesByTrendQuery
} from '../../services/moviesData'

import './Main.css'

const Main = () => {
  const [trendingFilter, setTrendingFilter] = useState('day')
  const [popularFilter, setPopularFilter] = useState('movie')

  const { data } = useGetMoviesByFilterQuery(popularFilter)
  const moviesByFilter = data?.results

  const { data: movies } = useGetMoviesByTrendQuery(trendingFilter)
  const moviesByTrend = movies?.results

  return (
    <>
      <div className='container'>
        <Search />
        <div>
          <div className='wrapper-sub'>
            <h3>Lo más popular</h3>
            <div className='wrapper-btn'>
              <button
                onClick={(e) => {
                  setPopularFilter('movie')
                }}
                className={popularFilter === 'movie' ? 'active' : ''}
              >
                Movies
              </button>
              <button
                onClick={(e) => {
                  setPopularFilter('tv')
                }}
                className={popularFilter === 'tv' ? 'active' : ''}
              >
                Tv
              </button>
            </div>
          </div>
        </div>
        <div className='container-card'>
          {moviesByFilter?.map((el, index) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
      </div>
      <div className='container'>
        <div className='wrapper-sub'>
          <h3>Tendencia</h3>
          <div className='wrapper-btn'>
            <button
              onClick={(e) => {
                setTrendingFilter('day')
              }}
              className={trendingFilter === 'day' ? 'active' : ''}
            >
              Hoy
            </button>
            <button
              onClick={(e) => {
                setTrendingFilter('week')
              }}
              className={trendingFilter === 'week' ? 'active' : ''}
            >
              Semana
            </button>
          </div>
        </div>
        <div className='container-card'>
          {moviesByTrend?.map((el, index) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Main
