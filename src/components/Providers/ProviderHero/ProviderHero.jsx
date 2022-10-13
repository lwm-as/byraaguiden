import Disclaimer from './Disclaimer/Disclaimer'
import CityFilter from './CityFilter/CityFilter'
import ProviderSort from './ProviderSorting/ProviderSort'

import styles from './ProviderHero.module.css'
import classNames from 'classnames/bind'
import Button from '../../common/Button/Button'
import { useToggler } from '../../../hooks/useToggler'
import { useReviewContext } from '../../Cities/ReviewContextProvider'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

const ProviderHero = () => {
  const { toggleButton, checkedButtons } = useToggler()
  const { sortReviews, sortValue } = useReviewContext()

  // const [selectedValue] = sortValue.filter(value => value.selected)
  // const options = sortValue.filter(value => !value.selected)

  useEffect(() => {
    sortReviews({ target: { dataset: { value: 'highestScore' } } })
  }, [])

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
          <h3 className={cx('title', 'sorter-title')}>Sorter etter</h3>
          <div className={cx('inner-filter')}>
            {sortValue
              .filter(
                item =>
                  item.value === 'Høyest kundetilfredshet' ||
                  item.value === 'Høyest Byrå-score' ||
                  item.value === 'Høyest popularitet'
              )
              .map((item, idx) => {
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
          <h3 className={cx('title')}>Filtrer</h3>
          <CityFilter />
        </div>
        {/*<div className={styles.providerHeroLeft}>*/}
        {/*  <Disclaimer />*/}
        {/*</div>*/}
        {/*<div className={styles.providerHeroRight}>*/}
        {/*  <div>*/}
        {/*    <p className={styles.heroTitle}>Filtrer</p>*/}
        {/*    <div className={styles.selectContainer}>*/}
        {/*      <CityFilter title='Sted' />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <p className={styles.heroTitle}>Sorter</p>*/}
        {/*    <div className={styles.selectContainer}>*/}
        {/*      <ProviderSort />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </>
  )
}

export default ProviderHero
