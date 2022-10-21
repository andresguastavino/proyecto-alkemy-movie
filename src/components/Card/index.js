import React, { useEffect, useState } from 'react'
import Modal from '../Modal'
import styles from './Card.module.css'
import CircleProgress from '../CircleProgress'

const PATHIMG = 'https://image.tmdb.org/t/p/w500/'

const Card = (data) => {
  const { title, id, name } = data.data
  const [fav, setFav] = useState('🖤')
  const [modal, setModal] = useState(false)
  const img = PATHIMG + data.data.poster_path

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
    const fa = localStorage.getItem('favsMovieDb')
    const lista = fa ? JSON.parse(fa) : []
    const like = lista.find((el) => parseInt(el.id) === data.data.id)
    like ? setFav('❤️') : setFav('🖤')
  }, [])

  return (
    <>
    <article className={styles.containerCard}>
      <div className={styles.wrapperCard}>
       <CircleProgress vote={data.data.vote_average.toFixed(1) * 10}/>
      <img src={img} className={styles.imgPoster} alt="" onClick={(e) => console.log(e.target)}/>
       {modal && <Modal fav={fav} />}
      </div>
      <h5 onClick={(e) => console.log(e.target)}>{title || name }</h5>
      {/* <Link to='/'>{title || name }</Link> */}
       <p>{data.data.release_date || data.data.first_air_date}</p>
      <button className={styles.btnFav}
         onClick={ handleHeart }
         >
      {fav}
</button>
</article>
            </>
  )
}
export default Card
