import { Mail, Notifications } from '@mui/icons-material'
import { Avatar, Badge, Box, IconButton, Tooltip} from '@mui/material'
import React, { useState } from 'react'
import {useValue} from '../../context/ContextProvider'
import UserMenu from './UserMenu'

const UserIcons = () => {
    const {state:{currentUser}} =useValue()

    const [anchorUserMenu, setAnchorUserMenu] = useState(null) //add state, this state controls if menu open or close, null means closed


  return (
    <Box>
        <IconButton size ='large' color='green'>
            <Badge color='error' badgeContent={5}>
                <Mail/>
            </Badge>
        </IconButton>
        <IconButton size ='large' color='green'>
            <Badge color='error' badgeContent={20}>
                <Notifications/>
            </Badge>
        </IconButton>
        <Tooltip title= 'Open User Settings'>       {/* Avatar */}
        <IconButton onClick={(e)=>setAnchorUserMenu(e.currentTarget)}> {/* when click on ava btn we change state of our current element,drop menu appears next to btn*/}
            <Avatar src={currentUser?.photoURL} alt={currentUser?.name}>
                {currentUser?.name?.charAt(0).toUpperCase()}

            </Avatar>
        </IconButton>
        </Tooltip>
        <UserMenu {...{anchorUserMenu, setAnchorUserMenu}}/>
    </Box>
  )
}

export default UserIcons