import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Header/Main/Main'
import Blog from './components/Blog/Blog'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Blog></Blog>
    </div>
  )
}

export default App
