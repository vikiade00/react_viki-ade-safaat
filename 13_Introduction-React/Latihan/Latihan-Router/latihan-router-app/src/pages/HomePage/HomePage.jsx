import { useState } from 'react'
import React from 'react';
import reactLogo from '../../assets/react.svg'
import '../HomePage/homePage.css'
import MyButton from '../../components/MyButton';
const HomePage = () => {
  const [count, setCount] = useState(0)

    return (
        <div >
            <h1>HOME PAGE</h1>
            <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{marginTop:20}}>
      <MyButton href="http://localhost:5173/about" content="About"/>
      <MyButton href="http://localhost:5173/contact" content="Contact"/>
      </div>
      </div>
    );
}

export default HomePage;
