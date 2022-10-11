import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'
import SEO from '../SEO/seo'

config.autoAddCss = false

const Layout = ({ menus, seo, children, white = false }) => {
  const { headerMenu, footerMenu } = menus
  const router = useRouter()
  useEffect(() => {
    let origin = sessionStorage.getItem('__byråguidenOriginPage')

    if (!origin) {
      origin = `wp.xn--byrguiden-72a.no/${decodeURIComponent(router.asPath.split('?')[0].replace('/', ''))}`

      const isIndex = origin === ''
      sessionStorage.setItem('__byråguidenOriginPage', isIndex ? 'wp.xn--byrguiden-72a.no/' : origin)
    }
  }, [])
  return (
    <>
      <SEO seo={seo} />
      <Header headerMenu={headerMenu} />
      <Main white={white}>{children}</Main>
      <Footer footerMenu={footerMenu}  />
    </>
  )
}

export default Layout
