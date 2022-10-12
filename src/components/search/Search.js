import './Search.css'
import React, { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

const ENDPOINT = 'https://api.themoviedb.org/3/'

const Search = () => {
  const [query, setQuery] = useState()
  const [search, setSearch] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
  }

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

  console.log(search)

  const handleInput = debounce((e) => {
    if (e.target.value.length > 2) {
      setQuery(e.target.value)
    }
  }, 1000)
  return (
    <div className='search'>
    <form onSubmit={handleSubmit}>
    <input type='text' className='text-form'
    onChange={handleInput} name='sear' placeholder='Buscar....'/>
    <input type='submit' value='Buscar'/>
      </form>
    </div>
  )
}

export default Search
