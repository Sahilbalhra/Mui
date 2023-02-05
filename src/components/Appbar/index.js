import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import React from 'react'
import AppbarMobile from './AppbarMobile'
import AppbarDesktop from './AppbarDesktop'

const Appbar = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            {
                matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />

            }
        </>
    )
}

export default Appbar