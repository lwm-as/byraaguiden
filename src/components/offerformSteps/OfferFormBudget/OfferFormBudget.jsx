import React, { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './OfferFormBudget.module.css'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'
import { budgetData } from '../stepsDataFunctions'
import { FormStepHeading } from '../FormStepHeading/FormStepHeading'

const cx = classNames.bind(styles)

const OfferFormBudget = ({ group, toggler, validate }) => {
  const data = budgetData(group)

  const [error, setError] = useState(false)

  return (
    <OfferFormStep className={cx('root')} validate={validate} setError={setError}>
      <FormStepHeading text='Omtrent hvor stort budsjett har du?' />
      <div className={cx('checkboxes')}>
        {data.map(({ label, checked, name }) => {
          return (
            <div key={label} className={cx({ checked }, 'border')}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
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

export default OfferFormBudget
