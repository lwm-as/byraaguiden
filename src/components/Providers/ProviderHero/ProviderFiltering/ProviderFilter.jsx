import React, { useState, useEffect, useRef } from 'react'
import { useReviewContext } from 'src/context/ReviewContext'
import ProviderFilterCheckbox from './ProviderFilterCheckbox'
import styles from '../ProviderHero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from 'utils/windowSize'
import { disableScroll } from 'utils/disableScroll'

const ProviderFilter = ({ title, name }) => {
  const [open, setOpen] = useState(false)
  const { filterReviews, sortFilters } = useReviewContext()

  const handleChange = event => {
    filterReviews(event.target.value, name)
  }

  const size = useWindowSize()

  const select = useRef()

  useEffect(() => {
    if (open && size.width < 768) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [open])

  useEffect(() => {
    document.addEventListener('click', event => {
      if (select.current && !select.current.contains(event.target)) {
        setOpen(false)
      }
    })
  }, [])

  return (
    <div className={styles.selectWrapper} ref={select}>
      <div onClick={() => setOpen(state => !state)} className={styles.select}>
        <p>{title}</p>
        <FontAwesomeIcon className={styles.icon} icon={['fal', 'chevron-down']} />
      </div>
      {open && (
        <>
          <div className={styles.mobileOverlay} onClick={() => setOpen(false)} />
          <div className={styles.itemContainer}>
            {size.width < 768 && (
              <div className={styles.itemHeader}>
                <h3>Filtrer etter {title.toLowerCase()}:</h3>
                <FontAwesomeIcon onClick={() => setOpen(false)} className={styles.icon} icon={['fal', 'times']} />
              </div>
            )}
            <div className={styles.itemWrapper}>
              {sortFilters[name].map((item, idx) => (
                <ProviderFilterCheckbox handleChange={handleChange} item={item} key={idx} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProviderFilter
