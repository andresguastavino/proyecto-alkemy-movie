import styles from './styles.module.css'
import logo from '../../img/vhs-big.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'

const links = [
  'Movies',
  'TV Shows',
  'People',
  'More'
]

export default function Navbar () {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <header className={styles.header}>
          <div className={styles.logoBox}>
            <img className={styles.logoImg} src={logo} alt='logo' />
            <h1>Movies</h1>
          </div>
          <ul className={styles.ulLinks}>
            {links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </header>
        <div className={styles.bars}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={styles.ulUser}>
          <p>Hello Carlitos</p>
          <FontAwesomeIcon icon={faUser} />
        </ul>
      </nav>
    </div>
  )
}
