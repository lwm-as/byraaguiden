import React, { useState } from 'react'

import GoogleReview from '../GoogleReview/GoogleReview'
import BarIndicator from '../../common/BarIndicator/BarIndicator'
import Modal from '../../common/Modal/Modal'
import CardContainer from './CardContainer'

function ReviewCard2({ cardData, isSpecialUri, loading }) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { providerGoogleReviews } = cardData

  if (isOpenModal) {
    return <Modal totalReviews={providerGoogleReviews} open={isOpenModal} onClose={() => setIsOpenModal(false)} />
  }

  // Using dot notation to better communicate that CardImage..etc is a property of CardContainer

  return (
    <CardContainer cardData={cardData}>
      {/* left-section */}
      <CardContainer.ProviderProfileSection>
        <CardContainer.CardImage />
        <CardContainer.CardTitle />
        <CardContainer.CardSubTitle />
      </CardContainer.ProviderProfileSection>

      {/* middle-section */}
      <CardContainer.ProviderReviewSection>
        <BarIndicator />
      </CardContainer.ProviderReviewSection>

      {/* right-section */}
      <CardContainer.GoogleCardSection isSpecialUri={isSpecialUri}>
        <GoogleReview setIsOpen={setIsOpenModal} loading={loading} />
      </CardContainer.GoogleCardSection>
    </CardContainer>
  )
}

export default ReviewCard2
