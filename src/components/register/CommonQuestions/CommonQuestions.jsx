import classNames from 'classnames/bind'
import styles from './CommonQuestions.module.css'
import { useToggler } from '../../../hooks/useToggler'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Expand from 'react-expand-animated'

const cx = classNames.bind(styles)

export default function CommonQuestions({ noHeading, registerfaq }) {
  const { openIndexes, toggleIndex } = useToggler()

  function handleDropDownClick(index) {
    toggleIndex(index)
  }

  function handleIcon(index) {
    return openIndexes.includes(index) ? 'chevron-up' : 'chevron-down'
  }

  return (
    <>
      {!noHeading && <h3 className={cx('title')}>Ofte stilte spørsmål</h3>}
      <div className={cx('root', { noHeading })}>
        {registerfaq.map(({ question, answer }, idx) => {
          return (
            <div className={cx('item-root')} onClick={() => handleDropDownClick(idx)}>
              <div className={cx('header')}>
                <span>{question}</span>
                <FontAwesomeIcon icon={['fas', handleIcon(idx)]} color='#002E47' size='sm' />
              </div>

              <Expand open={openIndexes.includes(idx)} duration={300}>
                <div>
                  <p>{answer}</p>
                </div>
              </Expand>
            </div>
          )
        })}
      </div>
    </>
  )
}
