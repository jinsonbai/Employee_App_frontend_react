import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

const Employeeform = () => {
  return (
    <div style={{margin: '12%'}}>
        <h1>Employee App Form</h1>
        <Grid container spacing={1}>
  <Grid item xs={6} md={6} sm={6}>
  <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
  </Grid>
  <Grid item xs={6} md={6} sm={6}>
  <TextField fullWidth id="outlined-basic" label="Designation" variant="outlined" />
  </Grid>
  <Grid item xs={6} md={6} sm={6}>
  <TextField fullWidth id="outlined-basic" label="Location" variant="outlined" />
  </Grid>
  <Grid item xs={6} md={6} sm={6}>
  <TextField fullWidth id="outlined-basic" label="Salary" variant="outlined" />
  </Grid>
  <Grid item xs={6} md={12} sm={12}>
  <Button color='secondary' variant="contained">Submit</Button>
  </Grid>
</Grid>
    </div>
  )
}

export default Employeeform