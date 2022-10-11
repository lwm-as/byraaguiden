import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DATA from '../../../data/ctadata'

import Button from '../../common/Button/Button'

import styles from './CTASection.module.css'

const cx = classNames.bind(styles)

const CTASection = ({ category }) => {
  const { name, slug } = category
  const currentCategory = DATA.filter(object => object.name === name)

  const { title, titleSize, text, bulletpoints } = currentCategory[0]

  return (
    <div className={cx('root')}>
      <h3 className={cx('title')} style={{ fontSize: titleSize }}>
        {title}
      </h3>
      <p className={cx('text')}>{text}</p>
      <ul className={cx('list')}>
        {bulletpoints.map(bullet => (
          <li className={cx('list-item')}>
            <i className={cx('icon-container')}>
              <FontAwesomeIcon className={cx('icon')} icon={['fal', 'check']} />
            </i>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Button link={`/${slug}/tilbud`} flex='flex-center' size='large'>
        Få tilbud
      </Button>
      <p className={cx('disclaimer')}>
        <FontAwesomeIcon className={cx('icon')} icon={['fal', 'clock']} />
        <i>Det tar kun 2 minutter</i>
      </p>
    </div>
  )
}

export default CTASection
