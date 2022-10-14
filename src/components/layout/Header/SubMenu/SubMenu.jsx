import React from 'react'
import classNames from 'classnames/bind'
import styles from './SubMenu.module.css'

const cx = classNames.bind(styles)

export default function SubMenu({ openIndexes, subItems }) {
  return (
    <div className={cx('root')}>
      <h3>{`${openIndexes.includes(0) ? 'Utforsk tjenester' : 'Utforsk artikler'}`}</h3>
      <div className={cx('rule-container')}>
        <hr className={cx('rule')} />
      </div>
      <ul>
        {subItems.map(({ label, path }) => {
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
