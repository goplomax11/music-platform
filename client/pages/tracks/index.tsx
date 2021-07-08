import { Box, Button, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core';
import { TrackList } from '../../components/TrackList';
import { useRouter } from 'next/router';
import Player from '../../components/Player';

const server = 'localhost:5000/'

const tracks = [
    {
        comments: [
            "60ae964a653d553070575fbe"
        ],
        _id: "60ae590c0de70a11a80203b2",
        name: "трек 2",
        artist: "Игорь",
        text: "Слова к песне",
        listens: 0,
        image: "image/6a143d44-50ac-45ca-a956-80bf9dbd8712.jpg",
        audio: "audio/d758cba6-bf0f-44e5-b053-f8f47b26b7d5.mp3",
    },
    {
        comments: [],
        _id: "60ae590f0de70a11a80203b3",
        name: "трек 3",
        artist: "Игорь",
        text: "Слова к песне",
        listens: 3,
        image: "image/6a143d44-50ac-45ca-a956-80bf9dbd8712.jpg",
        audio: "audio/d758cba6-bf0f-44e5-b053-f8f47b26b7d5.mp3",
    },
    {
        comments: [],
        _id: "60ae59110de70a11a80203b4",
        name: "трек 4",
        artist: "Игорь",
        text: "Слова к песне",
        listens: 0,
        image: "image/6a143d44-50ac-45ca-a956-80bf9dbd8712.jpg",
        audio: "audio/d758cba6-bf0f-44e5-b053-f8f47b26b7d5.mp3",
    },
    {
        comments: [],
        _id: "60bd2f26adaad6128c218f73",
        name: "track-123",
        artist: "Игорь",
        text: "Text",
        listens: 0,
        image: "image/1aed445e-48ad-475e-8c7d-e6bd182e4c28.jpg",
        audio: "audio/6c767543-1083-4928-96ae-dd0a770dedbd.mp3",
    },
    {
        comments: [],
        _id: "60bd2f7598b72021f0514186",
        name: "track-123",
        artist: "Игорь",
        text: "Text",
        listens: 0,
        image: "image/6a143d44-50ac-45ca-a956-80bf9dbd8712.jpg",
        audio: "audio/d758cba6-bf0f-44e5-b053-f8f47b26b7d5.mp3",
    }
]

const Tracks = () : JSX.Element => {
    const [playing, setPlaying] =  useState('');
    const router = useRouter();
    return (
        <>
            <MainLayout>
                <Grid container >
                    <Card style={{width:'1200px'}}>
                        <Box p={3}>
                            <Grid container justify='space-between'>
                                <div className='track-list'>
                                    Список треков
                                </div>
                                <div className='upload-button'>
                                <Button  variant="contained" size="large" color="primary" onClick={() => router.push('/tracks/create')}>Загрузить</Button> 
                                </div>
                            </Grid>
                        </Box>
                    </Card>
                </Grid>
                <TrackList tracks={tracks} />
            </MainLayout>
            <style jsx >
                {` .track-list {
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 72px;
                        line-height: 84px;
                    }
                    .upload-button {

                        display:flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .root {
                        display:flex;
                    }

                `}
            </style>
        </>
    );
};

export default Tracks;