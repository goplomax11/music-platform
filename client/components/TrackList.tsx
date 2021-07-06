import { Box, Button, IconButton } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import TrackListItem from './TrackListItem';
import {TrackListProps} from '../types/tracks'


export const TrackList : React.FC<TrackListProps> = ({tracks}) :JSX.Element => {
    const [active,setActive] = useState(false);
    const router = useRouter()
    return (
        <div>
            {tracks.map((track) => {
                return (
                    <TrackListItem track={track} active={active} setActive={setActive} />
                )
            })}
        </div>
    )
}
