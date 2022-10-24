import Disclaimer from './Disclaimer/Disclaimer'
import CityFilter from './CityFilter/CityFilter'
import ProviderSort from './ProviderSorting/ProviderSort'

import styles from './ProviderHero.module.css'
import classNames from 'classnames/bind'
import Button from '../../common/Button/Button'
import { useToggler } from '../../../hooks/useToggler'
import { useReviewContext } from '../../Cities/ReviewContextProvider'
import { useEffect } from 'react'
import { SORT_OPTIONS } from '../../../lib/constants/sortOptions'

const cx = classNames.bind(styles)

const ProviderHero = ({ setChangingCity }) => {
  const { toggleButton, checkedButtons } = useToggler()
  const { sortReviews, sortValue } = useReviewContext()

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
      <span className={cx('title', 'sorter-title')}>Sorter etter:</span>
      <div className={cx('root')}>
        <div className={cx('inner-filter')}>
          {filtered.map((item, idx) => {
            return (
              <Button
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
    </>
  )
}

export default ProviderHero
