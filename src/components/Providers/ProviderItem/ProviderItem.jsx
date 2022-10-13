import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CtaButton from '../../../components/CtaButton/CtaButton'
import useWindowSize from '../../../utils/windowSize'
import ProviderRating from '../ProviderRating/ProviderRating'
import styles from '../Providers.module.css'

const ProviderItem = ({ provider, loading, setCurrent, maxReviews, minReviews, showModal }) => {
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

  const size = useWindowSize()

  const isMobile = size.width < 768

  const isCtaButton = providerButton === 'cta'
  const isVisitButton = providerButton === 'visit'

  return (
    <div className={styles.providerItem}>
      <div className={styles.upperColumn}>
        <div className={styles.firstUpperColumn}>
          <div className={styles.logoNameContainer}>
            {logo?.sourceUrl && <img src={logo?.sourceUrl} alt='Logo' />}
            <h4>{name}</h4>
          </div>
          <div className={styles.line}></div>
          <div className={styles.metaInfoColumn}>
            <div>
              <div className={styles.metaInfoContentMob}>
                <FontAwesomeIcon icon={['fal', 'map-marker']} />
              </div>
              <p>{city}</p>
            </div>
            <div>
              <div className={styles.metaInfoContentMob}>
                <FontAwesomeIcon icon={['fal', 'user-friends']} />
              </div>
              <p>Ansatte: {employeeCount}</p>
            </div>
            <div>
              <div className={styles.metaInfoContentMob}>
                <FontAwesomeIcon icon={['fal', 'flag']} />
              </div>

              <p>Etablert: {establishedYear}</p>
            </div>
          </div>
          {!isMobile && <p>{description}</p>}
        </div>
        <div className={styles.secondUpperColumn}>
          <ProviderRating
            rating={rating}
            totalReviews={totalReviews}
            popularity={popularity}
            agencyScore={agencyScore}
            maxReviews={maxReviews}
            minReviews={minReviews}
            showModal={showModal}
            placeid={placeid}
          />
        </div>
        <div className={styles.thirdUpperColumn}>
          <h5>Fokusområder</h5>
          <div className={styles.serviceContainer}>
            {focusareas.map(focus => (
              <div key={focus.name}>
                <span>{focus.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.lowerColumn}>
        <div className={styles.metaInfoColumn}>
          <div>
            <div className={styles.metaInfoContentDesktop}>
              <FontAwesomeIcon icon={['fal', 'map-marker']} />
            </div>
            <p>{city}</p>
          </div>
          <div>
            <div className={styles.metaInfoContentDesktop}>
              <FontAwesomeIcon icon={['fal', 'user-friends']} />
            </div>

            <p>Ansatte: {employeeCount}</p>
          </div>
          <div>
            <div className={styles.metaInfoContentDesktop}>
              <FontAwesomeIcon icon={['fal', 'flag']} />
            </div>
            <p>Etablert: {establishedYear}</p>
          </div>
        </div>
        {isCtaButton && (
          <div className={styles.buttonColumn}>
            <CtaButton href={`/tilbud?name=${name}&contact=${contact}`}>Få tilbud fra {name}</CtaButton>
          </div>
        )}
        {isVisitButton && (
          <div className={styles.buttonColumn}>
            <CtaButton href={`${websiteLink}`} target='_blank'>
              Besøk nettsted
            </CtaButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProviderItem
