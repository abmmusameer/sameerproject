import React from 'react';
import {Route} from 'react-router';

import App from './components/App/index';
import About from './components/App/index';

export default(
    <Route path="/" component={App}>
        <Route path="about" component={About} />
    </Route>
);