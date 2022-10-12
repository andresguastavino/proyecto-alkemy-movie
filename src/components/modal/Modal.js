import './Modal.css'

// eslint-disable-next-line react/prop-types
const Modal = ({ fav }) => {
  return (
    <div className='modal' >
      <h5 className='title-Modal'>{fav === '❤️' ? 'Agregada a' : 'Quitada de'}   Favoritos</h5>
    </div>
  )
}

export default Modal
