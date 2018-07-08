import React from 'react';
import {render} from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import routes from './routes';

import App from '../src/App/App';

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,   
    document.getElementById('root'));