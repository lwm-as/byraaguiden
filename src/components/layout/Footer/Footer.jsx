import React from 'react'
import classNames from 'classnames/bind'

import Container from '../Container/Container'
import DomainLogo from '../menus/DomainLogo/DomainLogo'
import FooterSection from '../menus/FooterSection/FooterSection'
import FooterBottom from '../menus/FooterBottom/FooterBottom'

import styles from './Footer.module.css'

const cx = classNames.bind(styles)

function CopyrightContent() {
  return (
    <div>
      <span>Copyright © 2022 byråguiden</span>
    </div>
  )
}

const Footer = ({ footerMenu, isHome }) => {
  const menuItems = footerMenu.menuItems.nodes

  const subItemsMenu = menuItems.filter(item => item.parentId === 'cG9zdDoxMzk=')
  const subItemsServices = menuItems.filter(item => item.parentId === 'cG9zdDoxMzg=')
  const subItemsBottom = menuItems.filter(item => item.parentId === 'cG9zdDoxNTU=')

  return (
    <>
      <Container size='full' className={cx('footer')}>
        <Container size='large' className={cx('footer-container')}>
          <div className={cx('footer-logo')}>
            <DomainLogo isHome={isHome} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus doloremque maiores nobis
              optio ratione sapiente. Accusantium, aliquid beatae distinctio doloribus error hic inventore, maxime
              nesciunt nostrum optio quasi sint!
            </p>
          </div>
          <FooterSection title='Meny' items={subItemsMenu} />
          <FooterSection title='Bransjer' items={subItemsServices} />
          {/*<FooterSection*/}
          {/*  title={menuLabels[2].label}*/}
          {/*  items={subItemsContact}*/}
          {/*  secondTitle={menuLabels[3].label}*/}
          {/*  secondItems={subItemsVisit}*/}
          {/*/>*/}
        </Container>
        <Container size='large' className={cx('bottom-container')}>
          {/*<FooterBottom privacyItems={subItemsPrivacy} socialItems={subItemsSocial} />*/}
          <div className={cx('copyright-container')}>
            <CopyrightContent />
          </div>
        </Container>
      </Container>
    </>
  )
}

export default Footer
