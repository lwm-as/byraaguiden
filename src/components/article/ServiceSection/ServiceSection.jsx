import classNames from 'classnames/bind'
import styles from './ServiceSection.module.css'
import Container from '../../layout/Container/Container'
import Button from '../../common/Button/Button'
import React from 'react'

const cx = classNames.bind(styles)

export default function ServiceSection({ category }) {
  return (
    <div className={cx('root')}>
      <Container size='medium'>
        <div className={cx('box')}>
          <div>
            <h4 className={cx('title')}>De beste {category.name.toLowerCase()}-byråen i norge</h4>
          </div>
          <div>
            <p>
              Trenger du hjelp med grafisk design? Hos oss kan du sammenligne en rekke byråer for å finne det byrået som
              passer dine behov. Få tilbud fra flere byråer og la dem konkurrere om deg.
            </p>
          </div>
          <div>
            <Button className={cx('btn')} link={`/${decodeURIComponent(category.name.toLowerCase())}`}>
              Sammenlign byråer
            </Button>
          </div>
        </div>
      </Container>
      <div className={cx('red-square')} />
    </div>
  )
}
