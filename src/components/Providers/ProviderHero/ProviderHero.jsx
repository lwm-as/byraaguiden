import Disclaimer from './Disclaimer/Disclaimer'
import CityFilter from './CityFilter/CityFilter'
import ProviderSort from './ProviderSorting/ProviderSort'

import styles from './ProviderHero.module.css'
import classNames from 'classnames/bind'
import Button from '../../common/Button/Button'
import { useToggler } from '../../../hooks/useToggler'
import { useReviewContext } from '../../Cities/ReviewContextProvider'
import { useEffect, useState } from 'react'
import { SORT_OPTIONS } from '../../../lib/constants/sortOptions'
import OmVårVurdering from '../../common/Modal/OmVårVurdering/OmVårVurdering'
import Image from '../../common/Image/Image'

const cx = classNames.bind(styles)

const ProviderHero = ({ setChangingCity }) => {
  const { toggleButton, checkedButtons } = useToggler()
  const {
    reviews: { sortReviews }
  } = useReviewContext()

  const [open, setOpen] = useState(false)

  function handleClick({ e, idx }) {
    sortReviews(e)
    toggleButton(idx)
  }

  function setActiveClass({ idx }) {
    return checkedButtons.includes(idx) ? 'active' : ''
  }

  function disableButton({ idx }) {
    return checkedButtons.includes(idx)
  }

  const filtered = SORT_OPTIONS.filter(
    item =>
      item.value === 'Høyest kundetilfredshet' ||
      item.value === 'Høyest Byrå-score' ||
      item.value === 'Høyest popularitet'
  )
  return (
    <>
      {open && <OmVårVurdering onClose={() => setOpen(false)} open={open} />}
      <span className={cx('title', 'sorter-title')}>Sorter etter:</span>
      <div className={cx('root')}>
        <div className={cx('inner-filter')}>
          {filtered.map((item, idx) => {
            return (
              <Button
                key={idx}
                disabled={disableButton({ idx })}
                size='small'
                data-value={item.key}
                className={cx('btn', setActiveClass({ idx }))}
                onClick={e => handleClick({ e, idx })}
              >
                {item.value}
              </Button>
            )
          })}

          <CityFilter setChangingCity={setChangingCity} />
        </div>
      </div>
      <div className={cx('om-vaar-container')}>
        <Image
          imageData={{
            sourceUrl: 'https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/11/acclamation_mark.svg',
            mediaDetails: {
              width: 17,
              height: 17
            }
          }}
        />
        <span onClick={() => setOpen(true)} className={cx('om-vaar-vurdering')}>
          Om vår vurdering
        </span>
      </div>
    </>
  )
}

export default ProviderHero
