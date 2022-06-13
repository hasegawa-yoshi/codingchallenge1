import { TextField } from '@mui/material'
import React from 'react'

type props = {
  value: string;
  onChange: () => void;
}

const PrimaryTextField = (props:props) => {
  return (
    <TextField value={props.value} onChange={props.onChange} id="outlined-basic" label="検索ワードを入力" variant="outlined" fullWidth size='small' style={{backgroundColor:"white"}}/>
  )
}

export default PrimaryTextField