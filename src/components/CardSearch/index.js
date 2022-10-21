import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import styles from './CardSearch.module.css'

const PATHIMG = 'https://image.tmdb.org/t/p/w500/'

const CardSearch = ({ data }) => {
  const { id, title, name, overview, release_date: releaseDate, first_air_date: firstAirDate, genre_ids: genreIDs, vote_average: vote } = data
  const [genres, setGenres] = useState(null)
  const [genresNames, setGenresNames] = useState(null)
  const img = data.poster_path ? PATHIMG + data.poster_path : 'https://www.prokerala.com/movies/assets/img/no-poster-available.webp'
  const date = releaseDate || firstAirDate
  const [fav, setFav] = useState('🖤')
  const [modal, setModal] = useState(false)

  console.log(data)

  const handleHeart = (e) => {
    fav !== '❤️' ? setFav('❤️') : setFav('🖤')
    setModal(true)
    setTimeout(() => {
      setModal(false)
    }, 2000)

    const favs = localStorage.getItem('favsMovieDb')
    const favsArray = favs ? JSON.parse(favs) : []
    const date = data.data.releaseDate || data.data.first_air_date
    const vote = data.data.vote_average
    const newFav = {
      id,
      title,
      date,
      img,
      vote
    }
    localStorage.setItem('favsMovieDb', JSON.stringify(newFav))

    const isLike = favsArray.find((el) => el.id === id)
    if (!isLike) {
      favsArray.push(newFav)
      localStorage.setItem('favsMovieDb', JSON.stringify(favsArray))
      setFav('❤️')
    } else {
      const arrayFilter = favsArray.filter((el) => el.id !== id)
      localStorage.setItem('favsMovieDb', JSON.stringify(arrayFilter))
      setFav('🖤')
    }
  }

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0df9980ecbd4e5bed0ef64d4c4fb60b7&language=es-ES')
      .then(res => res.json())
      .then(res => {
        setGenres(res.genres)
      }
      )
  }, [])

  useEffect(() => {
    genresName(genreIDs)
  }, [genres])

  useEffect(() => {
    const fa = localStorage.getItem('favsMovieDb')
    const lista = fa ? JSON.parse(fa) : []
    const like = lista?.find((el) => parseInt(el.id) === id)
    like ? setFav('❤️') : setFav('🖤')
  }, [])

  const genresName = (ids) => {
    if (genres) {
      const aa = []
      ids.forEach(el => {
        if (genres.find(({ id }) => id === el)) {
          aa.push(genres.find(e => e.id === el))
        }
      }
      )
      setGenresNames(aa)
    }
  }
  const limitString = (str) => {
    if (str.length > 150) {
      return { string: str.slice(0, 147).concat('...') }
    }
    return { string: str }
  }
  return (
    <>
<article className={styles.container}>
  <img src={img}/>
    {modal && <Modal fav={fav} />}
  <div className={styles.wrapperText}>
  <h5 className={styles}>{title || name}</h5>
  <p>
    {genresNames?.map((el, index) => <span key={index}>- {el.name} </span>)}
  - </p>
  <div className={styles.wrapperDateVote}>
  {date && <p className={styles.date}>Estreno : {date}</p>}
  {vote > 0 && <p className={styles.vote}>Calificación : {vote} </p>}
  </div>
  <p className={styles.overviewText}>{limitString(overview).string}</p>
  </div>
        <button className={styles.btnFav}
         onClick={ handleHeart }
         >
      {fav}
</button>
</article>
    </>
  )
}

export default CardSearch
