import { Grid } from '@mui/material';
import React from 'react';

import IMG from '../../daitaigazou.jpeg';

const MainLayout = () => {
  const arr = [...Array(50)];
  return (
    <div style={{paddingTop: "70px"}}>
      <Grid container alignItems="center" justifyContent="center">
          {arr.map(()=>
          <Grid item xs={3}>
            <img src={IMG} alt='pic' style={{width:"95%", padding:"5px"}}/>
          </Grid>)}
      </Grid>
    </div>
  )
}

export default MainLayout