export function handleSelecting(
  webDesignCategoryGroup,
  digitalMarketingCategoryGroup,
  appDevelopmentCategoryGroup,
  budgetGroup,
  timeGroup,
  probabilityGroup,
  OPTIONS
) {
  const webDesignCategoryGroupKeys = Object.keys(webDesignCategoryGroup)
  const appDevelopmentCategoryGroupKeys = Object.keys(appDevelopmentCategoryGroup)
  const digitalMarketingCategoryGroupKeys = Object.keys(digitalMarketingCategoryGroup)

  const budgetGroupKeys = Object.keys(budgetGroup)
  const timeGroupKeys = Object.keys(timeGroup)
  const probabilityKeys = Object.keys(probabilityGroup)

  const webDesignCategory = webDesignCategoryGroupKeys.filter(key => webDesignCategoryGroup[key])
  const appDevelopmentCategory = appDevelopmentCategoryGroupKeys.filter(key => appDevelopmentCategoryGroup[key])
  const digitalMarketingCategory = digitalMarketingCategoryGroupKeys.filter(key => digitalMarketingCategoryGroup[key])

  const budget = budgetGroupKeys.filter(key => budgetGroup[key])
  const time = timeGroupKeys.filter(key => timeGroup[key])
  const probability = probabilityKeys.filter(key => probabilityGroup[key])

  const chosenWebDesignCategoryGroup = OPTIONS['webDesignCategoryGroup'][webDesignCategory]
  const chosenAppDevelopmentCategoryGroup = OPTIONS['appDevelopmentCategoryGroup'][appDevelopmentCategory]
  const chosenDigitalMarketingCategoryGroup = OPTIONS['digitalMarketingCategoryGroup'][digitalMarketingCategory]

  const chosenBudget = OPTIONS['budgetGroup'][budget]
  const chosenTime = OPTIONS['timeGroup'][time]
  const chosenProbability = OPTIONS['probabilityGroup'][probability]

  return {
    chosenAppDevelopmentCategoryGroup,
    chosenDigitalMarketingCategoryGroup,
    chosenWebDesignCategoryGroup,
    chosenBudget,
    chosenTime,
    chosenProbability
  }
}
