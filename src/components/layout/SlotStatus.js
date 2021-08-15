import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { TOTAL_CARS_SLOTS  } from '../../model/constants';
import Indicator from '../indicator/index'


import SlotStatesDesp from '../slot-description/SlotStatesDesp'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid( props ) {
  const classes = useStyles();
  const {carsNum } = props;
  let  emptySlots = TOTAL_CARS_SLOTS - carsNum;
  if(emptySlots < 0 ){
      emptySlots = 0;
  }
  const slotsStatus = Array.from({length: TOTAL_CARS_SLOTS }).map( ()=> false)
  for( let i=0; i< emptySlots;i++){
    slotsStatus[i] = true
  }


  return (
    <div>
    <SlotStatesDesp carsNum={carsNum}/>
    <Grid container spacing={2}>
        {slotsStatus.map( (slot)=>(
            <Grid item xs={2}>
                <Indicator empty={ slot }></Indicator>
            </Grid>
        )) }
    </Grid>
    <Divider className={classes.divider} />
    </div>
);
}
