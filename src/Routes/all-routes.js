import React from 'react';
import {Switch, Route} from 'react-router-dom';
import frontPage from '../MComponents/Guest_Landing/FrontPage/frontPage';

export default (
    <Switch>
        <Route exact path='/' component={frontPage} />
        <Route />
        <Route />
    </Switch>
)