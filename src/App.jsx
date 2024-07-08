import { useState } from 'react'
import TopNav from './components/TopNav'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="px-6 xl:p-0">

        <TopNav />
        <LandingPage />
        <Footer />
      </div>
    </>
  )
}

export default App
