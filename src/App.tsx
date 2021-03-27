import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./Components/Header/Header";
import Intro from "./Components/Intro/Intro";
import Features from "./Components/Features/Features";
import Works from "./Components/Works/Works";
import Team from "./Components/Team/Team";

function App() {
  return (
    <>
    <Header />
    <Intro />
    <Features />
    <Works />
    <Team />
    </>
  );
}

export default App;
