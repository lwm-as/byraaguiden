import React from 'react'
import Select, { components } from 'react-select'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CityFilter.module.css'
import { useReviewContext } from '../../../Cities/ReviewContextProvider'
import { useRouter } from 'next/router'

const cx = classNames.bind(styles)

export default function CityFilter() {
  const router = useRouter()
  const { cities } = useReviewContext()

  const DropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon className={cx('icon')} icon={['fas', 'chevron-down']} />
    </components.DropdownIndicator>
  )

  const style = {
    control: (base, state) => ({
      ...base,
      boxShadow: 'none',
      fontSize: '14px',
      height: '47px',
      borderRadius: '12px',
      outline: 'none',
      borderColor: state.isFocused ? '#FF4A55 !important' : '#D3D4D5 !important',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#FF4A55'
      },
      '&: hover': {}
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#FF4A55' : 'white',
      fontSize: '16px',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#FF4A55',
        color: 'white'
      }
    })
  }

  const options = () => {
    const optionsArray = []
    cities.map(({ slug, tags: { nodes } }, idx) =>
      optionsArray.push({ value: slug, dataId: idx, label: nodes[0].name })
    )
    return optionsArray
  }

  function handleChange(e) {
    return router.push(e.value)
  }

  return (
    <div className={cx('select-container')}>
      <Select
        styles={style}
        defaultValue={{ label: 'Sted' }}
        isSearchable={false}
        closeMenuOnScroll
        onChange={handleChange}
        options={options()}
        components={{ IndicatorSeparator: () => null, DropdownIndicator }}
        className={cx('react-select-container')}
        classNamePrefix='react-select'
      />
    </div>
  )
}
