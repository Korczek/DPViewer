import React, { useState } from 'react'

interface NavBarProps {
    nowPage: number;
    setNowPage: React.Dispatch<React.SetStateAction<number>>;
}

export const NavBar: React.FC<NavBarProps> = ({ nowPage, setNowPage }) => {

    return (
        <div className='fixed top-0 left-0 right-0 bg-amber-700/30 backdrop-blur-xl p-4 text-white'>
            <div className='flex justify-center items-center gap-2'>
                {/* <a className='px-1 py-1 lg:px-3 
          bg-amber-300/25 hover:bg-amber-300/50 
          rounded-full text-gray-100 hover:text-gray-300'
                    href='#'>
                    Home
                </a> */}
                <button className='px-1 py-1 lg:px-3 
          bg-amber-300/25 hover:bg-amber-300/50 
          rounded-full text-gray-100 hover:text-gray-300'
          onClick={() => setNowPage(0)}>
                
            home
          </button>
          
          <button className='px-1 py-1 lg:px-3 
          bg-amber-300/25 hover:bg-amber-300/50 
          rounded-full text-gray-100 hover:text-gray-300'
          onClick={() => setNowPage(1)}>
                
            method 1
          </button>
            </div>
        </div>
    )
}