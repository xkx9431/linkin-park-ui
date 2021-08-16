import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'rgb(30, 5, 45)'
    },
    title:{
        margin:"0.5rem",
        marginLeft:"1rem",
        color:'rgb(255, 53, 126)',
        fontWeight:700
    },
    subTitle:{
        marginLeft: '2rem',
        marginTop:'1rem',
        color:'rgb(255, 53, 126)',
        fontWeight:700
    },
    bar: {
      backgroundColor:'rgb(30, 5, 45)',
    },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  className={classes.bar}>
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes .menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h2" color="inherit"  className={classes.title}>
            Linkin Car 
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.subTitle} > 
           A real time parking slots detect system
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
