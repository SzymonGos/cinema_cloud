import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Movies from './pages/Movies';

export default function App() {
    return (
        <>
            <Navbar />
            <Movies />
            <Footer />
        </>
    );
}