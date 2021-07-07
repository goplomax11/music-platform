import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { PlayCircleOutline } from "@material-ui/icons";
import PauseCircleFilledOutlinedIcon from "@material-ui/icons/PauseCircleFilledOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";
import styles from "../styles/TrackItem.module.scss";
import { useRouter } from "next/router";

interface ITrackListItemProps {
    track: any,
    active: boolean,
    setActive: Function,
}

export const TrackListItem : React.FC<ITrackListItemProps> = ({ track, active, setActive }) : JSX.Element => {
  const router = useRouter();
  return (
    <Grid container>
      <Card
        style={{
          display: "flex",
          width: "1200px",
          margin: "20px 0px",
          padding: "15px 10px",
        }}
        onClick={() => router.push("/tracks/" + track._id)}
      >
        <div onClick={(e) => {e.stopPropagation(); setActive(track._id)}}>
          <IconButton>
            {active === track._id ? (
              <PauseCircleFilledOutlinedIcon fontSize="large" />
            ) : (
              <PlayCircleOutline fontSize="large" />
            )}
          </IconButton>
        </div>
        <div className={styles.poster}>
          <img
            className={styles.imgPoster}
            src="http://localhost:5000/image/d5dc1a8c-9b87-4b40-9519-dfcdc3321a8d.png"
          />
        </div>
        <div className={styles.description}>
          <div className={styles.decriptionName}>{track.name}</div>
          <div className={styles.decriptionArtist}>{track.artist}</div>
        </div>
        {active ? (
          <div className={styles.timeline}>2:42/3:31</div>
        ) : (
          <div className={styles.deleteIcon} onClick={(e) => e.stopPropagation()}>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        )}
      </Card>
    </Grid>
  );
};

export default TrackListItem;
