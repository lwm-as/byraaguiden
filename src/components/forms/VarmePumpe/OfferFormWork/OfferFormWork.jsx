import classNames from 'classnames'
import React from 'react'
import { OfferFormRadioField } from '../../common/OfferFormRadioField/OfferFormRadioField'
import OfferFormStep from '../../common/OfferFormStep/OfferFormStep'
import styles from './OfferFormWork.module.css'

const cx = classNames.bind(styles)

export default function OfferFormWork({ validationSchema }) {
  return (
    <div>
      <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
        <h1>Hva trenger du hjelp med?</h1>
        <p>
          For å gi deg et mest mulig presist tilbud, trenger vi at du forteller oss hvilken type arbeid du ønsker å få
          utført.
        </p>
        <OfferFormRadioField
          passNameToProvider='typeOfWork'
          ids={['type-1', 'type-2', 'type-3']}
          fieldsValues={['Ny varmepumpe (mest vanlig)', 'Trenger kun montering', 'Service']}
          topLabel='Hva slags arbeid skal utføres?'
        />
      </OfferFormStep>
    </div>
  )
}
