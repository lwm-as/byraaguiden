import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import Link from 'next/link'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
import { useRouter } from 'next/dist/client/router'
import styles from './HeroSection.module.css'
import useWindowSize from '../../../utils/windowSize'
import TabSlider from './TabSlider/TabSlider'
import { servicesArray } from '../../../data/tabs'

const cx = classNames.bind(styles)

const HeroSection = ({ noHeading }) => {
  const router = useRouter()
  const servicePath = router.asPath?.split('/#')[1]

  const { width } = useWindowSize()
  const isMobile = width < 768

  const [selectedTab, setSelectedTab] = useState({})

  useEffect(() => {
    setSelectedTab(prevValue => {
      return servicesArray.find(({ id, service: service }) => {
        if (decodeURIComponent(servicePath) === service) {
          return {
            ...prevValue,
            id,
            service: service
          }
        }
        if (!servicePath) {
          return {
            ...prevValue,
            id: 0,
            service: 'apputvikling'
          }
        }
      })
    })
  }, [router])

  function setActiveClass({ idx, service }) {
    return decodeURIComponent(selectedTab?.service) === service && selectedTab.id === idx ? 'activeClass' : ''
  }

  function setActiveClassText({ idx, service }) {
    return decodeURIComponent(selectedTab?.service) === service && selectedTab.id === idx ? 'activeClassText' : ''
  }

  return (
    <div className={cx('root')}>
      <div className={cx('heading')}>
        {!noHeading && (
          <h1>
            Sammenlign byråer og <br /> velg det som passer best
          </h1>
        )}
      </div>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      {isMobile && (
        <TabSlider data={servicesArray} setActiveClassText={setActiveClassText} setActiveClass={setActiveClass} />
      )}
      {!isMobile && (
        <>
          <div className={cx('list-container')}>
            {servicesArray.map(({ service, logo }, idx) => {
              return (
                <Link href={`#${service.toLowerCase()}`}>
                  <div className={cx('inner')}>
                    <div className={cx('logo-container')}>
                      <img src={logo} alt='Service' />
                    </div>
                    <div
                      style={{
                        textAlign: 'center',
                        lineHeight: '2.2rem',
                        width: service.toLowerCase() === 'seo' && '60px'
                      }}
                      className={cx('list-item', setActiveClass({ idx, service }))}
                    >
                      <a className={cx('item', setActiveClassText({ idx, service }))}>
                        {service.charAt(0).toUpperCase() + service.slice(1).toUpperCase()}
                      </a>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default HeroSection
