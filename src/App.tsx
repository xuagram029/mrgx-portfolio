import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroMain from './components/HeroMain'
import Contact from './components/Contact'

// white: #f7f6ff

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen scroll-smooth m-0 p-0 box-border relative font-body'>
      <Header />
      <HeroMain />
      <Contact />
    </div>
  )
}

export default App
