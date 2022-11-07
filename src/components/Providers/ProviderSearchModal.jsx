import ReactSearchBox from 'react-search-box'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './ProviderSearchModal.module.css'

const cx = classNames.bind(styles)

export function ProviderSearchModal({ setSearchBox, searchBox, filteredItems, handleOnSelect }) {
  return (
    <>
      {searchBox && (
        <div className={cx('root')}>
          <span className={cx('txt')}>Skriv navnet på byrået du ønsker å sammenligne</span>
          <ReactSearchBox
            className={cx('hall')}
            placeholder='Søk på byråer'
            clearOnSelect
            data={filteredItems}
            onSelect={provider => handleOnSelect(provider)}
          />
          <span onClick={setSearchBox} className={cx('avbryt')}>
            Avbryt
          </span>
        </div>
      )}
    </>
  )
}
