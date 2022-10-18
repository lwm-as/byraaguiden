import classNames from 'classnames/bind'
import styles from './ProviderItemVertical.module.css'
import GoogleRating from '../ProviderRating/GoogleRating'
import Button from '../../common/Button/Button'
import ProviderRating from '../ProviderRating/ProviderRating'
import Image from '../../common/Image/Image'

const cx = classNames.bind(styles)

export default function ProviderItemVertical({ provider }) {
  const {
    provider: {
      providersInfo: { name, logo, providerButton, contact, websiteLink, focusareas, description, placeid }
    },
    rating,
    totalReviews,
    popularity,
    agencyScore
  } = provider

  const isCtaButton = providerButton === 'cta'
  const isVisitButton = providerButton === 'visit'
  return (
    <div className={cx('root')}>
      <div className={cx('first-section')}>
        <span className={cx('name')}>{name}</span>
        <div className={cx('image-container')}>
          {logo.sourceUrl && (
            <Image
              imageData={{
                sourceUrl: logo.sourceUrl,
                mediaDetails: {
                  width: 100,
                  height: 80
                }
              }}
            />
          )}
          <GoogleRating stars={rating} totalReviews={totalReviews} placeid={placeid} />
        </div>
        {isVisitButton ? (
          <Button className={cx('btn')} size='large' link={websiteLink}>
            Besøk nettsted
          </Button>
        ) : (
          <Button disabled={true} size='large' className={cx('transparent')}>
            -
          </Button>
        )}
        {isCtaButton && (
          <Button className={cx('btn')} size='large' link={`/tilbud?name=${name}&contact=${contact}`}>
            Besøk nettsted
          </Button>
        )}
      </div>
      <div className={cx('middle-section')}>
        <p>{description}</p>
        <div className={cx('provider-rating')}>
          <ProviderRating
            rating={rating}
            totalReviews={totalReviews}
            popularity={popularity}
            agencyScore={agencyScore}
            placeid={placeid}
          />
        </div>
      </div>
      <div className={cx('last-section')}>
        <span>Fokus områder</span>
        <div className={cx('focus-container')}>
          {focusareas.map(focus => (
            <div className={cx('focus-box')} key={focus.name}>
              <span>{focus.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
