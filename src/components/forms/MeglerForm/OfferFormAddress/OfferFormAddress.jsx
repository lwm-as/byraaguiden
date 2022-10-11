import React from 'react'
import classNames from 'classnames/bind'
import OfferFormStep from '../../common/OfferFormStep/OfferFormStep'

import styles from './OfferFormAddress.module.css'
import OfferFormField from '../../common/OfferFormField/OfferFormField'

const cx = classNames.bind(styles)

// eslint-disable-next-line arrow-body-style
const OfferFormAddress = ({ validationSchema, columnSizes }) => {
  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>Informasjon om eiendommen</h1>
      <p>For at vi skal kunne finne riktig meglere for ditt behov trenger vi eiendommens adresse.</p>
      <OfferFormField
        columnSizes={columnSizes} // defines size of each column
        fields={['address', 'postal']}
        labels={['Din adresse', 'Ditt postnummer']}
      />
    </OfferFormStep>
  )
}

export default OfferFormAddress
