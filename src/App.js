import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PATH from './services/paths';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path={PATH.HOME}>
                    <Home />
                </Route>
                <Route path={PATH.MOVIES}>
                    <Movies />
                </Route>
                <Route
                    path={PATH.SINGLE_MOVIE}
                    children={<SingleMovie />}>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}