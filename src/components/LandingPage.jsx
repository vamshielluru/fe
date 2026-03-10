import React from 'react'
import  AppBar  from '@mui/material'
import Toolbar from '@mui/material'
import Typography from '@mui/material'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>
                    KisanMart
                </Typography>
                <Box>
                     <Link to="">AboutUs</Link>
                     <Link to="">All Products</Link>
                     <Link to="/login">Login</Link>
                     <Link to="register">Register</Link>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default LandingPage