import classNames from 'classnames/bind'
import styles from './ThisIsHowItWorks.module.css'
import Image from '../../common/Image/Image'
import Button from '../../common/Button/Button'

const cx = classNames.bind(styles)

const data = [
  {
    id: 0,
    title: 'Velg bransje',
    subTitle:
      'Se vår oversikt over bransjer og velg den bransjen der din bedrift har behov for å finne nye gode leverandører.',
    img: '/media/icons/choose-service.svg'
  },
  {
    id: 1,
    title: 'Sammenlign byråer',
    subTitle:
      'I vår oversikt kan du enkelt sammenligne kundeomtaler, størrelse, beliggenhet, fokusområder og flere nyttige datapunkter.',
    img: '/media/icons/compare-offers.svg'
  },
  {
    id: 3,
    title: 'Velg riktig byrå',
    subTitle: 'Gjennom vårt system kan du enkelt ta kontakt med byråene som passer best med din bedrift.',
    img: '/media/icons/choose-firm.svg'
  }
]

export function ThisIsHowItWorks() {
  return (
    <>
      <h2 className={cx('title')}>Slik fungerer det</h2>
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
      <div className={cx('btn-container')}>
        <div>
          <Button link='/'>Kom i gang</Button>
        </div>
      </div>
    </>
  )
}
