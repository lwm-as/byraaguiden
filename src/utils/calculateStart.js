export const calculateStars = stars => {
  switch (true) {
    case stars > 4.7:
      return ['full', 'full', 'full', 'full', 'full']
    case stars > 4.2 && stars < 4.8:
      return ['full', 'full', 'full', 'full', 'half']
    case stars > 3.7 && stars < 4.3:
      return ['full', 'full', 'full', 'full', 'empty']
    case stars > 3.2 && stars < 4.8:
      return ['full', 'full', 'full', 'half', 'empty']
    case stars > 2.7 && stars < 3.3:
      return ['full', 'full', 'full', 'empty', 'empty']
    case stars > 2.2 && stars < 2.8:
      return ['full', 'full', 'half', 'empty', 'empty']
    case stars > 1.7 && stars < 2.3:
      return ['full', 'full', 'empty', 'empty', 'empty']
    case stars > 1.2 && stars < 1.8:
      return ['full', 'half', 'empty', 'empty', 'empty']
    default:
      return ['full', 'empty', 'empty', 'empty', 'empty']
  }
}
