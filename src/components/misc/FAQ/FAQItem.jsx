import React from 'react'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './FAQ.module.css'

const cx = classNames.bind(styles)

const FAQItem = ({ data, state, setState }) => {
  const { question, answer } = data
  const isOpen = state === question

  return (
    <div className={cx('faq-item')} key={question} onClick={() => setState(question)}>
      <div className={cx('faq-header')}>
        <h4>{question}</h4>
        <span className={cx('faq-icon-container')}>
          {isOpen ? (
            <FontAwesomeIcon icon={['fal', 'chevron-up']} size='sm' color='#2288EF' />
          ) : (
            <FontAwesomeIcon icon={['fal', 'chevron-down']} size='sm' color='#2288EF' />
          )}
        </span>
      </div>
      <p style={!isOpen ? { display: 'none' } : null}>{answer}</p>
    </div>
  )
}

export default FAQItem
