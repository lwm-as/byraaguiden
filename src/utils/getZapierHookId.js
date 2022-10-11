const getZapierHookId = urlParams => {
  let zapierHookId
  switch (urlParams) {
    case 'eiendomsmegler':
      zapierHookId = '8671498/b845u0o'
      break
    case 'varmepumpe':
      zapierHookId = '8671498/b84qe5t'
      break
    default:
      zapierHookId = ''
  }
  return zapierHookId
}

export default getZapierHookId
