import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import FileUpload from "../../components/FileUpload";
import { useRouter } from "next/router";

const Сreate = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [trackName, setTrackName] = useState('');
    const [trackArtist, setTrackArtist] = useState('');
    const [trackText, setTrackText] = useState('');
    const [image, setImage] = useState();
    const [audio, setAudio] = useState();

    const router = useRouter();

    const back = () => {
        if (activeStep > 0) {
            setActiveStep((prev) => prev - 1);
        }
    };

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep((prev) => prev + 1);
        } else {
        }
    };

    const send = () => {
        router.push('/tracks')
    }

    console.log(image)

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && (
                    <Grid container style={{ padding: "20px" }} direction="column">
                        <TextField onChange={(e) => setTrackName(e.target.value)} value={trackName} label="Введите название трека" />
                        <TextField onChange={(e) => setTrackArtist(e.target.value)} value={trackArtist} label="Введите исполнителя" />
                        <TextField onChange={(e) => setTrackText(e.target.value)} value={trackText} multiline label="Введите текс песни" />
                    </Grid>
                )}
                {activeStep === 1 && (
                    <FileUpload accept="image/*" setFile={setImage}>
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Загрузить
                        </Button>
                        {image && <img src={image} />}
                    </FileUpload>
                )}
                {activeStep === 2 && (
                    <FileUpload accept="audio/*" setFile={setAudio}>
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Загрузить
                        </Button>
                    </FileUpload>
                )}
            </StepWrapper>
            <Grid container justify="space-between">
                <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={back}
                >
                    Назад
                </Button>
                { activeStep !== 2 ?
                    <Button variant="contained" color="primary" onClick={next}>
                        Далее
                    </Button>
                    :
                    <Button variant="contained" color="primary" onClick={send}>
                        Добавить
                    </Button>
                }
            </Grid>
        </MainLayout>
    );
};

export default Сreate;
