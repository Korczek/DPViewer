import { useState } from 'react';
import { NavBar } from './Elements/NavBar/Navbar';
import { Home } from './Elements/Home/Home';
import { CompanyMgr } from './Elements/Method1/CompanyMgr';

function App() {
  const [nowPage, setNowPage] = useState(0)

  return (
    <div>

      <NavBar setNowPage={setNowPage} />

      <div >
        {nowPage == 0 && <Home />}
        {nowPage == 1 && <CompanyMgr />}
      </div>

    </div>
  )
}
export default App