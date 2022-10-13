import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Disclaimer.module.css'
import disableScroll from '../../../../utils/disableScroll'

const Disclaimer = () => {
  const [isDisclaimer, setIsDisclaimer] = useState(false)

  const toggleDisclaimer = () => {
    setIsDisclaimer(!isDisclaimer)
  }

  useEffect(() => {
    if (isDisclaimer) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [isDisclaimer])

  return (
    <>
      <span className={styles.disclaimerButton} onClick={toggleDisclaimer}>
        <FontAwesomeIcon className={styles.disclaimerInfoIcon} icon={['fal', 'info-circle']} /> Om vår vurdering{' '}
        <FontAwesomeIcon className={styles.disclaimerArrowIcon} icon={['fal', 'chevron-down']} />
      </span>
      {isDisclaimer && (
        <>
          <div className={styles.disclaimer}>
            <div className={styles.disclaimerOverlay} onClick={toggleDisclaimer}></div>
            <div className={styles.disclaimerDialog}>
              <span onClick={toggleDisclaimer}>
                <FontAwesomeIcon icon={['fal', 'times']} />
              </span>
              <h3>Om vår vurdering:</h3>
              <p>Tallene oppdateres live fra Google Reviews, og vår vurdering er satt opp basert på disse tallene:</p>
              <p>
                <b>Byrå-score:</b> Sammenlagt score basert på kundetilfredshet og popularitet.
              </p>
              <p>
                <b>Popularitet:</b> Antall anmeldelser i forhold til de andre bedriftene som er oppført under samme
                bransje.
              </p>
              <p>
                <b>Kundetilfredshet:</b> Antall stjerner på Google Reviews.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Disclaimer
