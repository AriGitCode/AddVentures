import { Dialog, DialogTitle, IconButton } from '@mui/material'
import { useValue } from '../../context/ContextProvider'
import React, { useState } from 'react'



const Login = () => {
    const {state:{openLogin}, dispatch} =useValue()
    const[ title, setTitle] = useState('Login')
    const [isRegister, setIsRegister]=useState(false)

    const handleClose = ()=>{
        dispatch({type:'CLOSE_LOGIN'}) //update var to false
    }

  return (
    <Dialog open={openLogin} onClose={handleClose}>
        <DialogTitle> 
            {title}
            <IconButton sx={{position:'absolute', top: 8, right: 8, color:(theme) =>theme.palette.grey[500] }}>

            </IconButton>
        </DialogTitle>
    </Dialog>
  )
}

export default Login