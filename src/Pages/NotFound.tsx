import { Grid, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography variant="h5">Page not found</Typography>
      </Grid>
  )
}

export default NotFound