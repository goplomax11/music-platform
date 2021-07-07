import { Button, Card, Container, Grid } from "@material-ui/core";
import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

interface StepWrapperProps {
    activeStep: number;
}

const steps = ["Назовите трек", "Загрузите обложку", "Загрузите аудио"];

const StepWrapper: React.FC<StepWrapperProps> = ({
    activeStep,
    children,
}): JSX.Element => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) => {
                    return (
                        <Step key={index} completed={activeStep > index}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Grid
                container
                justify="center"
                style={{ margin: "70px 0", height: "250px" }}
            >
                <Card style={{ width: "600px" }}>{children}</Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;
