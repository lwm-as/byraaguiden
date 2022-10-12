import classNames from 'classnames/bind'
import { useRouter } from 'next/dist/client/router'
import useWindowSize from '../../utils/windowSize'
import { useEffect, useState } from 'react'
import { servicesArray } from '../../data/tabs'
import Link from 'next/link'
import styles from '../common/HeroSection/HeroSection.module.css'
import TabSlider from '../common/HeroSection/TabSlider/TabSlider'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const cx = classNames.bind(styles)

export default function ServiceTab() {
  const router = useRouter()

  let articleServicePath = router.asPath.split('#')[1]

  const { width } = useWindowSize()
  const isMobile = width < 1200

  const [selectedTab, setSelectedTab] = useState({})

  useEffect(() => {
    setSelectedTab(prevValue => {
      return servicesArray.find(({ id, service: service }) => {
        if (decodeURIComponent(articleServicePath) === service) {
          return {
            ...prevValue,
            id,
            service: service
          }
        }
        if (!articleServicePath) {
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
      {isMobile && (
        <TabSlider
          article
          data={servicesArray}
          setActiveClassText={setActiveClassText}
          setActiveClass={setActiveClass}
        />
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
