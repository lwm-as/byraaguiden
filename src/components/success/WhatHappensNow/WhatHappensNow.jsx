import classNames from 'classnames/bind'

import styles from './WhatHappensNow.module.css'
import Image from '../../common/Image/Image'

const cx = classNames.bind(styles)

const data = [
  {
    id: 0,
    title: 'Vi tar kontakt med dere',
    subTitle: 'Nå som du har meldt interesse vil vi komme tilbake til deg for å få all nødvendig informasjon.',
    img: '/media/icons/application.svg'
  },
  {
    id: 1,
    title: 'Vi publiserer ditt byrå',
    subTitle: 'Hvis ditt byrå oppfyller kravene for å ligge på våre lister, vil vi publisere byrået ditt.',
    img: '/media/icons/publish-firm.svg'
  }
]

export default function WhatHappensNow() {
  return (
    <>
      <div className={cx('root')}>
        {data.map(({ id, title, subTitle, img }, idx) => {
          return (
            <div className={cx('item-root')} key={id}>
              <div>
                <Image
                  imageData={{
                    sourceUrl: img,
                    mediaDetails: {
                      width: 79,
                      height: 80
                    }
                  }}
                />
              </div>
              <div>
                <span className={cx('item-title')}>
                  {idx + 1}. {title}
                </span>
              </div>
              <div className={cx('bottom-txt')}>
                <span> {subTitle}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
