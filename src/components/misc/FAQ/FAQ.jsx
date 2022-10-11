import React, { useState } from 'react'
import classNames from 'classnames/bind'

import FAQItem from './FAQItem'

import styles from './FAQ.module.css'

const cx = classNames.bind(styles)

const FAQ = ({ data, anchor }) => {
  const [currentFAQ, setCurrentFAQ] = useState('')

  const toggle = id => {
    const [newFAQ] = data.filter(item => item.question === id)
    newFAQ.question === currentFAQ ? setCurrentFAQ('') : setCurrentFAQ(newFAQ.question)
  }

  return (
    <div className={cx('root')}>
      {anchor && <div id={anchor} className={cx('anchor')} />}
      <h2 className={cx('title')}>Ofte stilte spørsmål</h2>
      {data.map(item => (
        <FAQItem key={item.question} data={item} state={currentFAQ} setState={toggle} />
      ))}
    </div>
  )
}

export default FAQ
