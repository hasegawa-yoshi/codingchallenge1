import { Button } from '@mui/material'
import React from 'react'

const PrimaryButton = (props) => {
  return (
    <Button onClick={props.onClick} variant="outlined" fullWidth sx={"background-color:blue;color:white;"}>検索</Button>
  )
}

export default PrimaryButton