import classNames from 'classnames/bind'
import styles from '../LanguagePreview/ServicePreview.module.css'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Button from '../common/Button/Button'
import Link from 'next/link'

const cx = classNames.bind(styles)

export default function ServicePreviewArticle({ services }) {
  const router = useRouter()

  const [service, setService] = useState({})

  // handling of showing correct sercvice preview based on url
  let articleServicePath = router.asPath.split('#')[1]

  useEffect(() => {
    let { name, slug, servicePreviewDescription } =
      services?.nodes.find(
        service =>
          decodeURIComponent(service?.name.toLowerCase().replace(/\s/g, '')) ===
          (router.asPath === '/artikler' ? 'apputvikling' : decodeURIComponent(articleServicePath).replace(/\s/g, ''))
      ) || ''

    setService(prevState => ({
      ...prevState,
      name,
      slug,
      servicePreviewDescription
    }))
  }, [articleServicePath])

  const isTelemarketing = service?.name?.toLowerCase() === 'telemarketing'
  const telemarketingText = isTelemarketing && 'telemarketing-'

  const isRegnskap = service?.name?.toLowerCase() === 'regnskapsfører'
  const regnskapsText = isRegnskap && 'regnskaps'

  const isSEO = service?.name?.toLowerCase() === 'seo'
  const seoText = isSEO && 'SEO-'

  const isDigitalMarketing = decodeURIComponent(service?.name?.toLowerCase()) === 'digital markedsføring'
  const digitalMarketingText = isDigitalMarketing && 'digital markedsførings'

  const isApp = service?.name?.toLowerCase() === 'apputvikling'

  const handleReadArticles = () => {
    if (!isTelemarketing && !isApp)
      return (
        <Button className={cx('white-bg')} link={`/artikler/${service?.slug}`}>
          Les artikler
        </Button>
      )
  }

  return (
    <div className={cx('root')}>
      <div className={cx('inner-root')}>
        <div className={cx('header')}>
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
                : service?.name?.toLowerCase()
            }byråene i Norge`}
          </h3>

          <p>{service?.servicePreviewDescription?.serviceDescription}</p>
        </div>
        <div className={cx('btn-container')}>
          <Button link={`/${service?.slug}`}>Sammenlign byråer</Button>
          {handleReadArticles()}
        </div>
      </div>
    </div>
  )
}
