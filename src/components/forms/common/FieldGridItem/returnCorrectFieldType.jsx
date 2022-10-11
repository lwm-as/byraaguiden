// eslint-disable-next-line import/prefer-default-export
export const returnCorrectFieldType = field => {
  let fieldType = ''
  let autoComplete = ''

  if (field === 'phone') {
    fieldType = 'text'
    autoComplete = 'tel'
  } else if (field === 'email') {
    fieldType = 'text'
    autoComplete = 'email'
  } else if (field === 'name') {
    fieldType = 'text'
    autoComplete = 'name'
  } else if (field === 'postal') {
    fieldType = 'text'
    autoComplete = 'postal-code'
  } else if (field === 'address') {
    fieldType = 'text'
    autoComplete = 'address-line1'
  }
  return { fieldType, autoComplete }
}
