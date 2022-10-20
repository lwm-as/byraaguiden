import classNames from 'classnames/bind'
import styles from './StepperComponent.module.css'

const cx = classNames.bind(styles)

function StepperComponent({ step }) {
  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        <span>{(step * 100) / 10} % </span>
      </div>
      <div className={cx('progressInnerContainer')}>
        <progress id='file' value={step || '0'} max='5'></progress>
      </div>
    </div>
  )
}

export default StepperComponent
