import styles from './SearchResults.module.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMoviesBySearchWordQuery, useGetTvBySearchWordQuery } from '../../services/moviesData'
import CardSearch from '../CardSearch'
import Search from '../Search'

const SearchResults = () => {
  const { query } = useParams()
  const [page, setPage] = useState(1)
  const { data: movies } = useGetMoviesBySearchWordQuery({ searchWord: query, page })
  const moviesSearch = movies?.results
  const { data: tv } = useGetTvBySearchWordQuery({ searchWord: query, page })
  const tvSearch = tv?.results
  const [filterBtn, setFilterBtn] = useState('movie')
  const [dataSearch, setDataSearch] = useState()
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    setDataSearch(moviesSearch)
  }, [moviesSearch])

  useEffect(() => {
    if (filterBtn === 'movie') {
      setDataSearch(moviesSearch)
      setPage(1)
      setTotalPages(movies?.total_pages)
    } else {
      setDataSearch(tvSearch)
      setTotalPages(tv?.total_pages)
      setPage(1)
    }
  }, [filterBtn])

  console.log(movies)
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.wrapperResult}>
      <p className={styles.query}>Resultados para <span>{query} :</span></p>
      <div className={styles.wrapperBtn}>
              <button
                onClick={(e) => {
                  setFilterBtn('movie')
                }}
                className={filterBtn === 'movie' ? styles.active : ''}
              >
                Movies :  {movies?.total_results}
              </button>
              <button
                onClick={(e) => {
                  setFilterBtn('tv')
                }}
                className={filterBtn === 'tv' ? styles.active : ''}
              >
                Tv :  {tv?.total_results}
              </button>
            </div>

      </div>
      <div className={styles.wrapperCars}>
      {dataSearch?.map(el => <CardSearch key={el.id} data={el}/>) }
      </div>
      <div className={styles.pageBtn}>
        {page === 1 ? <p></p> : <button onClick={() => setPage(page - 1)} > {page > 1 ? (page - 1) + ' < Prev.' : '0 <'} </button>}
        {page > 1 && <button onClick={() => setPage(1)} > Ir a Pag 1</button> }
        {page < totalPages && <button onClick={() => setPage(page + 1)} > { 'Sig. > ' + (page + 1)}</button>}
      </div>
      </div>
  )
}

export default SearchResults
