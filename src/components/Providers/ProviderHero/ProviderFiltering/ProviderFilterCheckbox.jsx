import React from 'react'
import styles from '../ProviderHero.module.css'

const ProviderFilterCheckbox = ({ item, handleChange }) => {
  const { name, value, label, checked, disabled } = item

  return (
    <div className={styles.filterItem}>
      <input
        disabled={disabled}
        id={name}
        onChange={handleChange}
        checked={checked}
        name={name}
        value={value}
        type='checkbox'
      />
      <label style={disabled ? { color: '#E6E6E6' } : null} htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export default ProviderFilterCheckbox
