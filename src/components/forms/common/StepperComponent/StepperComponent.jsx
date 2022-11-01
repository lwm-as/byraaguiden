import classNames from 'classnames/bind'
import styles from './StepperComponent.module.css'
import { useRouter } from 'next/router'

const cx = classNames.bind(styles)

function StepperComponent({ step }) {
  const router = useRouter()
  const url = router?.asPath.split('=')[1]
  const webDesignCategory = url === 'webdesign'
  const app = url === 'apputvikling'
  const digitalMarketing = decodeURIComponent(url) === decodeURIComponent('digital-markedsføring')

  const fiveSteps = webDesignCategory || app || digitalMarketing

  function calculatePercentage() {
    if (webDesignCategory || app || digitalMarketing) {
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
      {fiveSteps ? (
        <div className={cx('progressInnerContainer')}>
          <progress id='file' value={step || '0'} max='5'></progress>
        </div>
      ) : (
        <div className={cx('progressInnerContainer')}>
          <progress id='file' value={step || '0'} max='4'></progress>
        </div>
      )}
    </div>
  )
}

export default StepperComponent
