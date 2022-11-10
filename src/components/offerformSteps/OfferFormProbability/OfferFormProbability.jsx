import React, { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './OfferFormProbability.module.css'
import { Checkbox, FormControlLabel, FormGroup, Radio } from '@mui/material'
import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'
import { probabilityData } from '../stepsDataFunctions'
import { FormStepHeading } from '../FormStepHeading/FormStepHeading'

const cx = classNames.bind(styles)

const OfferFormProbability = ({ group, toggler, validate }) => {
  const data = probabilityData(group)
  const [error, setError] = useState(false)

  return (
    <OfferFormStep className={cx('root')} validate={validate} setError={setError}>
      <FormStepHeading text='Hvor sannsynlig er det at du vil ansette er byrå i nær fremtid?' />
      <div className={cx('checkboxes')}>
        {data.map(({ label, checked, name }) => {
          return (
            <div key={label} className={cx({ checked }, 'border')}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Radio
                      sx={{
                        '&.Mui-disabled': {
                          color: '#FF4A55'
                        }
                      }}
                      disabled={checked}
                      name={name}
                      checked={checked}
                      onChange={e => toggler(e)}
                    />
                  }
                  label={label}
                />
              </FormGroup>
            </div>
          )
        })}
      </div>
      {error && <p className={cx('error')}>Velg minst 1 alternativ</p>}
    </OfferFormStep>
  )
}

export default OfferFormProbability
