import { Grid } from '@mui/material';
import Card1 from '../../components/card/card1';
import Card2 from '../../components/card/card2';
import Card3 from '../../components/card/card3';
import Card4 from '../../components/card/card4';
import Card5 from '../../components/card/card5';
import Card6 from '../../components/card/card6';
import Card7 from '../../components/card/card7';
import Card8 from '../../components/card/card8';
import Card9 from '../../components/card/card9';


export default function Skills(){
  return(
    <>
      <Grid container sx={{ p: 3 }} spacing={4}>
        <Grid item xs={4}>
      <Card1/>
      </Grid>
      <Grid item xs={4}>
      <Card2/>
      </Grid>
      <Grid item xs={4}>
      <Card3/>
      </Grid>
      <Grid item xs={4}>
      <Card4/>
      </Grid>
      <Grid item xs={4}>
      <Card5/>
      </Grid>
      <Grid item xs={4}>
      <Card6/>
      </Grid>
      <Grid item xs={4}>
      <Card7/>
      </Grid>
      <Grid item xs={4}>
      <Card8/>
      </Grid>
      <Grid item xs={4}>
      <Card9/>
      </Grid>
      </Grid>
     </>
  )
}