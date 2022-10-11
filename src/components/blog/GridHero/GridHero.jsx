import React from 'react'
import classNames from 'classnames/bind'
import styles from './GridHero.module.css'
// import excerpts from 'excerpts'
import Container from '../../layout/Container/Container'

const cx = classNames.bind(styles)

export default function GridHero({ title, description }) {
  return (
    <div className={cx('root')}>
      <div className={cx('dark-square-left')} />
      <div className={cx('red-square')} />
      {/*<div className={cx('red-square')} />*/}
      <Container size='medium'>
        <h1 className={cx('title')}>{title}</h1>
        {/*<p className={cx('text')}>{excerpts(description)}</p>*/}
      </Container>
      <div className={cx('dark-square-right')} />
      <div className={cx('red-square-bottom')} />
    </div>
  )
}
