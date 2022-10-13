import Link from 'next/link'

import styles from './CtaButton.module.css'

const CtaButton = ({ href, children, target }) => {
  return (
    <Link href={href}>
      <a target={target} rel='nofollow' className={styles.ctaButton}>
        {children}
      </a>
    </Link>
  )
}

export default CtaButton
