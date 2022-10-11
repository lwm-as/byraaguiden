import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from '../../../utils/windowSize'

import styles from './HowItWorks.module.css'

const cx = classNames.bind(styles)

const HowItWorks = ({ content, anchor }) => {
  const { howtitle: title, howitem } = content

  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth < 768

  return (
    <div className={cx('root')}>
      {anchor && <div id={anchor} className={cx('anchor')} />}
      <h3 className={cx('title')}>{title}</h3>
      <div className={cx('items-container')}>
        <div className={cx('content-left')}>
          <div className={cx('text-box')}>
            <h4>{howitem[0].title}</h4>
            <p>{howitem[0].subtitle}</p>
          </div>
          <div className={cx('text-box')}>
            <h4>{howitem[2].title}</h4>
            <p>{howitem[2].subtitle}</p>
          </div>
          {isMobile && (
            <div className={cx('text-box')}>
              <h4>{howitem[1].title}</h4>
              <p>{howitem[1].subtitle}</p>
            </div>
          )}
        </div>
        {!isMobile && (
          <div className={cx('content-middle')}>
            <div className={cx('line', 'first-line')} />
            {howitem.map(({ iconname }) => (
              <div key={iconname} className={cx('icon-box')}>
                <FontAwesomeIcon icon={['fal', iconname]} color='#2288EF' />
              </div>
            ))}
            <div className={cx('line', 'second-line')} />
          </div>
        )}
        {!isMobile && (
          <div className={cx('content-right')}>
            <div className={cx('text-box')}>
              <h4>{howitem[1].title}</h4>
              <p>{howitem[1].subtitle}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HowItWorks
