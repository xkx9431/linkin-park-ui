import Image from '../image'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Footer: {
        marginTop:'auto'
    },
}));


export default function Footer(){
    const classes = useStyles();

    return(
        <div className={classes.Footer}>
            <Image/>
        </div>
    )

};