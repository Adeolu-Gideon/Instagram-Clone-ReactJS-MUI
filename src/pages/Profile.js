import React from 'react'
import ResponsiveAppBar from '../components/AppBar'
import Stories from '../components/Stories'
import { Box, Grid, Container } from '@mui/material'
import FixedBottomNavigation from '../components/BottomNav'
import '../components/BottomNav.css'
import AppBarMobile from '../components/AppBarMobile'
import Feeds from '../components/Feeds'
import Followers from '../components/Followers'
import ProfileLinks from '../components/ProfileLinks'

function Profile() {
  return (
    <Container sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <ResponsiveAppBar />
      <AppBarMobile />
      <Grid container style={{ marginTop: '70px', marginBottom: '70px', width: '100%'}}>
        
        <Grid item xs={12} >
          <Grid container >
            <Grid item xs={12} md={8} >
              <Stories />
              <Feeds />
            </Grid>
            <Grid item md={4} >
              <Followers />
              <ProfileLinks/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
        {/* <Feeds/> */}
      <FixedBottomNavigation />
    </Container>
  )
}

export default Profile