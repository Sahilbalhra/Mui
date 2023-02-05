import React from 'react'
import { AppBarContainer, AppBarHeader, MyList } from '../../styles/appbar'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Actions from './action';
const AppbarDesktop = ({ matches }) => {
    return (
        <AppBarContainer>
            <AppBarHeader>My Bags</AppBarHeader>
            <MyList type="row">
                <ListItemText primary='Home' />
                <ListItemText primary='Categories' />
                <ListItemText primary='Products' />
                <ListItemText primary='Contact Us' />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} />
        </AppBarContainer>


    )
}

export default AppbarDesktop