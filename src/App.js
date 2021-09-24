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

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>            
                <Route>
                <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}