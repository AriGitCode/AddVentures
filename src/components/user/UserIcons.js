import { Mail} from '@mui/material'
import { Badge, Box, IconButton } from '@mui/material'
import React from 'react'

const UserIcons = () => {
  return (
    <Box>
        <IconButton>
            <Badge>
                <Mail/>
            </Badge>
        </IconButton>
    </Box>
  )
}

export default UserIcons