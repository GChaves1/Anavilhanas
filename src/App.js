import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hotel from './components/home/Hotel';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
    <Hotel />
    </main>

    </>
  )
}

export default App;
