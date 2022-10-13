import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState, useRef } from 'react'
import { useReviewContext } from '../../../Cities/ReviewContextProvider'
import disableScroll from '../../../../utils/disableScroll'
import useWindowSize from '../../../../utils/windowSize'
import styles from '../ProviderHero.module.css'

const ProviderSort = () => {
  //sortReviews is a function

  const { sortReviews, sortValue } = useReviewContext()
  const [open, setOpen] = useState(false)

  const [selectedValue] = sortValue.filter(value => value.selected)

  const options = sortValue.filter(value => !value.selected)

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
    <div className={styles.selectWrapper} name='sort' ref={select}>
      <div onClick={() => setOpen(state => !state)} className={styles.select}>
        <p>{selectedValue.value}</p>
        <FontAwesomeIcon className={styles.icon} icon={['fal', 'chevron-down']} />
      </div>
      {open && (
        <>
          <div className={styles.mobileOverlay} onClick={() => setOpen(false)} />
          <div className={styles.itemContainer}>
            {size.width < 768 && (
              <div className={styles.itemHeader}>
                <h3>Sortering:</h3>
                <FontAwesomeIcon onClick={() => setOpen(false)} className={styles.icon} icon={['fal', 'times']} />
              </div>
            )}
            <div className={styles.itemWrapper}>
              {options.map(({ key, value }) => (
                <p className={styles.sortItem} onClick={sortReviews} key={key} data-value={key}>
                  {value}
                </p>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProviderSort
