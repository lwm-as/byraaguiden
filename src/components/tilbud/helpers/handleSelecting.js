export function handleSelecting(categoryGroup, budgetGroup, timeGroup, probabilityGroup, OPTIONS) {
  const categoryGroupKeys = Object.keys(categoryGroup)
  const budgetGroupKeys = Object.keys(budgetGroup)
  const timeGroupKeys = Object.keys(timeGroup)
  const probabilityKeys = Object.keys(probabilityGroup)

  const category = categoryGroupKeys.filter(key => categoryGroup[key])
  const budget = budgetGroupKeys.filter(key => budgetGroup[key])
  const time = timeGroupKeys.filter(key => timeGroup[key])
  const probability = probabilityKeys.filter(key => probabilityGroup[key])

  const chosenCategory = OPTIONS['categoryGroup'][category]
  const chosenBudget = OPTIONS['budgetGroup'][budget]
  const chosenTime = OPTIONS['timeGroup'][time]
  const chosenProbability = OPTIONS['probabilityGroup'][probability]

  return { chosenCategory, chosenBudget, chosenTime, chosenProbability }
}
