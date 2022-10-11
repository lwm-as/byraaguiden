import React, { useEffect, useMemo, useRef } from 'react'

// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'
import { uniqueId } from 'lodash'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination'
import classNames from 'classnames/bind'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigation, Pagination } from 'swiper'
import styles from './HomeSlider.module.css'
import Image from '../common/Image/Image'
// import Image from '../../common/Image/Image'

const cx = classNames.bind(styles)

function HomeSlider({ data: { sliderContainer } }) {
  const [swiper, setSwiper] = React.useState(null)
  const nextRef = useRef(null)
  const prevRef = useRef(null)

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation?.init()
      swiper.navigation?.update()
    }
  }, [swiper])

  useEffect(() => {
    const links = document.querySelectorAll('.hack-slider-urls a')

    links.forEach(link => {
      link.href = link.href.replace('https://varmepumpeportalen.no/', '/')
    })
  }, [])

  const filteredSliderData = useMemo(
    () => sliderContainer.filter(slider => Boolean(slider.image, slider.imageUrl)),
    [sliderContainer]
  )
  return (
    <div className={cx('root')}>
      <button ref={prevRef} slot='container-start' type='button' className={cx('slider-btn', 'prev')}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </button>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={100}
        slidesPerView={6}
        navigation
        onSwiper={swiperr => setSwiper(swiperr)}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1020: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
      >
        {filteredSliderData.map(({ image, imageUrl }) => {
          return (
            <SwiperSlide className={cx('slider-wrapper')}>
              {!imageUrl && (
                <Link key={uniqueId()} href='/' passHref>
                  <div className={cx('link')}>
                    <div className={cx('image-wrapper')}>
                      <Image imageData={image} />
                    </div>
                  </div>
                </Link>
              )}
              {imageUrl && (
                <Link key={uniqueId()} href={`${imageUrl.url}`} passHref>
                  <div className={cx('link')}>
                    <div className={cx('image-wrapper')}>
                      <Image imageData={image} />
                    </div>
                  </div>
                </Link>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
      <button ref={nextRef} slot='container-end' type='button' className={cx('slider-btn', 'next')}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </button>
    </div>
  )
}

export default HomeSlider
