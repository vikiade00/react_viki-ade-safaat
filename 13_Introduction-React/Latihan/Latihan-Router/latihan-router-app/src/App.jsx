import { useState } from 'react'
import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import Route from './router/router';
import Contact from './pages/Contact/Contact';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Route path="/">
      <HomePage/>
      </Route>
      <Route path="/about">
      <AboutPage/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/login">
        <LoginPage/>
      </Route>

    </div>
  )
}

export default App
