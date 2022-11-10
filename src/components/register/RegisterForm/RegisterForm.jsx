import classNames from 'classnames/bind'
import styles from './RegisterForm.module.css'
import Button from '../../common/Button/Button'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { useRouter } from 'next/router'
import { useState } from 'react'

const cx = classNames.bind(styles)

export default function RegisterForm() {
  const router = useRouter()
  const [formFailed, setFormFailed] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (values, e) => {
    e.preventDefault()

    const valuesToBeSent = { ...values, serviceName: 'Byråguiden' }

    const res = await emailjs.send(
      'service_xwr0fgs',
      'template_999nazi',
      { ...valuesToBeSent },
      'user_Tf5WUPLO6lS39d5FpP8CE'
    )

    if (res.status === 200) {
      reset()
      await router.push('/suksess-registrering')
    } else {
      setFormFailed(true)
    }
  }

  return (
    <div className={cx('root')}>
      <form className={cx('inner-root')} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx('heading')}>
          <span>Meld interesse så tar vi kontakt for videre registrering</span>
        </div>
        <div id={cx('name')} className={cx('input-container')}>
          <label htmlFor='companyName'>Navn på byrå</label>
          <input
            {...register('companyName', { required: 'Vennligst fyll inn byråets navn.' })}
            type='text'
            name='companyName'
          />
          {errors?.companyName?.message && <span className={cx('error')}>{errors.companyName.message}</span>}
        </div>
        <div className={cx('flex')}>
          <div className={cx('input-container', 'full-flex')}>
            <label htmlFor='email'>E-postadresse</label>
            <input
              {...register('email', {
                required: 'Vennligst fyll inn din epost-adresse.',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Dette feltet må inneholde en gyldig epost-adresse.'
                }
              })}
              type='email'
              name='email'
            />
            {errors?.email?.message && <span className={cx('error')}>{errors.email.message}</span>}
          </div>
          <div className={cx('input-container', 'full-flex')}>
            <label htmlFor='phone'>Telefonnummer</label>
            <input
              maxLength={8}
              {...register('phone', {
                required: 'Dette feltet skal inneholde et gyldig telefonnummer',
                valueAsNumber: true,
                pattern: {
                  value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  message: 'Dette feltet skal inneholde et gyldig telefonnummer'
                }
              })}
              type='number'
              name='phone'
            />
            {errors?.phone?.message && <span className={cx('error')}>{errors.phone.message}</span>}
          </div>
        </div>
        <div id={cx('description')} className={cx('input-container')}>
          <label htmlFor='description'>Beskrivelse</label>
          <textarea {...register('description', { required: 'Vennligst skriv inn beskrivelse.' })} name='description' />
          {errors?.description?.message && <span className={cx('error')}>{errors.description.message}</span>}
        </div>
        <div>
          <Button disabled={formFailed} className={cx('submit')} size='large' type='submit'>
            Meld interesse
          </Button>

          {formFailed && <p className={cx('error-on-fail')}>Noe gikk galt med innsending, vennligst prøv på nytt.</p>}
        </div>
      </form>
    </div>
  )
}
