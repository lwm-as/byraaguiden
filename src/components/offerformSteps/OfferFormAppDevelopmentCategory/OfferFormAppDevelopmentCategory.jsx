import classNames from 'classnames/bind'
import styles from './OfferFormAppDevelopmentCategory.module.css'
import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'
import { FormStepHeading } from '../FormStepHeading/FormStepHeading'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { appDevelopmentCategoryData } from '../stepsDataFunctions'
import React, { useState } from 'react'

const cx = classNames.bind(styles)

export function OfferFormAppDevelopmentCategory({ group, toggler, validate }) {
  const data = appDevelopmentCategoryData(group)
  const [error, setError] = useState(false)

  return (
    <OfferFormStep className={cx('root')} validate={validate} setError={setError}>
      <FormStepHeading text='Hva trenger du hjelp med?' />
      <div className={cx('checkboxes')}>
        {data.map(({ label, checked, name }) => {
          return (
            <div key={label} className={cx({ checked }, 'border')}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Radio
                      value={label}
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
