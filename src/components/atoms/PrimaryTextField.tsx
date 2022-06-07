import { TextField } from '@mui/material'
import React from 'react'

const PrimaryTextField = () => {
  return (
    <TextField id="outlined-basic" label="検索ワードを入力" variant="outlined" fullWidth size='small' style={{backgroundColor:"white"}}/>
  )
}

export default PrimaryTextField