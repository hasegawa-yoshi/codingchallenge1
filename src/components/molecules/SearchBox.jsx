import { Grid } from '@mui/material'
import React, { useState } from 'react'
import PrimaryButton from '../atoms/PrimaryButton'
import PrimaryTextField from '../atoms/PrimaryTextField'

const SearchBox = () => {
  const [text, setText] = useState('')

  const onChangeText = (e) => setText(e.target.value)

  const onClickSearchButton = () => {
    alert(text);
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" padding={2}>
      <Grid item xs={1}></Grid>
      <Grid item xs={7}>
        <PrimaryTextField value={text} onChange={onChangeText} style={{ color: "white" }} />
      </Grid>
      <Grid item xs={0.5}></Grid>
      <Grid item xs={1.5}>
        <PrimaryButton onClick={onClickSearchButton}  style={{ backgroundColor: "white" }} />
      </Grid>
    </Grid>
  )
}

export default SearchBox