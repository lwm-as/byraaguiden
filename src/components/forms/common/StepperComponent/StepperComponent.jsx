import classNames from 'classnames/bind'
import styles from './StepperComponent.module.css'
import { useRouter } from 'next/router'

const cx = classNames.bind(styles)

function StepperComponent({ step }) {
  const router = useRouter()
  const webdesignFromURL = router?.asPath.split('=')[1]
  const webDesignCategory = webdesignFromURL === 'webdesign'

  function calculatePercentage() {
    if (webDesignCategory) {
      return step * 20
    } else {
      return step * 25
    }
  }

  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        <span>{calculatePercentage()} % </span>
      </div>
      <div className={cx('progressInnerContainer')}>
        <progress id='file' value={step || '0'} max={webDesignCategory ? '5' : '4'}></progress>
      </div>
    </div>
  )
}

export default StepperComponent
