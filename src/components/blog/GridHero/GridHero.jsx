import React from 'react'
import classNames from 'classnames/bind'
import styles from './GridHero.module.css'
import excerpts from 'excerpts'
import Container from '../../layout/Container/Container'

const cx = classNames.bind(styles)

export default function GridHero({ width, title, description, component = '', textAlignCenter, className, ...props }) {
  return (
    <div className={cx('root', className)} {...props}>
      <div className={cx('dark-square-left')} />
      <div className={cx('red-square')} />
      {/*<div className={cx('red-square')} />*/}
      <Container size='medium' className={cx('container')}>
        <h1 className={cx('title', { textAlignCenter })}>{title}</h1>
        {description && (
          <p className={cx('text', { textAlignCenter }, width)}>{excerpts(description, { words: 1000 })}</p>
        )}{' '}
        {component && (
          <div className={cx('icons-content')}>
            <div className={cx('icons-container')}>
              <img src='/media/icons/check.svg' alt='' />
              <span>Gratis</span>
            </div>
            <div className={cx('icons-container')}>
              <img src='/media/icons/check.svg' alt='' />
              <span>Enkelt</span>
            </div>
            <div className={cx('icons-container')}>
              <img src='/media/icons/check.svg' alt='' />
              <span>Få flere kunder</span>
            </div>
          </div>
        )}
      </Container>
      <div className={cx('dark-square-right')} />
      <div className={cx('red-square-bottom')} />
    </div>
  )
}
