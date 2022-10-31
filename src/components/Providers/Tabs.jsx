import { Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProviderItemVertical from './ProviderItemVertical/ProviderItemVertical'
import classNames from 'classnames/bind'
import styles from './Tabs.module.css'
import { useReviewContext } from '../Cities/ReviewContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStateValue } from '../../context/StateValueProvider'
import { ProviderSearchModal } from './ProviderSearchModal'

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

export function BasicTabs({ onClose, setCustomerReviewModal, customReviewModal, topFiveProviders }) {
  const [value, setValue] = useState(0)
  const [{ basket }, dispatch] = useStateValue()

  const [searchBox, setSearchBox] = useState(false)
  const { sortedReviews } = useReviewContext() //denne kan brukes på alle komponenter i provider

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function addProvider() {
    return setSearchBox(true)
  }

  const providersForSearchField = sortedReviews.map(
    ({ provider, reviews, totalReviews, agencyScore, popularity, rating }) => ({
      value: provider?.providersInfo?.name,
      provider: provider,
      reviews,
      totalReviews,
      agencyScore,
      popularity,
      rating
    })
  )

  const basketItemsIDS = basket.map(item => item?.provider.id)
  console.log(basketItemsIDS)
  const filteredItems = providersForSearchField.filter(item => !basketItemsIDS.includes(item.provider.id))

  console.log(filteredItems)

  function handleOnSelect(provider) {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: provider.item
    })
    setSearchBox(false)
  }

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <div className={cx('close')}>
        <FontAwesomeIcon size='2x' color='#727070' onClick={onClose} className={cx('icon')} icon={['fal', 'times']} />
      </div>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: '#D3D4D5',
          position: 'sticky',
          top: '-1rem',
          backgroundColor: 'white',
          zIndex: '1003',
          padding: '1rem 0 0 0'
        }}
      >
        <span className={cx('title')}>Sammenlign byråer</span>

        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: 'red'
            }
          }}
          value={value}
          onChange={handleChange}
          aria-label='tabs'
        >
          <Tab
            sx={tabLabelStyles}
            label={`Valgte byråer ${basket.length === 0 ? '' : basket.length}`}
            {...a11yProps(0)}
          />
          <Tab sx={tabLabelStyles} label='Topp 5 byråer' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={cx('grid')}>
          {!searchBox ? (
            basket?.map(item => {
              return (
                <ProviderItemVertical
                  setCustomerReviewModal={setCustomerReviewModal}
                  customReviewModal={customReviewModal}
                  provider={item}
                  id={item?.provider?.id}
                />
              )
            })
          ) : (
            <ProviderSearchModal
              setSearchBox={() => setSearchBox(false)}
              handleOnSelect={handleOnSelect}
              filteredItems={filteredItems}
              searchBox={searchBox}
            />
          )}
          {!searchBox && (
            <div onClick={() => addProvider()} className={cx('legg-til')}>
              <div className={cx('inner-legg-til')}>
                <span className={cx('legg-til-text')}>Legg til byrå</span>
                <FontAwesomeIcon size='2x' color='#022E47' icon={['fas', 'plus']} />
              </div>
            </div>
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={cx('grid')}>
          {topFiveProviders?.slice(0, 5).map(item => {
            return (
              <ProviderItemVertical
                setCustomerReviewModal={setCustomerReviewModal}
                customReviewModal={customReviewModal}
                provider={item}
                noCloseBtn
              />
            )
          })}
        </div>
        <ProviderSearchModal handleOnSelect={handleOnSelect} filteredItems={filteredItems} searchBox={searchBox} />
      </TabPanel>
    </Box>
  )
}
