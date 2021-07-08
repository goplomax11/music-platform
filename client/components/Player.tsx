import { IconButton } from "@material-ui/core";
import { Pause, PlayArrow } from "@material-ui/icons";
import React from "react";
import styles from "../styles/Player.module.scss";
import ProgressBar from "./ProgressBar";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const Player = () => {
    const active = false;  
  return (
    <div className={styles.player}>
      <IconButton>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <div className={styles.details}>
            <div className={styles.detailsName}>
                Просто трек
            </div>
            <div className={styles.detailsArtist}>
                Исполнитель
            </div>
      </div>
        <ProgressBar progress={50} />
      <div >
          2:35/3:42
      </div>
      <div className={styles.volume}>
        <IconButton>
            <VolumeUpIcon />
        </IconButton>
        <div>
            <input type="range"  />
        </div>
      </div>
    </div>
  );
};

export default Player;
