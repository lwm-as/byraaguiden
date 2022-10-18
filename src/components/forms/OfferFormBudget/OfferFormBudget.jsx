import React from 'react'
import classNames from 'classnames/bind'

import styles from './OfferFormBudget.module.css'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useSelector } from '../../../hooks/tilbud/useSelector'
import OfferFormStep from '../common/OfferFormStep/OfferFormStep'

const cx = classNames.bind(styles)

const budgetData = budgetGroup => {
  return [
    {
      name: 'tenThousand',
      label: 'Mindre enn 10 000kr',
      checked: budgetGroup.tenThousand
    },
    {
      name: 'between10And20',
      label: '10 000kr - 20 000kr',
      checked: budgetGroup.between10And20
    },
    {
      name: 'between20And50',
      label: '20 000kr - 50 0000',
      checked: budgetGroup.between20And50
    },
    {
      name: 'between50And100000',
      label: '50 000kr - 100 000kr',
      checked: budgetGroup.between50And100000
    },
    {
      name: 'moreThan100000',
      label: '100 000kr eller mer',
      checked: budgetGroup.moreThan100000
    },
    {
      name: 'other',
      label: 'Usikker',
      checked: budgetGroup.other
    }
  ]
}

const OfferFormBudget = ({ validationSchema }) => {
  const { budgetGroup, toggleBudget } = useSelector()

  const data = budgetData(budgetGroup)

  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>Omtrent hvor stort budsjett har du?</h1>
      <p>
        {/*For at vi skal kunne gi deg beste mulig tilbud trenger vi at du forteller oss hvilken meglertjeneste du ønsker å*/}
        {/*få hjelp med.*/}
      </p>

      <div className={cx('checkboxes')}>
        {data.map(({ label, checked, name }) => {
          return (
            <div className={cx('border')}>
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
                      onChange={e => toggleBudget(e)}
                    />
                  }
                  label={label}
                />
              </FormGroup>
            </div>
          )
        })}
      </div>
    </OfferFormStep>
  )
}

export default OfferFormBudget
