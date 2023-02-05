import React from 'react'
import { AppBarContainer, AppBarHeader } from '../../styles/appbar'
import { IconButton } from '@mui/material'
import { Menu, Search } from '@mui/icons-material'
import Actions from './action'

const AppbarMobile = ({ matches }) => {
  return (
    <AppBarContainer>
      <IconButton>
        <Menu />
      </IconButton>
      <AppBarHeader textAlign="center" variant='h4'>My Bags</AppBarHeader>
      <IconButton>
        <Search />
      </IconButton>
      <Actions matches={matches} />
    </AppBarContainer>
  )
}

export default AppbarMobile