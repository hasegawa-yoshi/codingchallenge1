import { Grid } from '@mui/material'
import React from 'react'
import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryTextField from '../atoms/PrimaryTextField'

const SearchBox = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" padding={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={7}>
        <PrimaryTextField style={{color:"white"}}/>
      </Grid>
      <Grid item xs={0.5}></Grid>
      <Grid item xs={1.5}>
        <PrimaryButton style={{backgroundColor:"white"}}/>
      </Grid>
    </Grid>
  )
}

export default SearchBox