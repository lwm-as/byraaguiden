import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../ProviderHero.module.css'

const CityFilterCheckbox = ({ item }) => {
  const {
    slug,
    tags: { nodes },
  } = item

  const router = useRouter()
  const isPathname = slug === router.query.category

  return (
    <div className={styles.filterItem}>
      {isPathname ? (
        <span style={{ color: '#418DAA' }}>{nodes[0].name}</span>
      ) : (
        <Link href={slug} passHref>
          <a className={styles.filterItemLink}>{nodes[0].name}</a>
        </Link>
      )}
    </div>
  )
}

export default CityFilterCheckbox
