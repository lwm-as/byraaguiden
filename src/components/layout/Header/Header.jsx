import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import classNames from 'classnames/bind'

import '../../../utils/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from '../../../utils/windowSize'
import disableScroll from '../../../utils/disableScroll'

import Container from '../Container/Container'
import DomainLogo from '../menus/DomainLogo/DomainLogo'
import BurgerMenu from '../menus/BurgerMenu/BurgerMenu'
// import MenuItem from '../menus/MenuItem/MenuItem'

import useOutsideDetecter from '../../../utils/hooks/useOutsideDetecter'

import styles from './Header.module.css'
import SubMenu from './SubMenu/SubMenu'
import { useToggler } from '../../../hooks/useToggler'
import useOutsideDetector from '../../../utils/hooks/useOutsideDetecter'

const cx = classNames.bind(styles)

function DesktopLeftHeader({ handleIconBackgroundColor, parentItems, handleDropDownClick, handleIcon, handleFlag }) {
  return (
    <div className={cx('dropdown-container')}>
      {parentItems
        .filter(({ label }) => label === 'Tjenester' || label === 'Artikler')
        .map(({ label, path }, index) => {
          return (
            <div onClick={() => handleDropDownClick(index)} className={cx('dropdown-menu-container')}>
              <div className={cx('icon-container', handleIconBackgroundColor(index))}>
                <FontAwesomeIcon icon={['fas', handleIcon(index)]} color='white' size='xs' />
              </div>
              <div className={cx('dropdown-menu')}>
                <span className={cx('menu-item', 'no-margin')}>{label}</span>
                <span className={cx('menu-item', 'under-text', 'no-margin', 'button-under-text')}>Utforsk</span>
              </div>
            </div>
          )
        })}
      <div className={cx('menu-container')}>
        {parentItems
          .filter(({ label }) => label !== 'Tjenester' && label !== 'Artikler' && label !== 'Registrer byrå')
          .map(({ label, path }) => {
            return (
              <div className={cx('om-oss')}>
                <a href={path}>{label}</a>
                <span id={cx('bli-kjent-med-oss')}>Bli kjent med oss</span>
              </div>
            )
          })}
      </div>
      <div className={cx('choose-language-container')}>
        <div className={cx('icon-container', 'flag-chevron', handleIconBackgroundColor(4))}>
          <FontAwesomeIcon icon={['fas', handleIcon(4)]} color='white' size='xs' />
        </div>
        <div onClick={() => handleFlag(4)} className={cx('flag-container')}>
          <img className={cx('flag')} src='/media/images/norway.png' alt='' />
        </div>
      </div>
    </div>
  )
}

const Header = ({ headerMenu }) => {
  const menuItems = headerMenu?.menuItems.nodes
  const parentItems = menuItems?.filter(item => item.parentId === null)
  const subItems = menuItems?.filter(item => item.parentId != null && item.parentId === 'cG9zdDo5NQ==')

  const { resetState, openIndexes, toggleIndex } = useToggler()
  const wrapperRef = useRef(null)
  useOutsideDetector(wrapperRef, resetState)

  const [openDropDown, setOpenDropDown] = useState()

  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth < 768

  function handleDropDownClick(index) {
    setOpenDropDown(index)
    toggleIndex(index)
  }

  function handleIcon(index) {
    return openIndexes.includes(index) ? 'chevron-down' : 'chevron-up'
  }

  function handleIconBackgroundColor(index) {
    return openIndexes.includes(index) ? 'red-icon-bg' : 'dark-blue-icon-bg'
  }

  function handleFlag(index) {
    toggleIndex(index)
  }

  return (
    <div ref={wrapperRef} className={cx('root')}>
      <Container className={cx('container')} size='medium'>
        <div className={cx('header-left')}>
          <DomainLogo />
        </div>
        {!isMobile && (
          <div className={cx('header-right')}>
            {openIndexes.includes(openDropDown) && <SubMenu openIndexes={openIndexes} subItems={subItems} />}
            <DesktopLeftHeader
              handleDropDownClick={handleDropDownClick}
              handleFlag={handleFlag}
              handleIcon={handleIcon}
              handleIconBackgroundColor={handleIconBackgroundColor}
              parentItems={parentItems}
            />
          </div>
        )}
        {isMobile && (
          <BurgerMenu
            handleDropDownClick={handleDropDownClick}
            handleFlag={handleFlag}
            handleIcon={handleIcon}
            items={parentItems}
            openIndexes={openIndexes}
            subItems={subItems}
          />
        )}
      </Container>
    </div>
  )
}

export default Header

{
  /*<Container className={cx('container')} size='large'>*/
}
{
  /*  <div className={cx('header-left')}>*/
}
{
  /*    <DomainLogo />*/
}
{
  /*  </div>*/
}
{
  /*  <div className={cx('header-right')}>*/
}
{
  /*    <BurgerMenu isMobile={isMobile} showMenu={showMenu} toggleMenu={toggleMenu} />*/
}
{
  /*    {isMenuShown && (*/
}
{
  /*      <div className={cx('menu')}>*/
}
{
  /*        {parentItems.map(item => {*/
}
{
  /*          const { label, path } = item*/
}
{
  /*          if (label === 'Tjenester') {*/
}
{
  /*            return (*/
}
{
  /*              <div key={label}>*/
}
{
  /*                <button type='button' className={cx('menu-item', 'menu-button')} onClick={toggleSubMenu}>*/
}
{
  /*                  <span>{label}</span>*/
}
{
  /*                  {showSubMenu ? (*/
}
{
  /*                    <FontAwesomeIcon icon={['fal', 'angle-up']} size='lg' />*/
}
{
  /*                  ) : (*/
}
{
  /*                    <FontAwesomeIcon icon={['fal', 'angle-down']} size='lg' />*/
}
{
  /*                  )}*/
}
{
  /*                </button>*/
}
{
  /*                {showSubMenu && <SubMenu subItems={subItems} />}*/
}
{
  /*              </div>*/
}
{
  /*            )*/
}
{
  /*          }*/
}
{
  /*          return <MenuItem key={label} label={label} path={path} className='menu-item' />*/
}
{
  /*        })}*/
}
{
  /*      </div>*/
}
{
  /*    )}*/
}
{
  /*  </div>*/
}
{
  /*</Container>*/
}
