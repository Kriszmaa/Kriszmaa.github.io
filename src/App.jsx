import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Hello from './Hello.jsx'
import Portafolio from './Portafolio.jsx'
function App() {


  return (
    <>
      <body >
        <h1><Hello/></h1>
      </body>
      <body> 
        <Portafolio/>
        </body>
    </>
  );
}

export default App
