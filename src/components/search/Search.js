import React, { useState } from 'react'
import debounce from 'lodash.debounce'
import { useGetMoviesBySearchWordQuery } from '../../services/moviesData'

import './Search.css'

const Search = () => {
  const [query, setQuery] = useState('')

  // Get the data from the store
  const { data } = useGetMoviesBySearchWordQuery(query)
  const moviesBySearchWord = data?.results

  console.log(moviesBySearchWord)

  const handleInput = debounce((e) => {
    if (e.target.value.length > 2) {
      setQuery(e.target.value)
    }
  }, 1000)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='text-form'
          onChange={handleInput}
          name='sear'
          placeholder='Buscar....'
        />
        <input type='submit' value='Buscar' />
      </form>
    </div>
  )
}

export default Search
