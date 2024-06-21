import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box>
      <AppBar color="secondary" position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" align='left' sx={{ flexGrow: 1 }}>
            Employee App App
          </Typography>
          <Link to={'/'}><Button color="inherit" style={{color:'white'}}>Home</Button></Link>
          <Link to={'/employeeform'}><Button color="inherit" style={{color:'white'}}>Employee Form</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar