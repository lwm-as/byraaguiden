import classNames from 'classnames/bind'
import styles from './ServiceSection.module.css'
import Container from '../../layout/Container/Container'
import Button from '../../common/Button/Button'
import React from 'react'

const cx = classNames.bind(styles)

export default function ServiceSection({ category, slug }) {
  const isTelemarketing = category?.name?.toLowerCase() === 'telemarketing'
  const telemarketingText = isTelemarketing && 'telemarketing-'

  const isRegnskap = category?.name?.toLowerCase() === 'regnskapsfører'
  const regnskapsText = isRegnskap && 'regnskaps'

  const isSEO = category?.name?.toLowerCase() === 'seo'
  const seoText = isSEO && 'SEO-'

  const isDigitalMarketing = decodeURIComponent(category?.name?.toLowerCase()) === 'digital markedsføring'
  const digitalMarketingText = isDigitalMarketing && 'digital markedsførings'

  return (
    <div className={cx('root')}>
      <Container size='medium'>
        <div className={cx('box')}>
          <div>
            <h3 className={cx('title')}>
              De beste{' '}
              {`${
                isDigitalMarketing
                  ? digitalMarketingText
                  : isTelemarketing
                  ? telemarketingText
                  : isRegnskap
                  ? regnskapsText
                  : isSEO
                  ? seoText
                  : category?.name?.toLowerCase()
              }byråene i Norge`}
            </h3>{' '}
          </div>
          <div>
            <p>
              Trenger du hjelp med {category.name.toLowerCase()}? Hos oss kan du sammenligne en rekke byråer for å finne
              det byrået som passer dine behov. Få tilbud fra flere byråer og la dem konkurrere om deg.
            </p>
          </div>
          <div>
            <Button className={cx('btn')} link={`/${decodeURIComponent(slug)}`}>
              Sammenlign byråer
            </Button>
          </div>
        </div>
      </Container>
      <div className={cx('red-square')} />
    </div>
  )
}
