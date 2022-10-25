import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProviderItemVertical from './ProviderItemVertical/ProviderItemVertical'
import classNames from 'classnames/bind'
import styles from './Tabs.module.css'
import { useReviewContext } from '../Cities/ReviewContextProvider'

const cx = classNames.bind(styles)

export function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  }
}

const tabLabelStyles = {
  '&.MuiButtonBase-root': {
    fontSize: '1',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '600',
    color: '#595B5F'
  },
  '&.Mui-selected': {
    color: '#FF4A55'
  }
}

export function BasicTabs({ customReviewModal, topFiveProviders, checked }) {
  const [value, setValue] = useState(0)
  const { sortedReviews } = useReviewContext() //denne kan brukes på alle komponenter i provider

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#D3D4D5' }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: 'red'
            }
          }}
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab sx={tabLabelStyles} label='Valgte byråer' {...a11yProps(0)} />
          <Tab sx={tabLabelStyles} label='Topp 5 byråer' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={cx('grid')}>
          {sortedReviews?.map((item, idx) => {
            if (checked.includes(idx)) {
              return <ProviderItemVertical customReviewModal={customReviewModal} provider={item} />
            }
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={cx('grid')}>
          {topFiveProviders?.slice(0, 5).map(item => {
            return <ProviderItemVertical customReviewModal={customReviewModal} provider={item} />
          })}
        </div>
      </TabPanel>
    </Box>
  )
}
