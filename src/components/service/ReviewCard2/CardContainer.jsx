import React from 'react'
import classNames from 'classnames/bind'
import styles from './ReviewCard2.module.css'
import { CardProvider } from './CardProvider'
import CardImage from './CardImage'
import CardSubTitle from './CardSubTitle'
import CardTitle from './CardTitle'
import ProviderProfileSection from './ProviderProfileSection'
import GoogleCardSection from './GoogleCardSection'
import ProviderReviewSection from './ProviderReviewSection'

const cx = classNames.bind(styles)

export default function CardContainer({ children, cardData }) {
  return (
    <CardProvider cardData={cardData}>
      <div className={cx('root')}>{children}</div>
    </CardProvider>
  )
}

CardContainer.CardImage = CardImage
CardContainer.CardSubTitle = CardSubTitle
CardContainer.CardTitle = CardTitle
CardContainer.ProviderProfileSection = ProviderProfileSection
CardContainer.GoogleCardSection = GoogleCardSection
CardContainer.ProviderReviewSection = ProviderReviewSection
