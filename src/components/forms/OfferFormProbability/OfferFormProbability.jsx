import React from 'react'
import classNames from 'classnames/bind'

import styles from './OfferFormProbability.module.css'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useSelector } from '../../../hooks/tilbud/useSelector'
import OfferFormStep from '../common/OfferFormStep/OfferFormStep'

const cx = classNames.bind(styles)

const probabilityData = probabilityGroup => {
  return [
    {
      name: 'veldigSannsynlig',
      label: 'Veldig sannsynlig',
      checked: probabilityGroup.veldigSannsynlig
    },
    {
      name: 'ganskeSannsynlig',
      label: 'Ganske sannsynlig',
      checked: probabilityGroup.ganskeSannsynlig
    },
    {
      name: 'liteSannsynlig',
      label: 'Lite sannsynlig',
      checked: probabilityGroup.liteSannsynlig
    },
    {
      name: 'usikker',
      label: 'Usikker',
      checked: probabilityGroup.usikker
    }
  ]
}

const OfferFormProbability = ({ validationSchema }) => {
  const { probabilityGroup, toggleProbability } = useSelector()

  const data = probabilityData(probabilityGroup)

  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>Hvor sannsynlig er det at du vil ansette er byrå i nær fremtid?</h1>
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
                      onChange={e => toggleProbability(e)}
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

export default OfferFormProbability
