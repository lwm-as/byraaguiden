import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'
import { FormStepHeading } from '../FormStepHeading/FormStepHeading'
import classNames from 'classnames/bind'
import styles from './OfferFormDigitalMarketingCategory.module.css'
import { digitalMarketingCategoryData } from '../stepsDataFunctions'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
const cx = classNames.bind(styles)

export function OfferFormDigitalMarketingCategory({ toggler, validate, group }) {
  const data = digitalMarketingCategoryData(group)

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
                    <Checkbox
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
