import  { green } from '@material-ui/core/colors';
import React from 'react';
import Car from '../car';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
      border: '1px solid rgb(30, 5, 45)',
      color: green[600],
      backgroundColor:'white',
      height: '1.75rem',
      borderRadius: '0.5rem',
      margin:"0.5rem"
    }
}));
export default function Indicator( props ) {
  const {empty} = props;
  const classes = useStyles();
  return (
    <div className = {classes.container}>
      <Car color = {  empty ? green[600]: 'secondary' }></Car>
    </div>
  );
}