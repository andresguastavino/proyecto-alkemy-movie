import React, { useState } from 'react'
import styles from './Search.module.css'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleInput = (e) => {
    if (e.target.value.length > 2) {
      setQuery(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/search/' + query, { replace: true })
    e.target.sear.value = ''
  }
  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles.textForm}
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
