import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TOTAL_CARS_SLOTS  } from '../../model/constants';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(1),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        fontSize:'1.75rem',
        fontWeight:600,
        color: 'rgb(255, 53, 126)',
    },
    description:{
        '& > * + *': {
        marginLeft: theme.spacing(2),
        },
    },
    progess:{
        display:'inline-block',
        transform: 'translateY(8px)',
        color:'rgb(84, 58, 100)'
    },
    clock:{
        fontSize:'2.5rem',
        transform: 'translateY(8px)'
    },
    remainNum:{
        color: '#f50057',
        fontSize:'2rem',
    }
    
    

}));

export default function Descption( props){
    const classes = useStyles();
    const {carsNum } = props;
    let  emptySlots = TOTAL_CARS_SLOTS - carsNum;
    if(emptySlots < 0 ){
        emptySlots = 0;
    }
    const current = new Date();

    const [now, setNow] = React.useState(`${current.getHours()}: ${current.getMinutes()> 9 ? current.getMinutes(): '0' + current.getMinutes() }`);
    React.useEffect(() => {
        const timer = setInterval(() => {
            const current = new Date();
            setNow(`${current.getHours()}: ${current.getMinutes()> 9 ? current.getMinutes(): '0' + current.getMinutes() }`);
        }, 1000*5);
    
        return () => {
          clearInterval(timer);
        };
      }, []);


    return (
        <div>
            <Typography variant="subtitle1" className={classes.title} gutterBottom>
                <div className={classes.description}><AccessAlarmIcon  className={classes.clock}/> {now} </div>
                <div className={classes.description}>
                    <span className={classes.progess}>
                        <CircularProgress color="secondary" variant="determinate" value={100*(TOTAL_CARS_SLOTS - emptySlots)/TOTAL_CARS_SLOTS} />
                    </span>
                    <span  className={classes.remainNum} >
                        { `  ${emptySlots}  ` } 
                    </span>
                     parking slots free
                </div> 
            </Typography>
        </div>
    );
}