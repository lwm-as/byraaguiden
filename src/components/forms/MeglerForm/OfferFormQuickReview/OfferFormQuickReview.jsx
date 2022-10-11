import React from 'react'
import classNames from 'classnames/bind'
import OfferFormStep from '../../common/OfferFormStep/OfferFormStep'

import styles from './OfferFormQuickReview.module.css'
import OfferFormField from '../../common/OfferFormField/OfferFormField'

const cx = classNames.bind(styles)

// eslint-disable-next-line arrow-body-style
const OfferFormQuickReview = ({ validationSchema, heading, headingDescription }) => {
  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>{heading}</h1>
      <p>{headingDescription}</p>
      <OfferFormField
        validationSchema={validationSchema}
        fields={['description']}
        labels={['Utfyllende informasjon']}
        textarea
      />
    </OfferFormStep>
  )
}

export default OfferFormQuickReview
