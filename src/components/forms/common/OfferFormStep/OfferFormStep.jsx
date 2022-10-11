import React, { useEffect } from 'react'

const OfferFormStep = ({ validationSchema, children, ...props }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <div {...props}>{children}</div>
}

export default OfferFormStep
