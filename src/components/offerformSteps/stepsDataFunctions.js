export const categoryData = categoryGroup => {
  return [
    {
      name: 'newWebsite',
      label: 'Lage ny nettside',
      checked: categoryGroup.newWebsite
    },
    {
      name: 'updateWebsite',

      label: 'Oppdatere eksisterende nettside',
      checked: categoryGroup.updateWebsite
    },
    {
      name: 'createWebStore',
      label: 'Lage ny nettbutikk',
      checked: categoryGroup.createWebStore
    },
    {
      name: 'updateWebStore',
      label: 'Oppdatere eksisterende nettbutikk',
      checked: categoryGroup.updateWebStore
    },
    {
      name: 'other',
      label: 'Annet / usikker',
      checked: categoryGroup.other
    }
  ]
}
export const budgetData = budgetGroup => {
  return [
    {
      name: 'tenThousand',
      label: 'Mindre enn 10 000kr',
      checked: budgetGroup.tenThousand
    },
    {
      name: 'between10And20',
      label: '10 000kr - 20 000kr',
      checked: budgetGroup.between10And20
    },
    {
      name: 'between20And50',
      label: '20 000kr - 50 0000',
      checked: budgetGroup.between20And50
    },
    {
      name: 'between50And100000',
      label: '50 000kr - 100 000kr',
      checked: budgetGroup.between50And100000
    },
    {
      name: 'moreThan100000',
      label: '100 000kr eller mer',
      checked: budgetGroup.moreThan100000
    },
    {
      name: 'other',
      label: 'Usikker',
      checked: budgetGroup.other
    }
  ]
}
export const timeData = timeGroup => {
  return [
    {
      name: 'asap',
      label: 'Så fort som mulig',
      checked: timeGroup.asap
    },
    {
      name: 'oneWeek',
      label: 'Innen 1 uke',
      checked: timeGroup.oneWeek
    },
    {
      name: 'twoWeeks',
      label: 'Innen 2 uker',
      checked: timeGroup.twoWeeks
    },
    {
      name: 'oneMonth',
      label: 'Innen 1 måned',
      checked: timeGroup.oneMonth
    },
    {
      name: 'twoOrThreeMonths',
      label: 'Ínnen de neste 2-3 månedene',
      checked: timeGroup.twoOrThreeMonths
    },
    {
      name: 'other',
      label: 'Annet / ønsker å diskutere dette',
      checked: timeGroup.other
    }
  ]
}
export const probabilityData = probabilityGroup => {
  return [
    {
      name: 'veldigSannsynlig',
      label: 'Veldig sannsynlig',
      checked: probabilityGroup.veldigSannsynlig
    },
    {
      name: 'ganskeSannsynlig',
      label: 'Ganske sannsynlig',
      checked: probabilityGroup.ganskeSannsynlig
    },
    {
      name: 'liteSannsynlig',
      label: 'Lite sannsynlig',
      checked: probabilityGroup.liteSannsynlig
    },
    {
      name: 'usikker',
      label: 'Usikker',
      checked: probabilityGroup.usikker
    }
  ]
}
