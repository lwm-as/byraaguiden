import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './BurgerMenu.module.css'
import SubMenu from '../../Header/SubMenu/SubMenu'
import * as PropTypes from 'prop-types'
import disableScroll from '../../../../utils/disableScroll'

const cx = classNames.bind(styles)

export function getCorrectImage(label) {
  switch (label) {
    case 'Apputvikling':
      return 'apputvikling'
    case 'Grafisk design':
      return 'grafiskdesign'
    case 'Digital markedsføring':
      return 'digitalmarkedsføring'
    case 'Regnskapsføring':
      return 'regnskapsfører'
    case 'Regnskapsfører':
      return 'regnskapsfører'
    case 'SEO':
      return 'seo'
    case 'Telemarketing':
      return 'telemarketing'
    case 'Webdesign':
      return 'webdesign'
    case 'Webutvikling':
      return 'webutvikling'
  }
}

const BurgerMenu = ({ items, handleDropDownClick, subItems }) => {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false)

  useEffect(() => {
    if (toggleBurgerMenu) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [toggleBurgerMenu])

  return (
    <>
      <button type='button' className={cx('header-icon')} onClick={() => setToggleBurgerMenu(p => !p)}>
        {toggleBurgerMenu ? (
          <FontAwesomeIcon color='#fa5d2e' icon={['fal', 'times']} size='2x' />
        ) : (
          <FontAwesomeIcon color='#fa5d2e' icon={['fal', 'bars']} size='lg' />
        )}
      </button>

      {toggleBurgerMenu && (
        <div className={cx('root')}>
          <div className={cx('links')}>
            {items
              .filter(({ label }) => {
                return label !== 'Tjenester'
              })
              .map(({ label, path }) => {
                if (label === 'Artikler') {
                  label = 'Alle artikler'
                }
                return (
                  <div className={cx('links-item')}>
                    <a className={cx('link')} href={path}>
                      {label}
                    </a>
                    {/*<a className={cx('')} href={path}>*/}
                    {/*  bli kjent med oss*/}
                    {/*</a>*/}
                  </div>
                )
              })}
          </div>
          <hr className={cx('horizontal-rule')} />
          <div className={cx('services')}>
            {items
              .filter(({ label }) => label === 'Tjenester')
              .map(({ label, path }, index) => {
                if (label === 'Tjenester') {
                  label = 'Velg bransje'
                }
                return (
                  <div onClick={() => handleDropDownClick(index)} className={cx('service')}>
                    <div className={cx('parent-box')}>
                      <span className={cx('label')}>{label}</span>
                    </div>
                  </div>
                )
              })}
            {subItems.map(({ path, label }) => {
              const cleanPath = path.split('/category').pop()
              return (
                <a className={cx('service-box')} href={cleanPath}>
                  <img src={`/media/icons/${getCorrectImage(label)}.svg`} alt='' />
                  <a>{label}</a>
                </a>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default BurgerMenu
