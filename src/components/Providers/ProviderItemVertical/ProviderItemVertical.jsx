import classNames from 'classnames/bind'
import styles from './ProviderItemVertical.module.css'
import GoogleRating from '../ProviderRating/GoogleRating'
import Button from '../../common/Button/Button'
import ProviderRating from '../ProviderRating/ProviderRating'
import Image from '../../common/Image/Image'

const cx = classNames.bind(styles)

export default function ProviderItemVertical({ showModal, provider }) {
  const {
    provider: {
      providersInfo: {
        name,
        logo,
        providerButton,
        contact,
        websiteLink,
        focusareas,
        establishedYear,
        employeeCount,
        description,
        city: { name: city },
        placeid //sende denne til providers.jsx
      }
    },
    rating,
    totalReviews,
    reviews,
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
                  height: 100
                }
              }}
            />
          )}
          <GoogleRating stars={rating} totalReviews={totalReviews} showModal={showModal} placeid={placeid} />
        </div>
        {isVisitButton && (
          <Button className={cx('btn')} size='large' link={websiteLink}>
            Besøk nettsted
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
            showModal={showModal}
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
