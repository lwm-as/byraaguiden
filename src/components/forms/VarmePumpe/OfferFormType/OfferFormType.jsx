import classNames from 'classnames'
import React from 'react'
import { OfferFormRadioField } from '../../common/OfferFormRadioField/OfferFormRadioField'
import OfferFormStep from '../../common/OfferFormStep/OfferFormStep'
import styles from './OfferFormType.module.css'

const cx = classNames.bind(styles)

function OfferFormType({ validationSchema }) {
  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>Hvilken type trenger du hjelp med?</h1>
      <p className={cx('subHeading')}>
        For at vi skal kunne gi deg best mulig tilbud trenger vi at du forteller oss hvilken type varmepumpe du ønsker å
        få hjelp med.
      </p>
      <OfferFormRadioField
        passNameToProvider='type'
        ids={['type-1', 'type-2', 'type-3', 'type-4', 'type-5']}
        fieldsValues={[
          'Luft til luft',
          'Luft til vann (vannbåren varme)',
          'Væske til vann (jord-,berg-, sjøvarme)',
          'Avtrekksvarmepumpe',
          'Usikker, ønsker mer informasjon'
        ]}
        topLabel='Hvilken type varmepumpe ønsker du?'
      />
    </OfferFormStep>
  )
}

export default OfferFormType
