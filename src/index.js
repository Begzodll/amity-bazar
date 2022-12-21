import {StrictMode} from 'react';
import React from "react";
import {createRoot} from "react-dom/client";
import App from './App';

import {ThemeProvider} from "@material-tailwind/react";
import './assets/output.css';
import './assets/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    // eslint-disable-next-line react/jsx-no-undef
    <React.Fragment>
        <StrictMode>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
        </StrictMode>
    </React.Fragment>
);

