import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <p>Página inicial.</p>
            <Footer />
        </div>
    );
}