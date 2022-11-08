import React from 'react'
import classNames from 'classnames/bind'
import styles from './SubMenu.module.css'
import Link from 'next/link'

const cx = classNames.bind(styles)

export default function SubMenu({ openIndexes, subItems }) {
  return (
    <div className={cx('root')}>
      <h3>{`${openIndexes.includes(0) ? 'Utforsk tjenester' : 'Utforsk artikler'}`}</h3>
      <div className={cx('rule-container')}>
        <hr className={cx('rule')} />
      </div>
      <ul>
        {!openIndexes.includes(0) && (
          <Link href={`/artikler`}>
            <a className={cx('alle-artikler')}>Alle artikler</a>
          </Link>
        )}
        {subItems
          .filter(item => item.label !== 'Telemarketing')
          .map(({ label, path }) => {
            const cleanPath = path.split('/category').pop()
            return (
              <li>
                {!openIndexes.includes(0) ? (
                  <a href={`/artikler${cleanPath}`}>{label}</a>
                ) : (
                  <a href={`${cleanPath}`}>{label}</a>
                )}
              </li>
            )
          })}
      </ul>
    </div>
  )
}
