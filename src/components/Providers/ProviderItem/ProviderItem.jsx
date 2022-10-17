import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CtaButton from '../../../components/CtaButton/CtaButton'
import useWindowSize from '../../../utils/windowSize'
import styles from './ProviderItem.module.css'
import classNames from 'classnames/bind'
import Button from '../../common/Button/Button'
import ProviderRating from '../ProviderRating/ProviderRating'
import GoogleRating from '../ProviderRating/GoogleRating'
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import Image from '../../common/Image/Image'
import React, { useState } from 'react'
import { useToggler } from '../../../hooks/useToggler'
const cx = classNames.bind(styles)

const ProviderItem = ({
  toggleChecked,
  checked,
  idx,
  provider,
  loading,
  setCurrent,
  maxReviews,
  minReviews,
  showModal
}) => {
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

  const { openIndexes, toggleIndex } = useToggler()
  const [openDropDown, setOpenDropDown] = useState()

  function handleDropDownClick(index) {
    setOpenDropDown(index)
    toggleIndex(index)
  }

  const labelStyles = (
    <Typography
      sx={{
        '&.MuiTypography-root': {
          fontSize: '14px !important',
          color: '#212121 !important'
        }
      }}
    >
      Legg til for å sammenligne
    </Typography>
  )

  function handleIcon(index) {
    return openIndexes.includes(index) ? 'chevron-down' : 'chevron-up'
  }

  let expand = openIndexes.includes(openDropDown)

  return (
    <>
      <div className={cx('root')}>
        <div className={cx('legg-til')}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    '&.MuiSvgIcon-root': {
                      borderRadius: '20px'
                    }
                  }}
                  checked={checked?.includes(idx)}
                  onChange={() => toggleChecked(idx)}
                />
              }
              label={labelStyles}
            />
          </FormGroup>
        </div>
        <div className={cx('grid')}>
          <div className={cx('company-info')}>
            <h4 className={cx('name')}>{name}</h4>
            <div className={cx('image-container')}>
              {logo?.sourceUrl && (
                <Image
                  className={cx('img')}
                  imageData={{
                    sourceUrl: logo.sourceUrl,
                    mediaDetails: {
                      width: 100,
                      height: 100
                    }
                  }}
                />
              )}{' '}
              <GoogleRating stars={rating} totalReviews={totalReviews} showModal={showModal} placeid={placeid} />
            </div>
            {isVisitButton && (
              <Button className={cx('btn')} size='medium' link={websiteLink}>
                Besøk nettsted
              </Button>
            )}
            {isCtaButton && (
              <Button className={cx('btn')} size='medium' link={`/tilbud?name=${name}&contact=${contact}`}>
                Besøk nettsted
              </Button>
            )}
          </div>
          <div className={cx('right')}>
            <div className={cx('right-inner')}>
              <ProviderRating
                className={cx('provider-rating-grid')}
                rating={rating}
                totalReviews={totalReviews}
                popularity={popularity}
                agencyScore={agencyScore}
                showModal={showModal}
                placeid={placeid}
              />
            </div>
            <div className={cx('focus-container')}>
              <hr className={cx('divider')} />

              <div>
                <span className={cx('fokus-labelStyles')}>Fokus områder</span>
                <div className={cx('focus-inner')}>
                  {focusareas.map(focus => (
                    <div className={cx('focus-box')} key={focus.name}>
                      <span className={cx('focus-name')}>{focus.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => handleDropDownClick(idx)} className={cx('expandable-div')}>
        <div className={cx('footer-heading')}>
          <span>Les mer om {name}</span>
          <FontAwesomeIcon icon={['fas', handleIcon(idx)]} color='#002E47' size='sm' />
        </div>
        {expand && (
          <div className={cx('footer-desc', { expand })}>
            <div>
              <p>{description}</p>
            </div>
            <div className={cx('icon-outer')}>
              <div className={cx('icon-container')}>
                <FontAwesomeIcon icon={['fas', 'map-marker-alt']} color='#7E7E7E' />
                <p>{city}</p>
              </div>
              <div className={cx('icon-container')}>
                <FontAwesomeIcon icon={['fas', 'user-friends']} color='#7E7E7E' />
                <p>Ansatte: {employeeCount}</p>
              </div>{' '}
              <div className={cx('icon-container')}>
                <FontAwesomeIcon icon={['fas', 'flag']} color='#7E7E7E' />
                <p>Etablert: {establishedYear}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
    // <div className={styles.providerItem}>
    //   <div className={styles.upperColumn}>
    //     <div className={styles.firstUpperColumn}>
    //       <div className={styles.logoNameContainer}>
    //         {logo?.sourceUrl && <img src={logo?.sourceUrl} alt='Logo' />}
    //         <h4>{name}</h4>
    //       </div>
    //       <div className={styles.line}></div>
    //       <div className={styles.metaInfoColumn}>
    //         <div>
    //           <div className={styles.metaInfoContentMob}>
    //             <FontAwesomeIcon icon={['fal', 'map-marker']} />
    //           </div>
    //           <p>{city}</p>
    //         </div>
    //         <div>
    //           <div className={styles.metaInfoContentMob}>
    //             <FontAwesomeIcon icon={['fal', 'user-friends']} />
    //           </div>
    //           <p>Ansatte: {employeeCount}</p>
    //         </div>
    //         <div>
    //           <div className={styles.metaInfoContentMob}>
    //             <FontAwesomeIcon icon={['fal', 'flag']} />
    //           </div>
    //
    //           <p>Etablert: {establishedYear}</p>
    //         </div>
    //       </div>
    //       {!isMobile && <p>{description}</p>}
    //     </div>
    //     <div className={styles.secondUpperColumn}>
    //       <ProviderRating
    //         rating={rating}
    //         totalReviews={totalReviews}
    //         popularity={popularity}
    //         agencyScore={agencyScore}
    //         maxReviews={maxReviews}
    //         minReviews={minReviews}
    //         showModal={showModal}
    //         placeid={placeid}
    //       />
    //     </div>
    //     <div className={styles.thirdUpperColumn}>
    //       <h5>Fokusområder</h5>
    //       <div className={styles.serviceContainer}>
    //         {focusareas.map(focus => (
    //           <div key={focus.name}>
    //             <span>{focus.name}</span>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.lowerColumn}>
    //     <div className={styles.metaInfoColumn}>
    //       <div>
    //         <div className={styles.metaInfoContentDesktop}>
    //           <FontAwesomeIcon icon={['fal', 'map-marker']} />
    //         </div>
    //         <p>{city}</p>
    //       </div>
    //       <div>
    //         <div className={styles.metaInfoContentDesktop}>
    //           <FontAwesomeIcon icon={['fal', 'user-friends']} />
    //         </div>
    //
    //         <p>Ansatte: {employeeCount}</p>
    //       </div>
    //       <div>
    //         <div className={styles.metaInfoContentDesktop}>
    //           <FontAwesomeIcon icon={['fal', 'flag']} />
    //         </div>
    //         <p>Etablert: {establishedYear}</p>
    //       </div>
    //     </div>
    //     {isCtaButton && (
    //       <div className={styles.buttonColumn}>
    //         <CtaButton href={`/tilbud?name=${name}&contact=${contact}`}>Få tilbud fra {name}</CtaButton>
    //       </div>
    //     )}
    //     {isVisitButton && (
    //       <div className={styles.buttonColumn}>
    //         <CtaButton href={`${websiteLink}`} target='_blank'>
    //           Besøk nettsted
    //         </CtaButton>
    //       </div>
    //     )}
    //   </div>
    // </div>
  )
}

export default ProviderItem
