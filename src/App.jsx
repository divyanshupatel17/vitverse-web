import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Screenshots from './components/Screenshots'
import About from './components/About'
import Features from './components/Features'
import Downloads from './components/Downloads'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app">
      <Header />
      <Hero />
      <Screenshots />
      <About />
      <Downloads />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
