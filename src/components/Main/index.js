import React, { useState } from 'react'
import Card from '../Card'
import Search from '../Search'
import {
  useGetMoviesByFilterQuery,
  useGetMoviesByTrendQuery
} from '../../services/moviesData'

import styles from './styles.module.css'

const Main = () => {
  const [trendingFilter, setTrendingFilter] = useState('day')
  const [popularFilter, setPopularFilter] = useState('movie')

  const { data } = useGetMoviesByFilterQuery(popularFilter)
  const moviesByFilter = data?.results

  const { data: movies } = useGetMoviesByTrendQuery(trendingFilter)
  const moviesByTrend = movies?.results

  return (
    <>
      <div className={styles.container}>
        <Search />
        <div>
          <div className={styles.wrapperSub}>
            <h3>Lo más popular</h3>
            <div className={styles.wrapperBtn}>
              <button
                onClick={(e) => {
                  setPopularFilter('movie')
                }}
                className={popularFilter === 'movie' ? styles.active : ''}
              >
                Movies
              </button>
              <button
                onClick={(e) => {
                  setPopularFilter('tv')
                }}
                className={popularFilter === 'tv' ? styles.active : ''}
              >
                Tv
              </button>
            </div>
          </div>
        </div>
        <div className={styles.containerCard}>
          {moviesByFilter?.map((el, index) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapperSub}>
          <h3>Tendencia</h3>
          <div className={styles.wrapperBtn}>
            <button
              onClick={(e) => {
                setTrendingFilter('day')
              }}
              className={trendingFilter === 'day' ? styles.active : ''}
            >
              Hoy
            </button>
            <button
              onClick={(e) => {
                setTrendingFilter('week')
              }}
              className={trendingFilter === 'week' ? styles.active : ''}
            >
              Semana
            </button>
          </div>
        </div>
        <div className={styles.containerCard}>
          {moviesByTrend?.map((el, index) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Main
