import React from 'react'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useWindowSize } from 'react-window-size-hooks'

import styles from './SidebarBlock.module.css'
import Button from '../Button/Button'
import useWindowSize from '../../../utils/windowSize'

const cx = classNames.bind(styles)

const TOGGLE_MOBILE_VIEW_SIZE = 1024

const SidebarBlock = () => {
  const { width } = useWindowSize()
  return (
    <>
      {width > TOGGLE_MOBILE_VIEW_SIZE ? (
        <div className={cx('root')}>
          <h3 className={cx('title')}>
            Finn beste megler <br /> nær deg
          </h3>
          <div className={cx('description')}>
            <h4>
              Fyll ut vårt enkle skjema
              <br /> for å motta 3 tilbud
            </h4>
          </div>
          <div className={cx('content-wrapper')}>
            <span className={cx('icon-wrapper')}>
              <FontAwesomeIcon size='xs' color='#2288EF' icon={['fal', 'check']} />
            </span>
            <span>Helt uforpliktende</span>
          </div>

          <div className={cx('content-wrapper')}>
            <span className={cx('icon-wrapper')}>
              <FontAwesomeIcon size='xs' color='#2288EF' icon={['fal', 'check']} />
            </span>
            <span>100% gratis</span>
          </div>

          <div className={cx('content-wrapper')}>
            <span className={cx('icon-wrapper')}>
              <FontAwesomeIcon size='xs' color='#2288EF' icon={['fal', 'check']} />
            </span>
            <span>Lokalkjente meglere</span>
          </div>

          <Button href='/tilbud' className={cx('button')} size='large'>
            Få tilbud
          </Button>
          <div className={cx('bottom-text')}>
            <span>
              <FontAwesomeIcon size='1x' color='black' icon={['fal', 'clock']} style={{ marginRight: '8px' }} />
            </span>
            <span>De tar kun 2 minutter</span>
          </div>
        </div>
      ) : (
        <div className={cx('cta-footer')}>
          <div className={cx('cta-button-container')}>
            <Button href='/' className={cx('mobile-button')} size='large'>
              Få tilbud
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default SidebarBlock
