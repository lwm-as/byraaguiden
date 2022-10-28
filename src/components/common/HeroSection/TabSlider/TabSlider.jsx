import classNames from 'classnames/bind'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Link from 'next/link'
import styles from './TabSlider.module.css'

const cx = classNames.bind(styles)

export default function TabSlider({ data, setActiveClass = () => {}, setActiveClassText }) {
  return (
    <div className={cx('root')}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={100}
        slidesPerView={2.5}
        navigation
        watchSlidesProgress={true}
        breakpoints={{
          320: {
            slidesPerView: 2.45,
            spaceBetween: 5
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1020: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
      >
        {data.map(({ service, logo }, idx) => {
          return (
            <SwiperSlide className={cx('slider-wrapper')}>
              <Link href={`#${service.toLowerCase()}`}>
                <div className={cx('list-item', setActiveClass({ idx, service }))}>
                  <div className={cx('logo-container')}>
                    <img src={logo} alt='Service' />
                  </div>
                  <a className={cx('item', setActiveClassText({ idx, service }))}>
                    {service.charAt(0).toUpperCase() + service.slice(1).toUpperCase()}
                  </a>
                </div>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
