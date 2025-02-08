import React from 'react'
import SideBar from './_components/SideBar'
import Head from 'next/head'
import Header from './_components/Header'

function DashbordLayout({children}) {
  return (
    <div>
        <div className='hidden md:flex md:w-64'>
            <SideBar/>
        </div>
        <div className='md:ml-64'>
            <Header/>
            <div>
            {children}
            </div>
        </div>
    </div>
  )
}

export default DashbordLayout
