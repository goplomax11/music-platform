import { Button, FormControl, Grid, Input, InputLabel, OutlinedInput } from '@material-ui/core'
import { TextFields } from '@material-ui/icons';
import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/tracks';

const track: ITrack = {
    "comments": [],
    "_id": "60e437b8332e1b3fe46cfe2c",
    "name": "Сахарный человек",
    "artist": "Gone Fludd",
    "text": "Сахарный человек, я потерял своё сердце за ...",
    "listens": 0,
    "image": "http://localhost:5000/image/d5dc1a8c-9b87-4b40-9519-dfcdc3321a8d.png",
    "audio": "http://localhost:5000/audio/b54012f8-251b-4e99-a7a9-38ea1654a87b.mp3",
}

export const DetailInformation = () => {
    const router = useRouter();
    return (
        <MainLayout>
            <Button style={{ "marginBottom": "20px" }} variant="contained" color="primary" onClick={() => router.push('/tracks')}>
                К списку
            </Button>
            <Grid container >
                <img src={track.image} width="200" height="200" />
                <div style={{ "marginLeft": "20px" }}>
                    <h1>Название трека: {track.name}</h1>
                    <h1>Испольнитель: {track.artist}</h1>
                    <h1>Прослушиваний : {track.listens}</h1>
                </div>
            </Grid>
            <Grid container direction="column" >
                <div style={{ "fontSize": "20px", "margin": "10px 0" }}>
                    Текст песни : {track.text}
                </div>
                <div>
                    {track.comments.length > 0 ?
                        <>
                            <h2> Комментарии: </h2>
                            {track.comments.map(comment => {
                                return (
                                    <div>
                                        {comment.text}
                                    </div>
                                )
                            })}
                        </>
                        :
                        <div style={{ "fontSize": "20px", "margin": "10px 0" }}>Комментарии к данному треку отсутствуют</div>}
                </div>
                <form>
                    <FormControl fullWidth variant="outlined" style={{"margin" : "20px 0 10px 0"}}>
                        <InputLabel htmlFor="component-outlined">Имя</InputLabel>
                        <OutlinedInput  />
                    </FormControl>
                    <FormControl fullWidth variant="outlined" style={{"margin" : "10px 0 10px 0"}}>
                        <InputLabel htmlFor="component-outlined">Комментарии</InputLabel>
                        <OutlinedInput  />
                    </FormControl>

                </form>
                <Button variant="contained" color="primary">
                    Отправить
                </Button>
            </Grid>
        </MainLayout>
    )
}

export default DetailInformation;
