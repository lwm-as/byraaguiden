import classNames from 'classnames/bind'
import styles from './ContentsMenuArrowStyle.module.css'
import { useContentsMenuContext } from '../../../context/contentsMenuContext'
import React, { useEffect, useState } from 'react'
import scrollToPosition from '../../../utils/scrollToPosition'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

export default function ContentsMenuArrowStyle() {
  const [contentsMenu] = useContentsMenuContext()
  const [activeID, setActiveID] = useState()

  const handleMenuClick = e => {
    e.preventDefault()
    const current = e.currentTarget
    const { id } = current.dataset
    const scrollElement = document.getElementById(id)
    const elementPosition = scrollElement.offsetTop

    scrollToPosition(elementPosition - 88, 10)
    setActiveID(id)
  }

  useEffect(() => {
    setActiveID(contentsMenu[0]?.id)

    const setActiveMenu = () => {
      contentsMenu.forEach(({ id }, i) => {
        const element = document.getElementById(id)
        const { top = 0 } = element?.getBoundingClientRect() || {}
        const elementTop = window.scrollY + top - 30
        const isActive = window.pageYOffset >= elementTop && window.pageYOffset < elementTop + element?.offsetHeight

        if (isActive) {
          setActiveID(contentsMenu[i]?.id)
        }
      })
    }

    document.addEventListener('load', setActiveMenu)
    document.addEventListener('scroll', setActiveMenu)

    return () => {
      document.removeEventListener('load', setActiveMenu)
      document.removeEventListener('scroll', setActiveMenu)
    }
  }, [contentsMenu])

  let cappedContentsMenu = []

  if (contentsMenu.length > 8) {
    cappedContentsMenu = contentsMenu.slice(0, 8)
  } else {
    cappedContentsMenu = contentsMenu
  }
  return (
    <div>
      <span className={cx('title')}>I denne artikkelen skal vi gå gjennom</span>
      <div className={cx('root')}>
        <ul className={cx('menu')}>
          {cappedContentsMenu.map(({ id, text }) => (
            <li className={cx('item', { 'is-active': id === activeID })} key={id}>
              <div className={cx('icon-container')}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} color='white' size='xs' />
              </div>

              <a href={`#${id}`} data-id={id} className={cx('link')} onClick={handleMenuClick}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
