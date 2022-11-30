import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ProviderItem.module.css'
import classNames from 'classnames/bind'
import Button from '../../common/Button/Button'
import ProviderRating from '../ProviderRating/ProviderRating'
import GoogleRating from '../ProviderRating/GoogleRating'
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import Image from '../../common/Image/Image'
import React, { useState } from 'react'
import { useToggler } from '../../../hooks/useToggler'
import Expand from 'react-expand-animated'
import { useStateValue } from '../../../context/StateValueProvider'
import useWindowSize from '../../../utils/windowSize'

const cx = classNames.bind(styles)

const ProviderItem = ({ idx, id, customReviewModal, provider }) => {
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
    popularity,
    agencyScore
  } = provider

  const { width } = useWindowSize()
  const isMobile = width <= 1000

  const isCtaButton = providerButton === 'cta'
  const isVisitButton = providerButton === 'visit'

  const [{ checkedItems }, dispatch] = useStateValue()

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
    return openIndexes.includes(index) ? 'chevron-up' : 'chevron-down'
  }

  return (
    <>
      <div className={cx('root')}>
        <div className={cx('legg-til')}>
          <div className={cx('company-name')}>
            <h4 className={cx('name')}>{name}</h4>
          </div>
          {/* <div className={cx('check-box')}>
            <FormGroup>
              <FormControlLabel
                sx={{
                  '&.MuiFormControlLabel-root': {
                    paddingRight: '0px',
                    marginRight: '0px'
                  }
                }}
                control={
                  <Checkbox
                    sx={{
                      transform: isMobile && 'scale(1.3)',
                      position: 'relative',
                      padding: isMobile ? '0px' : '8px',
                      color: '#002E47',
                      '&.Mui-checked': {
                        color: '#FF4A55'
                      }
                    }}
                    checked={checkedItems?.includes(id)}
                    onChange={() =>
                      dispatch({
                        type: 'TOGGLE_CHECKED',
                        id,
                        item: provider
                      })
                    }
                  />
                }
                label={!isMobile && labelStyles}
              />
            </FormGroup>
          </div> */}
        </div>
        <div className={cx('grid')}>
          <div className={cx('company-info')}>
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
              )}
              <GoogleRating
                noPaddingTop
                customReviewModal={customReviewModal}
                stars={rating}
                totalReviews={totalReviews}
                placeid={placeid}
              />
            </div>
            <div className={cx('cta-button-container')}>
              {isVisitButton && (
                <Button className={cx('btn')} rel='nofollow' size='medium' link={websiteLink}>
                  Besøk nettsted
                </Button>
              )}
              {isCtaButton && (
                <Button
                  className={cx('btn')}
                  rel='nofollow'
                  size='medium'
                  link={`/tilbud?name=${name}&contact=${contact}`}
                >
                  Besøk nettsted
                </Button>
              )}
            </div>
          </div>
          <div className={cx('right')}>
            <div className={cx('right-inner')}>
              <ProviderRating
                className={cx('provider-rating-grid')}
                rating={rating}
                totalReviews={totalReviews}
                popularity={popularity}
                agencyScore={agencyScore}
                placeid={placeid}
              />
            </div>
            <div className={cx('focus-container')}>
              <hr className={cx('divider')} />
              <div>
                <span className={cx('fokus-labelStyles')}>Fokusområder</span>
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
        <Expand open={openIndexes.includes(openDropDown)} duration={300}>
          <div className={cx('footer-desc')}>
            <div>
              <p className={cx('description')}>{description}</p>
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
        </Expand>
      </div>
    </>
  )
}

export default ProviderItem
