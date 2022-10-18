import React from 'react'
import classNames from 'classnames/bind'

import styles from './OfferFormTime.module.css'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useSelector } from '../../../hooks/tilbud/useSelector'
import OfferFormStep from '../common/OfferFormStep/OfferFormStep'

const cx = classNames.bind(styles)

const timeData = timeGroup => {
  return [
    {
      name: 'asap',
      label: 'Så fort som mulig',
      checked: timeGroup.asap
    },
    {
      name: 'oneWeek',
      label: 'Innen 1 uke',
      checked: timeGroup.oneWeek
    },
    {
      name: 'twoWeeks',
      label: 'Innen 2 uker',
      checked: timeGroup.twoWeeks
    },
    {
      name: 'oneMonth',
      label: 'Innen 1 måned',
      checked: timeGroup.oneMonth
    },
    {
      name: 'twoOrThreeMonths',
      label: 'Ínnen de neste 2-3 månedene',
      checked: timeGroup.twoOrThreeMonths
    },
    {
      name: 'other',
      label: 'Annet / ønsker å diskutere dette',
      checked: timeGroup.other
    }
  ]
}

const OfferFormTime = ({ validationSchema }) => {
  const { timeGroup, toggleTime } = useSelector()

  const data = timeData(timeGroup)

  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>Når ønsker du å starte prosjektet?</h1>
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
                      onChange={e => toggleTime(e)}
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

export default OfferFormTime
