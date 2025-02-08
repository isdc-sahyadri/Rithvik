"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

function Dashboard() {
  const [videoList,setVideoList] = useState([]);
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold'>Dashboard</h2>
      {videoList.length==0&& <div className='p-5 rounded-lg border mt-10 bg-grey-100'>
        <h2 className='flex gap-5 items-center text-xl font-bold mt-5 justify-center'>Let's create your new video</h2>
      <div className="flex gap-5 items-center justify-center">
        <Link href="/create-using-AI">
          <div className="border rounded-lg p-4 flex items-center justify-center gap-4 w-full mt-5 cursor-pointer hover:bg-gray-100">
            <Image src="/wand.svg" alt="magic wand" width={40} height={40} />
            <h2 className="text-md font-bold">Generate with AI</h2>
          </div>
        </Link>
        <Link href="/editor">
          <div className="border rounded-lg p-4 flex items-center justify-center gap-4 w-full mt-5 cursor-pointer hover:bg-gray-100">
            <Image src="/movie.svg" alt="movie" width={40} height={40} />
            <h2 className="text-md font-bold">Create from scratch</h2>
          </div>
        </Link>
      </div>
    </div>}
    </div>
  )
}

export default Dashboard