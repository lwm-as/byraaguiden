const getPosition = element => {
  let yPosition = 0

  while (element) {
    yPosition += element.offsetTop - element.scrollTop + element.clientTop
    element = element.offsetParent
  }
  return yPosition
}

export default getPosition()
