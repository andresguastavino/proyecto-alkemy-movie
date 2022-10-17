import styles from './styles.module.css'

// eslint-disable-next-line react/prop-types
const Modal = ({ fav }) => {
  return (
    <div className={styles.modal} >
      <h5 className={styles.titleModal}>{fav === '❤️' ? 'Agregada a' : 'Quitada de'}   Favoritos</h5>
    </div>
  )
}

export default Modal
