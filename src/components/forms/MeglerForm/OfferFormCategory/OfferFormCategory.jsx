import React from 'react'
import classNames from 'classnames/bind'
import OfferFormStep from '../../common/OfferFormStep/OfferFormStep'

import { OfferFormRadioField } from '../../common/OfferFormRadioField/OfferFormRadioField'
import styles from './OfferFormCategory.module.css'

export const cx = classNames.bind(styles)

const OfferFormCategory = ({ validationSchema }) => (
  <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
    <h1>Hva trenger du hjelp med?</h1>
    <p>
      For at vi skal kunne gi deg beste mulig tilbud trenger vi at du forteller oss hvilken meglertjeneste du ønsker å
      få hjelp med.
    </p>
    <OfferFormRadioField
      passNameToProvider='category'
      ids={['type-1', 'type-2']}
      fieldsValues={['Jeg vurderer/skal selge bolig', 'Jeg ønsker kun verdivurdering']}
      // pass in uniqueValue prop if label and value is different
      uniqueValues={['Selge bolig', 'Ønsker verdivurdering']}
      topLabel='Velg megler tjeneste'
    />
  </OfferFormStep>
)

export default OfferFormCategory
