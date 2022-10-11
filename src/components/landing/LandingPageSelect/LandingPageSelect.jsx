import React from 'react'
import Select, { components } from 'react-select'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './LandingPageSelect.module.css'

const cx = classNames.bind(styles)

export default function LandingPageSelect() {
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
      outline: 'none',
      borderColor: state.isFocused ? '#d3d3d3 !important' : '#d3d3d3 !important',
      '&:hover': {
        cursor: 'pointer',
        borderColor: '#CCCCC !important'
      }
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#1612b7' : 'white',
      fontSize: '14px',
      '&:hover': {
        cursor: 'pointer'
      }
    })
  }

  const lol = [
    {
      id: 0,
      text: 'Top 10'
    },
    {
      id: 1,
      text: 'Top 15'
    },
    {
      id: 2,
      text: 'Top 20'
    }
  ]

  const options = () => {
    const optionsArray = []
    lol.map(({ id, text }) => optionsArray.push({ value: text, dataId: id, label: text }))
    return optionsArray
  }

  function handleChange() {}

  return (
    <div className={cx('select-container')}>
      <Select
        styles={style}
        // defaultValue={{ label: 'Top 10 selected' }}
        isSearchable={false}
        closeMenuOnScroll
        onChange={handleChange}
        options={options()}
        components={{ IndicatorSeparator: () => null, DropdownIndicator }}
        className={cx('react-select-root')}
      />
    </div>
  )
}
