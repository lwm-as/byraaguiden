import Step from '@mui/material/Step'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import React from 'react'

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 13,
    left: 'calc(-50% + 12px)',
    right: 'calc(50% + 12px)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#2288ef'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#2288ef'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#2288ef',
    borderTopWidth: 2,
    borderRadius: 1
  }
}))

function StepperComponent({ step, steps }) {
  return (
    <div>
      <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
        {steps?.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default StepperComponent
