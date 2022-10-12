import './Main.css'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import debounce from 'lodash.debounce'

const ENDPOINT = 'https://api.themoviedb.org/3/'
const API_KEY = '0df9980ecbd4e5bed0ef64d4c4fb60b7'

const Main = () => {
  const [trendingFilter, setTrendingFilter] = useState('day')
  const [popularFilter, setPopularFilter] = useState('movie')
  const [data, setData] = useState()
  const [dataTrending, setDataTrending] = useState()
  const [query, setQuery] = useState()
  const [search, setSearch] = useState()

  useEffect(() => {
    fetch(`${ENDPOINT}${popularFilter}/popular?api_key=${API_KEY}`).then(res => res.json()).then(da => setData(da.results)).catch(err => console.log(err))
  }, [popularFilter])

  useEffect(() => {
    fetch(`${ENDPOINT}trending/all/${trendingFilter}?api_key=0df9980ecbd4e5bed0ef64d4c4fb60b7`).then(res => res.json()).then(da => setDataTrending(da.results)).catch(err => console.log(err))
  }, [trendingFilter])

  useEffect(() => {
    if (query) {
      fetch(`${ENDPOINT}search/multi?api_key=0df9980ecbd4e5bed0ef64d4c4fb60b7&page=1&query=${query}`)
        .then(res => res.json())
        .then(da => {
          setSearch(da.results)
        })
        .catch(err => console.log(err))
    }
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleInput = debounce((e) => {
    if (e.target.value.length > 2) {
      setQuery(e.target.value)
    }
  }, 1000)

  console.log(search)
  return <>
  <div className='container'>
    
    <div>
    <div className='wrapper-sub'>
    <h3>Lo más popular</h3>
    <div className='wrapper-btn'>

  <button onClick={(e) => { setPopularFilter('movie') }} className={popularFilter === 'movie' ? 'active' : ''}>Movies</button>
  <button onClick={(e) => { setPopularFilter('tv') }} className={popularFilter === 'tv' ? 'active' : ''}>
    Tv</button>
    </div>
    </div>
    </div>
    <div className='container-card'>

{data?.map((el, index) => <Card key={el.id} data={el}/>) }
    </div>
    </div>
    <div className='container'>
      <div className='wrapper-sub'>
      <h3>Tendencia</h3>
    <div className='wrapper-btn'>
    <button onClick={(e) => { setTrendingFilter('day') }} className={trendingFilter === 'day' ? 'active' : '' }>Hoy</button>
    <button onClick={(e) => { setTrendingFilter('week') }} className={trendingFilter === 'week' ? 'active' : ''}>Semana</button>
      </div>
      </div>
      <div className='container-card'>
      {dataTrending?.map((el, index) => <Card key={el.id} data={el}/>) }
      </div>
    </div>

</>
}
export default Main
