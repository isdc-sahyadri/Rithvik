import React from 'react'
import {UserButton} from '@clerk/nextjs'
import Image from 'next/image'

function Header() {
  return (
    <div className = 'flex shadow-md p-4 justify-between'>
        <Image src={'/logo.svg'} alt='logo' width={35} height={35}/>
        <UserButton/>
    </div>
  )
}

export default Header