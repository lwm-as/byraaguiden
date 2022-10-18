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

const ProviderHero = () => {
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

  return (
    <>
      <div className={cx('root')}>
        <div className={cx('filter')}>
          <span className={cx('title', 'sorter-title')}>Sorter etter:</span>
          <div className={cx('inner-filter')}>
            {SORT_OPTIONS.filter(
              item =>
                item.value === 'Høyest kundetilfredshet' ||
                item.value === 'Høyest Byrå-score' ||
                item.value === 'Høyest popularitet'
            ).map((item, idx) => {
              return (
                <Button
                  disabled={disableButton({ idx })}
                  size='large'
                  data-value={item.key}
                  className={cx('btn', setActiveClass({ idx }))}
                  onClick={e => handleClick({ e, idx })}
                >
                  {item.value}
                </Button>
              )
            })}
          </div>
        </div>
        <div className={cx('city')}>
          <span className={cx('title')}>Filtrer:</span>
          <CityFilter />
        </div>
      </div>
    </>
  )
}

export default ProviderHero
