import classNames from 'classnames/bind'
import styles from './CommonQuestions.module.css'
import { useToggler } from '../../../hooks/useToggler'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

export default function CommonQuestions({ registerfaq }) {
  const { openIndexes, toggleIndex } = useToggler()

  function handleDropDownClick(index) {
    toggleIndex(index)
  }

  function handleIcon(index) {
    return openIndexes.includes(index) ? 'chevron-down' : 'chevron-up'
  }

  return (
    <>
      <h3 className={cx('title')}>Ofte stilte spørsmål</h3>
      <div className={cx('root')}>
        {registerfaq.map(({ question, answer }, idx) => {
          return (
            <div className={cx('item-root')} onClick={() => handleDropDownClick(idx)}>
              <div className={cx('header')}>
                <span>{question}</span>
                <FontAwesomeIcon icon={['fas', handleIcon(idx)]} color='#002E47' size='sm' />
              </div>
              {openIndexes.includes(idx) && (
                <div>
                  <p>{answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
