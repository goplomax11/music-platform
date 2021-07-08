import { Container } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import Player from '../components/Player';

const MainLayout : React.FC = ({children}) => {
    return (
        <>
            <NavBar />
            <Container style={{marginTop:"109px"}}>
                {children}
            </Container>
            <Player />
        </>
    );
};

export default MainLayout;