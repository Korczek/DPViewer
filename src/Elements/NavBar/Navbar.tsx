import React, { useState } from "react";

interface NavBarProps {
  setNowPage: React.Dispatch<React.SetStateAction<number>>;
}


export const NavBar: React.FC<NavBarProps> = ({ setNowPage }) => {
  const [nbHidden, setNbHidden] = useState(true);
  return (
    <>
      {nbHidden ? nbNotVisible(setNbHidden) : nbVisible(setNowPage, setNbHidden)}
    </>
  )
}

function nbNotVisible(setNbHidden: React.Dispatch<React.SetStateAction<boolean>>) {

  return (
    <div className="fixed top-5 left-5">
      <button className=" backdrop-blur bg-indigo-300/10 border-5 border-indigo-300/75 hover:bg-indigo-300/25" onClick={() => { setNbHidden(false) }}>
        Show Menu
      </button>
    </div>
  )
}

function nbVisible(
  setNowPage: React.Dispatch<React.SetStateAction<number>>,
  setNbHidden: React.Dispatch<React.SetStateAction<boolean>>) {
  return (

    <div className='fixed top-0 left-0 bottom-0 bg-indigo-700/5 backdrop-blur text-white w-1/6 border-r-2 border-indigo-300/5'>

      <div className="flex flex-full bg-indigo-300/15 justify-center py-6">
        <h1 className="text-gray-200 text-center text-base"> Select "Demo page"</h1>
      </div>

      <div className='flex left-0 right-0 flex-col justify-center items-center gap-6 pt-12'>

        <button className='flex w-full justify-center bg-indigo-300/25 hover:bg-indigo-300/50 '
          onClick={() => { setNowPage(0); setNbHidden(true); }}>

          Home
        </button>

        <button className='flex w-full justify-center bg-indigo-300/25 hover:bg-indigo-300/50 '
          onClick={() => { setNowPage(1); setNbHidden(true); }}>

          Company Manager
        </button>

      </div>

      <footer className="fixed bottom-0 left-0 right-0 text-center">
        Created by Jakub Korczyński
      </footer>
    </div>
  )
}