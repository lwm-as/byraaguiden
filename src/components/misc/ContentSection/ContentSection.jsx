import React from 'react'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../../common/Image/Image'

import styles from './ContentSection.module.css'

const cx = classNames.bind(styles)

const ContentSection = ({ content }) => {
  const {
    contenttitle: title,
    contentsubtitle: subtitle,
    contentimage: image,
    contentbulletpoints: bulletpoints
  } = content
  return (
    <div className={cx('root')}>
      <div className={cx('section', 'section-left')}>
        <Image imageData={image} />
      </div>
      <div className={cx('section', 'section-right')}>
        <h2 className={cx('title', subtitle ? 'title-small' : null)}>{title}</h2>
        {!!subtitle && <p className={cx('subtitle')}>{subtitle}</p>}
        {!!bulletpoints && (
          <ul className={cx('bulletpoints')}>
            {bulletpoints.map(({ bullet, iconname }) => (
              <li key={bullet} className={cx('bullet')}>
                <div className={cx('bullet-icon')}>
                  <FontAwesomeIcon icon={['fal', `${iconname}`]} color='#2288EF' size='lg' />
                </div>
                <span className={cx('bullet-text')}>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ContentSection
