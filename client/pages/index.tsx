import React from 'react';
import MainLayout from '../layouts/MainLayout';

const App = () => {
    return (
    <>
        <MainLayout>
            <div className="center">
                <h1>
                    Добро пожаловать!
                </h1>
                <h2>
                    Здесь собраны мои треки)
                </h2>
            </div>
        </MainLayout>
        <style jsx>
            {`
                .center {
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    margin-top: 200px

                }
            `}
        </style>
    </>
    );
};

export default App;