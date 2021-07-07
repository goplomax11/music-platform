import { Button, Card, Container, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import { TextFields } from "@material-ui/icons";
import FileUpload from "../../components/FileUpload";

const Сreate = () => {
    const [activeStep, setActiveStep] = useState(0);

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

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && (
                    <Grid container style={{ padding: "20px" }} direction="column">
                        <TextField label="Введите название трека" />
                        <TextField label="Введите исполнителя" />
                        <TextField multiline label="Введите текс песни" />
                    </Grid>
                )}
                {activeStep === 1 && (
                    <FileUpload accept="image/*">
                        <Button
                            color="primary"
                            variant="contained"
                        >
                            Загрузить
                        </Button>
                    </FileUpload>
                )}
                {activeStep === 2 && (
                    <FileUpload accept="audio/*">
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
                <Button variant="contained" color="primary" onClick={next}>
                    Далее
                </Button>
            </Grid>
        </MainLayout>
    );
};

export default Сreate;
