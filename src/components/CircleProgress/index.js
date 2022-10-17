import React from 'react'
import styles from './styles.module.css'
// eslint-disable-next-line react/prop-types
const CircleProgress = ({ vote }) => {
  const color = (vot) => {
    return vot > 50 ? '1ed5a9' : 'ddd'
  }

  const negative = (vot) => {
    return vot > 50 ? '-90deg' : '90deg'
  }

  const progress = (vot) => {
    switch (true) {
      case vot > 0 && vot < 11 : return 126
      case vot > 10 && vot < 15: return 144
      case vot > 14 && vot < 21: return 162
      case vot > 20 && vot < 25: return 178
      case vot > 24 && vot < 31: return 196
      case vot > 30 && vot < 35: return 214
      case vot > 34 && vot < 41: return 232
      case vot > 40 && vot < 45: return 250
      case vot > 44 && vot < 50: return 259
      case vot === 50 : return 270
      case vot > 50 && vot < 55: return 279
      case vot > 54 && vot < 61: return 297
      case vot > 60 && vot < 65: return 315
      case vot > 64 && vot < 71: return 333
      case vot > 70 && vot < 75: return 351
      case vot > 74 && vot < 81: return 369
      case vot > 80 && vot < 81: return 387
      case vot > 84 && vot < 91: return 405
      case vot > 90 && vot < 95: return 423
      case vot === 100 : return 450

      default:
        return 0
    }
  }

  const sty1 = { backgroundImage: 'linear-gradient(' + negative(vote) + ', #' + color(vote) + ' 50%, transparent 50%), linear-gradient(' + progress(vote) + 'deg , #1ed5a9 50%, #aaa 50% )' }

  return (
    <section>
        <div className={styles.radialProgressBar} style={ sty1 }>
          <div className={styles.overlay}>{vote}<span>%</span></div>
          </div>
</section>
  )
}
export default CircleProgress
