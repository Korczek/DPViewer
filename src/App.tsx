import { useState } from 'react'
import './App.css'
import { NavBar } from './Elements/NavBar/Navbar'
import { Home } from './Elements/Home/Home'
import { Method1 } from './Elements/Method1/Method1'

function App() {
  const [nowPage, setNowPage] = useState(0)

  return (
    <div className=''>

      <NavBar nowPage={nowPage} setNowPage={setNowPage} />

      {nowPage == 0 && <Home />}
      {nowPage == 1 && <Method1 />}

    </div>
  )
}

export default App
