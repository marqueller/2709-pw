import './App.css'
import React from 'react';
import Header  from './components/Header';
import Footer from './components/Footer';

export default function App(){
  return (
    <div>
      <Header/>
      <h1>Hello World!</h1>
      <h2>I'm learning React JS</h2>
      <Footer/>
    </div>
  );
}