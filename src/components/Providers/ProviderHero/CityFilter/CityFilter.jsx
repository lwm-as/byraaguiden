import React, { useEffect, useRef, useState } from 'react'
import Select, { components } from 'react-select'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CityFilter.module.css'
import { useReviewContext } from '../../../Cities/ReviewContextProvider'
import { useRouter } from 'next/router'
import useOutsideDetecter from '../../../../utils/hooks/useOutsideDetecter'
import excerpts from 'excerpts'

const cx = classNames.bind(styles)

export default function CityFilter({ setChangingCity }) {
  const [openSelect, setOpenSelect] = useState(false)
  const [displayText, setDisplayText] = useState('')

  const wrapperRef = useRef(null)
  const router = useRouter()
  const { cities } = useReviewContext()

  const onClose = () => {
    setOpenSelect(false)
  }
  useOutsideDetecter(wrapperRef, onClose)

  useEffect(() => {
    const handleRouteChange = url => {
      setChangingCity(true)
    }

    function handleCompletedRoute() {
      setChangingCity(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleCompletedRoute)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [displayText, router])

  function handleChange(e) {
    setDisplayText(excerpts(e?.target?.innerHTML))
    setOpenSelect(false)
  }

  function handleClick() {
    setOpenSelect(prevValue => !prevValue)
  }

  return (
    <div ref={wrapperRef} className={cx('select-container')}>
      <span className={cx('filtrer')}>Filtrer:</span>
      <div onClick={handleClick} className={cx('select-inner', { openSelect })}>
        <span className={cx('displayText')}>{displayText || 'Sted'}</span>
        <div className={cx('icon-container')}>
          <FontAwesomeIcon className={cx('icon')} icon={['fas', 'chevron-down']} />
        </div>
      </div>
      {openSelect && (
        <div className={cx('options')}>
          <ul className={cx('list')}>
            {cities.map(({ slug, tags: { nodes } }) => {
              return (
                <a onClick={e => handleChange(e)} href={`/${slug}`}>
                  {nodes[0].name}
                </a>
              )
            })}
          </ul>
        </div>
      )}
      {/*<Select*/}
      {/*  styles={style}*/}
      {/*  defaultValue={{ label: 'Sted' }}*/}
      {/*  isSearchable={false}*/}
      {/*  closeMenuOnScroll*/}
      {/*  onChange={handleChange}*/}
      {/*  options={options()}*/}
      {/*  components={{ IndicatorSeparator: () => null, DropdownIndicator }}*/}
      {/*  className={cx('react-select-container')}*/}
      {/*  classNamePrefix='react-select'*/}
      {/*/>*/}
    </div>
  )
}
