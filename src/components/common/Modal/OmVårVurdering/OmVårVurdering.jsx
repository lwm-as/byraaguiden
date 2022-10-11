import React, { useRef } from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideDetecter from '../../../../utils/hooks/useOutsideDetecter'

import styles from './OmVårVurdering.module.css'

const cx = classNames.bind(styles)

function OmVårVurdering({ open, onClose }) {
  const wrapperRef = useRef(null)
  useOutsideDetecter(wrapperRef, onClose)

  if (!open) return null
  return (
    <div className={cx('root')}>
      <div ref={wrapperRef} className={cx('overlay')}>
        <div className={cx('close')}>
          <FontAwesomeIcon size='2x' onClick={onClose} className={cx('icon')} icon={['fal', 'times']} />
        </div>
        <h1>Om vår vurdering</h1>
        <p>Tallene oppdateres live fra Google Reviews, og vår vurdering er satt opp basert på disse tallene:</p>
        <p>
          <span>Popularitet:</span> Antall anmeldelser i forhold til de andre bedruftene som er oppført under samme
          bransje.
        </p>
        <p>
          <span>Kundetilfredshet:</span> Antall stjerner på google Reviews.
        </p>
        <p>
          <span>Totalscore:</span> Sammenlagt score basert på kundetilfredshet og popularitet.
        </p>
      </div>
    </div>
  )
}

export default OmVårVurdering
