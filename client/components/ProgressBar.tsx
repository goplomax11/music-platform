import { LinearProgress } from '@material-ui/core';
import React from 'react';
import styles from '../styles/ProgressBar.module.scss';

const ProgressBar = ({progress}) => {
    return (
        <div style={{width:"70%", padding:"0 20px"}}>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    )
}

export default ProgressBar
